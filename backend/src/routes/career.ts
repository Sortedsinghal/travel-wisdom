import express from 'express';
import { PrismaClient } from '@prisma/client';
import { validateRequest, jobApplicationSchema } from '../middleware/validation';
import { sendJobApplicationConfirmation } from '../utils/email';

const router = express.Router();
const prisma = new PrismaClient();

// Get all active job positions
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, department, type } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = { status: 'active' };
    if (department) where.department = department;
    if (type) where.type = type;

    const [careers, total] = await Promise.all([
      prisma.career.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          department: true,
          location: true,
          type: true,
          salary: true,
          createdAt: true
        }
      }),
      prisma.career.count({ where })
    ]);

    res.json({
      careers,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get careers error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get career by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const career = await prisma.career.findUnique({
      where: { id }
    });

    if (!career || career.status !== 'active') {
      return res.status(404).json({ error: 'Career position not found' });
    }

    res.json({ career });
  } catch (error) {
    console.error('Get career error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Apply for a job
router.post('/:id/apply', validateRequest(jobApplicationSchema), async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, email, phone, resume, coverLetter } = req.body;

    // Check if career position exists and is active
    const career = await prisma.career.findUnique({
      where: { id }
    });

    if (!career || career.status !== 'active') {
      return res.status(404).json({ error: 'Career position not found or not active' });
    }

    // Create job application
    const application = await prisma.jobApplication.create({
      data: {
        fullName,
        email,
        phone,
        resume,
        coverLetter,
        careerId: id
      }
    });

    // Send confirmation email
    try {
      await sendJobApplicationConfirmation(email, fullName, career.title);
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      message: 'Job application submitted successfully',
      application: {
        id: application.id,
        fullName: application.fullName,
        email: application.email,
        status: application.status,
        createdAt: application.createdAt
      }
    });
  } catch (error) {
    console.error('Job application error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all applications (admin only)
router.get('/applications/all', async (req, res) => {
  try {
    const { page = 1, limit = 10, status, careerId } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = {};
    if (status) where.status = status;
    if (careerId) where.careerId = careerId;

    const [applications, total] = await Promise.all([
      prisma.jobApplication.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          career: {
            select: {
              id: true,
              title: true,
              department: true
            }
          }
        }
      }),
      prisma.jobApplication.count({ where })
    ]);

    res.json({
      applications,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update application status (admin only)
router.put('/applications/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'reviewed', 'accepted', 'rejected'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const application = await prisma.jobApplication.update({
      where: { id },
      data: { status },
      include: {
        career: {
          select: {
            title: true,
            department: true
          }
        }
      }
    });

    res.json({
      message: 'Application status updated successfully',
      application
    });
  } catch (error) {
    console.error('Update application status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create career position (admin only)
router.post('/', async (req, res) => {
  try {
    const { title, department, location, type, description, requirements, benefits, salary } = req.body;

    const career = await prisma.career.create({
      data: {
        title,
        department,
        location,
        type,
        description,
        requirements,
        benefits,
        salary
      }
    });

    res.status(201).json({
      message: 'Career position created successfully',
      career
    });
  } catch (error) {
    console.error('Create career error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update career position (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, department, location, type, description, requirements, benefits, salary, status } = req.body;

    const career = await prisma.career.update({
      where: { id },
      data: {
        title,
        department,
        location,
        type,
        description,
        requirements,
        benefits,
        salary,
        status
      }
    });

    res.json({
      message: 'Career position updated successfully',
      career
    });
  } catch (error) {
    console.error('Update career error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

