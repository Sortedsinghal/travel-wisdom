import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export const validateRequest = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      });
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          error: 'Validation error',
          details: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }
      next(error);
    }
  };
};

// Common validation schemas
export const registerSchema = z.object({
  body: z.object({
    firstName: z.string().min(2, 'First name must be at least 2 characters'),
    lastName: z.string().min(2, 'Last name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters')
  })
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required')
  })
});

export const contactSchema = z.object({
  body: z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    subject: z.string().min(3, 'Subject must be at least 3 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters')
  })
});

export const bookingSchema = z.object({
  body: z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    mobile: z.string().min(10, 'Mobile number must be at least 10 digits'),
    travelers: z.number().int().min(1, 'At least 1 traveler required'),
    month: z.string().min(1, 'Travel month is required'),
    message: z.string().optional()
  })
});

export const newsletterSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address')
  })
});

export const jobApplicationSchema = z.object({
  body: z.object({
    fullName: z.string().min(2, 'Full name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    resume: z.string().url().optional(),
    coverLetter: z.string().optional()
  })
});

