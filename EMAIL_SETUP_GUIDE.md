# Contact Form Email Setup Guide

## Problem
The contact form was showing "Failed to send email" error because the API endpoint `/api/contact` was missing.

## Solution
I've created the missing API route and configured it to send emails using Nodemailer.

## Setup Instructions

### 1. Configure Environment Variables

You need to add the following environment variables to your `.env.local` file:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password-here
EMAIL_RECIPIENT=kandledirectpublishing@gmail.com
```

**Important:** 
- `EMAIL_USER`: Your Gmail address that will send the emails
- `EMAIL_PASSWORD`: This is NOT your regular Gmail password. You need to generate an **App Password** from Google.
- `EMAIL_RECIPIENT`: The email address where you want to receive contact form submissions

### 2. Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** if you haven't already
4. Go to **App passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** and **Windows Computer** (or Other)
6. Click **Generate**
7. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)
8. Paste this password into your `.env.local` file as `EMAIL_PASSWORD`

### 3. Test the Contact Form

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page
3. Fill out the form and submit
4. Check the recipient email inbox for the submission

## Alternative: Use Other Email Services

If you don't want to use Gmail, you can modify the `app/api/contact/route.ts` file to use other services:

### SendGrid
```javascript
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
});
```

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

## Files Created/Modified

1. **Created:** `app/api/contact/route.ts` - API endpoint for contact form
2. **Created:** `env.example` - Example environment variables
3. **Installed:** `nodemailer` and `@types/nodemailer` packages

## Security Note

Never commit your `.env.local` file to Git! It's already in `.gitignore`, but double-check to ensure your email credentials stay private.
