import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
    
    
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, name, subject, message,contact_number } = reqBody;

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTTP_EMAIL,
        pass: process.env.SMTTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTTP_EMAIL,
      to: email,
      subject: subject,
      html: '<p>Name: ' + name + '</p><p>Email: ' + email + '</p><p>Message: ' + message + '+</p><p>Contact Number: ' + contact_number +'</p>',
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ status: 'success', message: 'Email sent successfully' });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}

   