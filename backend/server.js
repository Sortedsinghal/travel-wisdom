const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

app.post('/api/send-query', async (req, res) => {
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
  } catch (error) {
    console.error('Email error:', error.message);
    console.log('Query logged:', { name, email, phone, tripName });
  }
  
  res.json({ success: true });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});