import express from 'express';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Get all published blogs
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, featured, tag } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: any = { published: true };
    if (featured === 'true') where.featured = true;
    if (tag) where.tags = { has: tag };

    const [blogs, total] = await Promise.all([
      prisma.blog.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          featured: true,
          author: true,
          tags: true,
          createdAt: true
        }
      }),
      prisma.blog.count({ where })
    ]);

    res.json({
      blogs,
      pagination: {
        page: Number(page),
        limit: Number(limit),
        total,
        pages: Math.ceil(total / Number(limit))
      }
    });
  } catch (error) {
    console.error('Get blogs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get featured blogs
router.get('/featured', async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { 
        published: true,
        featured: true 
      },
      orderBy: { createdAt: 'desc' },
      take: 3,
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        author: true,
        tags: true,
        createdAt: true
      }
    });

    res.json({ blogs });
  } catch (error) {
    console.error('Get featured blogs error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get blog by slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await prisma.blog.findUnique({
      where: { slug }
    });

    if (!blog || !blog.published) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.json({ blog });
  } catch (error) {
    console.error('Get blog error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all tags
router.get('/tags/all', async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany({
      where: { published: true },
      select: { tags: true }
    });

    const allTags = blogs.flatMap(blog => blog.tags);
    const uniqueTags = [...new Set(allTags)];

    res.json({ tags: uniqueTags });
  } catch (error) {
    console.error('Get tags error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create blog (admin only - you might want to add admin middleware)
router.post('/', async (req, res) => {
  try {
    const { title, content, excerpt, author, tags, featured = false, published = false } = req.body;
    
    // Generate slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        author,
        tags,
        featured,
        published
      }
    });

    res.status(201).json({
      message: 'Blog created successfully',
      blog
    });
  } catch (error) {
    console.error('Create blog error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update blog (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, excerpt, author, tags, featured, published } = req.body;

    const blog = await prisma.blog.update({
      where: { id },
      data: {
        title,
        content,
        excerpt,
        author,
        tags,
        featured,
        published
      }
    });

    res.json({
      message: 'Blog updated successfully',
      blog
    });
  } catch (error) {
    console.error('Update blog error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete blog (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.blog.delete({
      where: { id }
    });

    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('Delete blog error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;

