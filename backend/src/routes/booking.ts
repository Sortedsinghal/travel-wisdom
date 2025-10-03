import express from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRequest, bookingSchema } from '../middleware/validation';
import { optionalAuth, AuthRequest } from '../middleware/auth';
import { sendBookingConfirmation } from '../utils/email';

const router = express.Router();
const prisma = new PrismaClient();

// Submit booking inquiry
router.post('/', optionalAuth, validateRequest(bookingSchema), async (req: AuthRequest, res) => {
  try {
    const { fullName, email, mobile, travelers, month, message } = req.body;
    const userId = req.user?.id;

    // Create booking record
    const booking = await prisma.booking.create({
      data: {
        fullName,
        email,
        mobile,
        travelers,
        month,
        message,
        userId
      }
    });

    // Send confirmation email
    try {
      await sendBookingConfirmation(email, fullName, month);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Booking inquiry submitted successfully',
      booking: {
        id: booking.id,
        fullName: booking.fullName,
        email: booking.email,
        mobile: booking.mobile,
        travelers: booking.travelers,
        month: booking.month,
        status: booking.status,
        createdAt: booking.createdAt
      }
    });
  } catch (error) {
    console.error('Booking submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all bookings (admin only)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, month } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (status) where.status = status;
    if (month) where.month = month;

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          fullName: true,
          email: true,
          mobile: true,
          travelers: true,
          month: true,
          status: true,
          createdAt: true,
          user: {
            select: {
              id: true,
              firstName: true,
              lastName: true
            }
          }
        }
      }),
      prisma.booking.count({ where })
    ]);

    res.json({
      bookings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get bookings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get booking by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({ booking });
  } catch (error) {
    console.error('Get booking error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update booking status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'confirmed', 'cancelled'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const booking = await prisma.booking.update({
      where: { id },
      data: { status },
      select: {
        id: true,
        fullName: true,
        email: true,
        mobile: true,
        travelers: true,
        month: true,
        status: true,
        updatedAt: true
      }
    });

    res.json({
      message: 'Booking status updated successfully',
      booking
    });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user's bookings
router.get('/user/my-bookings', optionalAuth, async (req: AuthRequest, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ error: 'Authentication required' });
    }

    const { page = 1, limit = 10 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where: { userId: req.user.id },
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          fullName: true,
          email: true,
          mobile: true,
          travelers: true,
          month: true,
          status: true,
          createdAt: true
        }
      }),
      prisma.booking.count({ where: { userId: req.user.id } })
    ]);

    res.json({
      bookings,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get user bookings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

