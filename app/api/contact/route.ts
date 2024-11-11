// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: 'contact@firatsolar.com',
      pass: 'Rawan@Yaman786',
    },
  });

  // Set up email data
  const mailOptions = {
    from: email,
    to: 'contact@firatsolar.com',
    subject: `Contact Form Submission from ${name}`,
    text: message,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
}
