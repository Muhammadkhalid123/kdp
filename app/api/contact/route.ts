import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Admin Email Content
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: 'kandledirectpublishing@gmail.com',
            cc: 'khalid8sharpf@gmail.com, aliahk.developer@gmail.com, muhammadalisoomr110@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #f97316;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
        };

        // User Auto-Reply Email Content
        const userMailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "We've received your message - Kandle Direct Publishing",
            html: `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #f97316; font-size: 24px; margin-bottom: 10px;">Thank You for Reaching Out</h1>
            <div style="width: 50px; height: 3px; background-color: #f97316; margin: 0 auto;"></div>
          </div>
          
          <p>Dear ${name},</p>
          
          <p>Thank you for contacting <strong>Kandle Direct Publishing</strong>. We have successfully received your message.</p>
          
          <p>Writing a book is a journey of passion and dedication, and we are truly honored that you've chosen to share a part of that journey with us. Whether you're just starting out or looking to publish your masterpiece, we're here to support you every step of the way.</p>
          
          <p>Our team is currently reviewing your inquiry and will get back to you shortly with the information you need.</p>
          
          <p>In the meantime, keep writing and keep dreaming.</p>
          
          <br>
          <p>Warm regards,</p>
          <p><strong>The Kandle Direct Publishing Team</strong></p>
          
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; font-size: 12px; color: #888;">
            <p>&copy; ${new Date().getFullYear()} Kandle Direct Publishing. All rights reserved.</p>
          </div>
        </div>
      `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
