import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, message, tripName } = req.body;
  
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'Krishnasinghal9711@gmail.com',
        pass: 'zfrf kyup wsda stmt'
      }
    });
    
    await transporter.sendMail({
      from: 'Krishnasinghal9711@gmail.com',
      to: 'Krishnasinghal9711@gmail.com',
      subject: `New Query - ${tripName || 'General Query'}`,
      html: `<h3>New Query</h3><p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Trip:</b> ${tripName}</p><p><b>Message:</b> ${message}</p>`
    });
    
    console.log('Email sent for:', name);
    res.json({ success: true });
  } catch (error) {
    console.error('Email error:', error.message);
    console.log('Query logged:', { name, email, phone, tripName });
    res.json({ success: true }); // Still return success to avoid user-facing errors
  }
}