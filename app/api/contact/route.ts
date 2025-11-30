import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, phone, subject, message } = body;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Check if environment variables are configured
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
            console.error('Email credentials not configured');
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact the administrator.' },
                { status: 503 }
            );
        }

        // Create a transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        // Collect all recipient emails
        const recipients = [
            process.env.EMAIL_RECIPIENT_1,
            process.env.EMAIL_RECIPIENT_2,
            process.env.EMAIL_RECIPIENT_3,
        ].filter(Boolean); // Remove undefined values

        // If no recipients configured, use EMAIL_USER as fallback
        const finalRecipients = recipients.length > 0
            ? recipients.join(', ')
            : process.env.EMAIL_USER;

        // 1. EMAIL TO ADMIN(S) - Form submission notification
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: finalRecipients,
            subject: subject || `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316; border-bottom: 3px solid #f97316; padding-bottom: 10px;">
            📧 New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${name}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <span style="color: #6b7280;">${email}</span></p>
            ${phone ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Phone:</strong> <span style="color: #6b7280;">${phone}</span></p>` : ''}
            ${subject ? `<p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #6b7280;">${subject}</span></p>` : ''}
            ${message ? `
              <div style="margin-top: 20px;">
                <strong style="color: #374151;">Message:</strong>
                <p style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; color: #1f2937; border-left: 4px solid #f97316;">${message}</p>
              </div>
            ` : ''}
          </div>
          <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-radius: 6px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; font-size: 14px; color: #92400e;">
              <strong>📌 Action Required:</strong> Please respond to this inquiry within 24 hours.
            </p>
          </div>
          <p style="color: #6b7280; font-size: 12px; margin-top: 20px; border-top: 1px solid #e5e7eb; padding-top: 15px;">
            This email was sent from the Kandle Direct Publishing contact form.<br>
            Submitted on: ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short'
            })}
          </p>
        </div>
      `,
            text: `
        📧 NEW CONTACT FORM SUBMISSION
        ==============================
        
        From: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${subject ? `Subject: ${subject}` : ''}
        
        ${message ? `Message:\n${message}` : ''}
        
        ---
        Submitted: ${new Date().toLocaleString()}
        Please respond within 24 hours.
      `,
        };

        // 2. CONFIRMATION EMAIL TO USER
        const userConfirmationOptions = {
            from: process.env.EMAIL_USER,
            to: email, // Send to the user who submitted the form
            subject: 'Thank You for Contacting Kandle Direct Publishing! 🎉',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You, ${name}! ✨</h1>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #374151; line-height: 1.6;">
              We've received your message and our team will get back to you soon!
            </p>
            
            <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #f97316;">
              <h3 style="color: #92400e; margin-top: 0; font-size: 18px;">📋 Your Submission Details:</h3>
              <p style="margin: 8px 0; color: #78350f;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 8px 0; color: #78350f;"><strong>Email:</strong> ${email}</p>
              ${phone ? `<p style="margin: 8px 0; color: #78350f;"><strong>Phone:</strong> ${phone}</p>` : ''}
              ${subject ? `<p style="margin: 8px 0; color: #78350f;"><strong>Subject:</strong> ${subject}</p>` : ''}
              ${message ? `<p style="margin: 8px 0; color: #78350f;"><strong>Message:</strong> ${message}</p>` : ''}
            </div>
            
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <h3 style="color: #374151; margin-top: 0; font-size: 16px;">⏱️ What Happens Next?</h3>
              <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
                <li>Our team will review your inquiry within 24 hours</li>
                <li>You'll receive a personalized response from our publishing experts</li>
                <li>We'll guide you through the next steps of your publishing journey</li>
              </ul>
            </div>
            
            <p style="color: #6b7280; font-size: 14px; line-height: 1.6;">
              In the meantime, feel free to explore our services or check out our latest success stories on our website.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://kandledirectpublishing.com" 
                 style="background-color: #f97316; color: white; padding: 12px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; display: inline-block;">
                Visit Our Website
              </a>
            </div>
            
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 25px 0;">
            
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              Kandle Direct Publishing<br>
              Email: kandledirectpublishing@gmail.com<br>
              Phone: +44 7918 934410
            </p>
            
            <p style="color: #d1d5db; font-size: 11px; text-align: center; margin-top: 15px;">
              This is an automated confirmation email. Please do not reply directly to this message.
            </p>
          </div>
        </div>
      `,
            text: `
        Thank You for Contacting Kandle Direct Publishing!
        
        Dear ${name},
        
        We've received your message and our team will get back to you soon!
        
        YOUR SUBMISSION DETAILS:
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${subject ? `Subject: ${subject}` : ''}
        ${message ? `Message: ${message}` : ''}
        
        WHAT HAPPENS NEXT?
        - Our team will review your inquiry within 24 hours
        - You'll receive a personalized response from our publishing experts
        - We'll guide you through the next steps of your publishing journey
        
        Best regards,
        Kandle Direct Publishing Team
        
        Email: kandledirectpublishing@gmail.com
        Phone: +44 7918 934410
      `,
        };

        // Send both emails
        const emailPromises = [
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userConfirmationOptions),
        ];

        await Promise.all(emailPromises);

        console.log(`✅ Emails sent successfully to: ${finalRecipients} and ${email}`);

        return NextResponse.json(
            {
                message: 'Email sent successfully!',
                recipients: recipients.length,
                userConfirmed: true
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Email error:', error);

        // Provide more detailed error message in development
        const errorMessage = process.env.NODE_ENV === 'development' && error instanceof Error
            ? error.message
            : 'Failed to send email. Please try again later.';

        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
}
