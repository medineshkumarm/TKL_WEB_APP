import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import Contact from '../../../models/Contact';

const MONGO_URI = process.env.MONGO_URI; // Ensure this is in your .env.local

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    
});
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    if (!mongoose.connection.readyState) {
      await mongoose.connect(MONGO_URI!);
    }

    const { name, email, message } = await req.json();

    // Save form data to DB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'New Contact Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Message sent and saved successfully.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Something went wrong.' });
  }
}
