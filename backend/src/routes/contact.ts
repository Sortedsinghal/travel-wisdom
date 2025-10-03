import express from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRequest, contactSchema } from '../middleware/validation';
import { optionalAuth, AuthRequest } from '../middleware/auth';
import { sendContactConfirmation } from '../utils/email';

const router = express.Router();
const prisma = new PrismaClient();

// Submit contact form
router.post('/', optionalAuth, validateRequest(contactSchema), async (req: AuthRequest, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;
    const userId = req.user?.id;

    // Create contact record
    const contact = await prisma.contact.create({
      data: {
        fullName,
        email,
        phone,
        subject,
        message,
        userId
      }
    });

    // Send confirmation email
    try {
      await sendContactConfirmation(email, fullName);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Contact form submitted successfully',
      contact: {
        id: contact.id,
        fullName: contact.fullName,
        email: contact.email,
        subject: contact.subject,
        status: contact.status,
        createdAt: contact.createdAt
      }
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all contacts (admin only - you might want to add admin middleware)
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where = status ? { status: status as string } : {};

    const [contacts, total] = await Promise.all([
      prisma.contact.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          subject: true,
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
      prisma.contact.count({ where })
    ]);

    res.json({
      contacts,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get contact by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const contact = await prisma.contact.findUnique({
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

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.json({ contact });
  } catch (error) {
    console.error('Get contact error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update contact status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'responded', 'closed'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const contact = await prisma.contact.update({
      where: { id },
      data: { status },
      select: {
        id: true,
        fullName: true,
        email: true,
        subject: true,
        status: true,
        updatedAt: true
      }
    });

    res.json({
      message: 'Contact status updated successfully',
      contact
    });
  } catch (error) {
    console.error('Update contact status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
