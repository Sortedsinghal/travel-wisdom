# Travel Wisdom Backend API

A comprehensive backend API for the Travel Wisdom travel booking platform built with Node.js, Express, TypeScript, and PostgreSQL.

## 🚀 Features

- **User Authentication**: JWT-based authentication with registration and login
- **Contact Management**: Handle contact form submissions with email notifications
- **Booking System**: Manage trip inquiries and bookings
- **Blog Management**: Publish and manage travel blogs
- **Career Portal**: Job listings and application management
- **Newsletter**: Email subscription management
- **Email Notifications**: Automated email confirmations
- **Data Validation**: Request validation using Zod
- **Security**: Rate limiting, CORS, and Helmet security middleware

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT
- **Email**: Nodemailer
- **Validation**: Zod
- **Security**: Helmet, CORS, Rate Limiting

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v13 or higher)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Setup

Copy the environment example file and configure your variables:

```bash
cp env.example .env
```

Update the `.env` file with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/travel_wisdom_db"

# JWT
JWT_SECRET="your-super-secret-jwt-key-here"
JWT_EXPIRES_IN="7d"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# Server
PORT=3001
NODE_ENV="development"

# Frontend URL
FRONTEND_URL="http://localhost:5173"
```

### 3. Database Setup

```bash
# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Seed the database with sample data
npm run db:seed
```

### 4. Start Development Server

```bash
npm run dev
```

The server will start on `http://localhost:3001`

## 📚 API Documentation

### Authentication Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile
- `PUT /api/auth/profile` - Update user profile
- `PUT /api/auth/change-password` - Change user password

### Contact Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `GET /api/contact/:id` - Get contact by ID
- `PUT /api/contact/:id/status` - Update contact status

### Booking Endpoints

- `POST /api/booking` - Submit booking inquiry
- `GET /api/booking` - Get all bookings (admin)
- `GET /api/booking/:id` - Get booking by ID
- `PUT /api/booking/:id/status` - Update booking status
- `GET /api/booking/user/my-bookings` - Get user's bookings

### Blog Endpoints

- `GET /api/blog` - Get all published blogs
- `GET /api/blog/featured` - Get featured blogs
- `GET /api/blog/:slug` - Get blog by slug
- `GET /api/blog/tags/all` - Get all blog tags
- `POST /api/blog` - Create blog (admin)
- `PUT /api/blog/:id` - Update blog (admin)
- `DELETE /api/blog/:id` - Delete blog (admin)

### Career Endpoints

- `GET /api/career` - Get all active job positions
- `GET /api/career/:id` - Get job position by ID
- `POST /api/career/:id/apply` - Apply for a job
- `GET /api/career/applications/all` - Get all applications (admin)
- `PUT /api/career/applications/:id/status` - Update application status (admin)
- `POST /api/career` - Create job position (admin)
- `PUT /api/career/:id` - Update job position (admin)

### Newsletter Endpoints

- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter
- `GET /api/newsletter/subscribers` - Get all subscribers (admin)
- `GET /api/newsletter/status/:email` - Check subscription status

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Database
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:migrate   # Run database migrations
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database with sample data

# Production
npm run build        # Build for production
npm start           # Start production server
```

## 🗄️ Database Schema

The database includes the following main entities:

- **Users**: User accounts and authentication
- **Contacts**: Contact form submissions
- **Bookings**: Trip booking inquiries
- **Blogs**: Travel blog posts
- **Careers**: Job positions
- **Job Applications**: Job applications
- **Newsletter**: Email subscriptions

## 🔒 Security Features

- **Rate Limiting**: Prevents API abuse
- **CORS**: Cross-origin resource sharing configuration
- **Helmet**: Security headers
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Request validation using Zod
- **Password Hashing**: Bcrypt for secure password storage

## 📧 Email Features

- Contact form confirmations
- Booking inquiry confirmations
- Newsletter subscription confirmations
- Job application confirmations

## 🚀 Deployment

### Environment Variables for Production

Make sure to set the following environment variables in production:

- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Strong secret for JWT signing
- `SMTP_*`: Email service configuration
- `NODE_ENV`: Set to "production"
- `FRONTEND_URL`: Your frontend domain

### Build and Deploy

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

