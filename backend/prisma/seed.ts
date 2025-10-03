import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const adminPassword = await bcrypt.hash('admin123', 12);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@travelwisdom.com' },
    update: {},
    create: {
      email: 'admin@travelwisdom.com',
      firstName: 'Admin',
      lastName: 'User',
      password: adminPassword,
      isVerified: true
    }
  });

  console.log('✅ Admin user created:', admin.email);

  // Create sample blogs
  const blogs = [
    {
      title: 'Top 10 Destinations for Adventure Travel in 2024',
      slug: 'top-10-adventure-destinations-2024',
      content: `
        <h2>Discover the World's Most Thrilling Adventures</h2>
        <p>Adventure travel is more than just a vacation—it's a journey that challenges your limits and creates unforgettable memories. In 2024, the world offers incredible opportunities for thrill-seekers and nature lovers alike.</p>
        
        <h3>1. Patagonia, Chile & Argentina</h3>
        <p>Experience the raw beauty of Patagonia with its towering mountains, massive glaciers, and pristine wilderness. Perfect for hiking, climbing, and wildlife photography.</p>
        
        <h3>2. Nepal - Everest Base Camp Trek</h3>
        <p>Challenge yourself with the iconic trek to Everest Base Camp. This 12-day journey takes you through Sherpa villages and offers breathtaking views of the world's highest peak.</p>
        
        <h3>3. Iceland - Land of Fire and Ice</h3>
        <p>Explore glaciers, volcanoes, and the Northern Lights in this otherworldly destination. Perfect for those seeking unique landscapes and outdoor adventures.</p>
        
        <p>These destinations offer once-in-a-lifetime experiences that will transform your perspective on travel and life itself.</p>
      `,
      excerpt: 'Discover the world\'s most thrilling adventure destinations for 2024, from Patagonia to Nepal, and create unforgettable memories.',
      author: 'Travel Wisdom Team',
      tags: ['adventure', 'travel', 'destinations', '2024'],
      featured: true,
      published: true
    },
    {
      title: 'Essential Packing Tips for International Travel',
      slug: 'essential-packing-tips-international-travel',
      content: `
        <h2>Master the Art of Packing</h2>
        <p>Packing efficiently is an art that can make or break your travel experience. Here are our expert tips to help you pack like a pro.</p>
        
        <h3>1. Make a Packing List</h3>
        <p>Start with a comprehensive list of everything you need. This prevents overpacking and ensures you don't forget essentials.</p>
        
        <h3>2. Roll Your Clothes</h3>
        <p>Rolling clothes instead of folding them saves space and reduces wrinkles. This technique can increase your packing capacity by up to 30%.</p>
        
        <h3>3. Use Packing Cubes</h3>
        <p>Organize your belongings with packing cubes. They keep your suitcase neat and make it easy to find items quickly.</p>
        
        <h3>4. Pack Versatile Items</h3>
        <p>Choose clothing that can be mixed and matched for different occasions. A few quality pieces are better than many single-use items.</p>
        
        <p>Remember: less is more when it comes to travel packing!</p>
      `,
      excerpt: 'Learn expert packing techniques to travel lighter, smarter, and more efficiently on your next international adventure.',
      author: 'Sarah Johnson',
      tags: ['packing', 'travel-tips', 'international', 'organization'],
      featured: false,
      published: true
    },
    {
      title: 'Sustainable Travel: How to Explore Responsibly',
      slug: 'sustainable-travel-explore-responsibly',
      content: `
        <h2>Travel with Purpose and Responsibility</h2>
        <p>Sustainable travel is about making conscious choices that benefit local communities and protect the environment for future generations.</p>
        
        <h3>Choose Eco-Friendly Accommodations</h3>
        <p>Look for hotels and lodges that have environmental certifications and sustainable practices. Many properties now offer carbon-neutral stays.</p>
        
        <h3>Support Local Communities</h3>
        <p>Eat at local restaurants, buy from local artisans, and choose tour operators that employ local guides. Your money directly supports the community.</p>
        
        <h3>Reduce Your Carbon Footprint</h3>
        <p>Consider alternative transportation methods, offset your flights, and choose destinations closer to home when possible.</p>
        
        <h3>Respect Wildlife and Nature</h3>
        <p>Always maintain a safe distance from wildlife, never feed animals, and stick to designated trails to protect fragile ecosystems.</p>
        
        <p>Every small action counts toward preserving our beautiful planet for future travelers.</p>
      `,
      excerpt: 'Discover how to travel sustainably and make a positive impact on the destinations you visit while protecting our planet.',
      author: 'Michael Chen',
      tags: ['sustainable', 'eco-friendly', 'responsible-travel', 'environment'],
      featured: true,
      published: true
    }
  ];

  for (const blog of blogs) {
    await prisma.blog.upsert({
      where: { slug: blog.slug },
      update: {},
      create: blog
    });
  }

  console.log('✅ Sample blogs created');

  // Create sample career positions
  const careers = [
    {
      title: 'Senior Travel Consultant',
      department: 'Sales',
      location: 'New Delhi, India',
      type: 'full-time',
      description: 'We are looking for an experienced travel consultant to join our team and help customers plan their dream vacations.',
      requirements: [
        'Minimum 3 years experience in travel industry',
        'Excellent communication skills',
        'Knowledge of international destinations',
        'Customer service experience',
        'Proficiency in travel booking systems'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Travel discounts',
        'Professional development opportunities',
        'Flexible working hours'
      ],
      salary: '₹6,00,000 - ₹8,00,000 per annum',
      status: 'active'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'full-time',
      description: 'Join our marketing team to help promote our travel services through digital channels and social media.',
      requirements: [
        'Bachelor\'s degree in Marketing or related field',
        '2+ years digital marketing experience',
        'Proficiency in social media platforms',
        'SEO and SEM knowledge',
        'Content creation skills'
      ],
      benefits: [
        'Remote work flexibility',
        'Performance bonuses',
        'Learning and development budget',
        'Health and wellness benefits',
        'Travel opportunities'
      ],
      salary: '₹4,00,000 - ₹6,00,000 per annum',
      status: 'active'
    },
    {
      title: 'Customer Support Representative',
      department: 'Customer Service',
      location: 'New Delhi, India',
      type: 'full-time',
      description: 'Provide excellent customer service and support to our travelers before, during, and after their trips.',
      requirements: [
        'High school diploma or equivalent',
        'Customer service experience preferred',
        'Strong problem-solving skills',
        'Patience and empathy',
        'Basic computer skills'
      ],
      benefits: [
        'Training provided',
        'Career growth opportunities',
        'Team building activities',
        'Employee recognition programs',
        'Travel industry exposure'
      ],
      salary: '₹3,00,000 - ₹4,50,000 per annum',
      status: 'active'
    }
  ];

  for (const career of careers) {
    await prisma.career.upsert({
      where: { 
        title_department: {
          title: career.title,
          department: career.department
        }
      },
      update: {},
      create: career
    });
  }

  console.log('✅ Sample career positions created');

  // Create sample newsletter subscribers
  const subscribers = [
    'john.doe@example.com',
    'jane.smith@example.com',
    'travel.lover@example.com'
  ];

  for (const email of subscribers) {
    await prisma.newsletter.upsert({
      where: { email },
      update: {},
      create: { email }
    });
  }

  console.log('✅ Sample newsletter subscribers created');

  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

