# Contact Form Email Troubleshooting Guide

## Current Error: "Failed to send email. Please try again later."

This error means the API route is working, but the email sending is failing. Here are the steps to fix it:

## Quick Diagnostic Test

1. **Check if environment variables are set:**
   - Open your browser and go to: `http://localhost:3000/api/debug-env`
   - This will show you which environment variables are configured

## Common Issues & Solutions

### Issue 1: Environment Variables Not Set ❌

**Symptoms:** Debug endpoint shows "❌ Not set" for EMAIL_USER or EMAIL_PASSWORD

**Solution:** 
1. Open `.env.local` file in your project root
2. Add these lines:
```env
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
EMAIL_RECIPIENT=kandledirectpublishing@gmail.com
```
3. **Restart your development server** (environment variables only load on startup)

### Issue 2: Gmail App Password Not Generated ⚠️

**Symptoms:** Variables are set but email still fails

**Solution:**
1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification first (required!)
3. Create a new App Password for "Mail"
4. Copy the 16-character password (spaces don't matter)
5. Paste into `.env.local` as EMAIL_PASSWORD
6. Restart dev server

### Issue 3: "Less Secure App Access" Error 🔒

**Symptoms:** Error message contains "less secure" or "authentication failed"

**Solution:**
Gmail no longer supports "less secure apps". You MUST use an App Password (not your regular Gmail password).

### Issue 4: Development Server Not Restarted 🔄

**Symptoms:** You added the environment variables but still getting errors

**Solution:**
1. Stop your dev server (Ctrl+C)
2. Run: `npm run dev`
3. Try the form again

## Alternative Solutions (No Gmail Configuration Needed)

If you're having trouble with Gmail, here are easier alternatives:

### Option 1: Formspree (Recommended - Easiest)

1. Sign up at: https://formspree.io/ (Free tier available)
2. Create a form and get your form endpoint
3. I can update your Contact component to use Formspree instead

### Option 2: EmailJS

1. Sign up at: https://www.emailjs.com/ (Free tier: 200 emails/month)
2. Get your service ID, template ID, and public key
3. I can integrate EmailJS into your contact form

### Option 3: Send Email to Your Own Server

If you have access to a different email service (like SendGrid, Mailgun, etc.), let me know and I can configure it.

## Testing Steps

After configuring:

1. **Check environment variables:**
   ```bash
   # Visit: http://localhost:3000/api/debug-env
   # Should show ✅ for EMAIL_USER and EMAIL_PASSWORD
   ```

2. **Test the contact form:**
   - Go to your contact page
   - Fill out all fields
   - Submit
   - Check the browser console (F12) for any errors
   - Check terminal for server-side errors

3. **Check your email inbox:**
   - Look for the email in the EMAIL_RECIPIENT inbox
   - Check spam folder too!

## Still Not Working?

If you're still having issues, try this:

1. Open browser console (F12)
2. Go to Network tab
3. Submit the form
4. Look for the `/api/contact` request
5. Click on it and check the "Response" tab
6. Share the error message with me

## Quick Fix: Would you like me to set up Formspree instead?

If you want to skip the Gmail setup entirely, I can integrate Formspree in about 2 minutes:
- No server configuration needed
- No environment variables
- Free tier available
- Works immediately

Just let me know!
