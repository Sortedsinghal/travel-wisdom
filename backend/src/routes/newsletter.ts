import express from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRequest, newsletterSchema } from '../middleware/validation';
import { sendNewsletterConfirmation } from '../utils/email';

const router = express.Router();
const prisma = new PrismaClient();

// Subscribe to newsletter
router.post('/subscribe', validateRequest(newsletterSchema), async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email already exists
    const existingSubscription = await prisma.newsletter.findUnique({
      where: { email }
    });

    if (existingSubscription) {
      if (existingSubscription.subscribed) {
        return res.status(400).json({ error: 'Email already subscribed to newsletter' });
      } else {
        // Reactivate subscription
        const subscription = await prisma.newsletter.update({
          where: { email },
          data: { subscribed: true }
        });

        // Send confirmation email
        try {
          await sendNewsletterConfirmation(email);
        } catch (emailError) {
          console.error('Email sending failed:', emailError);
        }

        return res.json({
          message: 'Successfully resubscribed to newsletter',
          subscription: {
            email: subscription.email,
            subscribed: subscription.subscribed,
            createdAt: subscription.createdAt
          }
        });
      }
    }

    // Create new subscription
    const subscription = await prisma.newsletter.create({
      data: { email }
    });

    // Send confirmation email
    try {
      await sendNewsletterConfirmation(email);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Successfully subscribed to newsletter',
      subscription: {
        email: subscription.email,
        subscribed: subscription.subscribed,
        createdAt: subscription.createdAt
      }
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', validateRequest(newsletterSchema), async (req, res) => {
  try {
    const { email } = req.body;

    const subscription = await prisma.newsletter.findUnique({
      where: { email }
    });

    if (!subscription) {
      return res.status(404).json({ error: 'Email not found in newsletter subscriptions' });
    }

    if (!subscription.subscribed) {
      return res.status(400).json({ error: 'Email is already unsubscribed' });
    }

    await prisma.newsletter.update({
      where: { email },
      data: { subscribed: false }
    });

    res.json({
      message: 'Successfully unsubscribed from newsletter'
    });
  } catch (error) {
    console.error('Newsletter unsubscription error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all subscribers (admin only)
router.get('/subscribers', async (req, res) => {
  try {
    const { page = 1, limit = 50, subscribed } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (subscribed !== undefined) {
      where.subscribed = subscribed === 'true';
    }

    const [subscribers, total] = await Promise.all([
      prisma.newsletter.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          email: true,
          subscribed: true,
          createdAt: true
        }
      }),
      prisma.newsletter.count({ where })
    ]);

    res.json({
      subscribers,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get subscribers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Check subscription status
router.get('/status/:email', async (req, res) => {
  try {
    const { email } = req.params;

    const subscription = await prisma.newsletter.findUnique({
      where: { email },
      select: {
        email: true,
        subscribed: true,
        createdAt: true
      }
    });

    if (!subscription) {
      return res.status(404).json({ error: 'Email not found in newsletter subscriptions' });
    }

    res.json({ subscription });
  } catch (error) {
    console.error('Get subscription status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

