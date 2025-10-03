#!/bin/bash

# Travel Wisdom Backend Setup Script
echo "🚀 Setting up Travel Wisdom Backend..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (v18 or higher) first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null; then
    echo "❌ PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if .env file exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp env.example .env
    echo "⚠️  Please update the .env file with your database and email configuration."
    echo "   Required variables:"
    echo "   - DATABASE_URL"
    echo "   - JWT_SECRET"
    echo "   - SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS"
    echo ""
    echo "   Press Enter when you've updated the .env file..."
    read
fi

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npm run db:generate

# Push database schema
echo "🗄️  Setting up database schema..."
npm run db:push

# Seed database
echo "🌱 Seeding database with sample data..."
npm run db:seed

echo ""
echo "✅ Backend setup completed successfully!"
echo ""
echo "🚀 To start the development server:"
echo "   npm run dev"
echo ""
echo "📊 To open Prisma Studio:"
echo "   npm run db:studio"
echo ""
echo "🔗 API will be available at: http://localhost:3001"
echo "📋 Health check: http://localhost:3001/health"
echo ""
echo "📚 For more information, see README.md"

