# Contact Form - Email System Documentation

## 🎯 How It Works

When a user submits the contact form, **TWO emails are sent automatically**:

### 1️⃣ Admin Notification Emails (Form Data)
**Sent to:** 3 admin emails (configured in `.env.local`)
**Contains:**
- User's name, email, phone, subject, and message
- Timestamp of submission
- Action reminder (respond within 24 hours)

**Recipients:**
- `EMAIL_RECIPIENT_1` → kandledirectpublishing@gmail.com
- `EMAIL_RECIPIENT_2` → Second admin email
- `EMAIL_RECIPIENT_3` → Third admin email

### 2️⃣ User Confirmation Email
**Sent to:** The user who submitted the form
**Contains:**
- Thank you message
- Copy of their submitted information
- What to expect next
- Link to your website
- Contact information

---

## ⚙️ Setup Instructions

### Step 1: Configure `.env.local`

In your `.env.local` file, add these lines:

```env
EMAIL_USER=khalid8sharpk@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
EMAIL_RECIPIENT_1=kandledirectpublishing@gmail.com
EMAIL_RECIPIENT_2=second-email@example.com
EMAIL_RECIPIENT_3=third-email@example.com
```

**Replace:**
- `EMAIL_PASSWORD` → Your Gmail App Password (generated below)
- `EMAIL_RECIPIENT_1/2/3` → The 3 emails that should receive notifications

**Note:** You can use the same email multiple times if you don't have 3 different addresses.

### Step 2: Generate Gmail App Password

1. Visit: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification (if not already enabled)
3. Create new App Password:
   - Select: **Mail**
   - Device: **Other (Custom name)** → "Kindle Contact Form"
4. Copy the 16-character password
5. Paste it in `.env.local` as `EMAIL_PASSWORD`

### Step 3: Restart Development Server

**IMPORTANT:** Environment variables only load when the server starts!

```bash
# Stop the server
Ctrl + C

# Restart
npm run dev
```

### Step 4: Test the System

1. **Check configuration:**
   - Visit: `http://localhost:3000/api/debug-env`
   - Should show ✅ for all variables

2. **Test the contact form:**
   - Go to `/contact`
   - Fill out the form
   - Submit
   - Check:
     - ✅ All 3 admin emails for the form data
     - ✅ User's email for the confirmation

---

## 📧 Email Templates

### Admin Email Features:
- Professional formatting with Kandle branding
- All form fields clearly displayed
- Timestamp of submission
- Action reminder to respond within 24 hours
- Orange accent colors matching your brand

### User Confirmation Email Features:
- Personalized greeting with user's name
- Beautiful gradient header
- Copy of submitted information
- Next steps clearly outlined
- Call-to-action button to visit website
- Contact information footer
- Responsive HTML design

---

## 🔧 Customization

### Change Email Recipients

Edit `.env.local`:
```env
EMAIL_RECIPIENT_1=first@example.com
EMAIL_RECIPIENT_2=second@example.com
EMAIL_RECIPIENT_3=third@example.com
```

### Add More Recipients

Edit `app/api/contact/route.ts` and add more:
```typescript
const recipients = [
  process.env.EMAIL_RECIPIENT_1,
  process.env.EMAIL_RECIPIENT_2,
  process.env.EMAIL_RECIPIENT_3,
  process.env.EMAIL_RECIPIENT_4, // Add this to .env.local
].filter(Boolean);
```

### Customize Email Templates

Edit the HTML in `app/api/contact/route.ts`:
- Line ~45: Admin email template
- Line ~90: User confirmation template

---

## ✅ Testing Checklist

Before going live, test:

- [ ] Form submits successfully
- [ ] Admin email #1 receives notification
- [ ] Admin email #2 receives notification
- [ ] Admin email #3 receives notification
- [ ] User receives confirmation email
- [ ] All form data appears correctly
- [ ] Timestamps are accurate
- [ ] Links in confirmation email work
- [ ] Emails look good on mobile
- [ ] Check spam folders!

---

## 🐛 Troubleshooting

### Admin emails not receiving notifications?

1. Check `.env.local` for typos
2. Verify email addresses are correct
3. Check spam folders
4. Ensure dev server was restarted

### User not receiving confirmation?

1. Check their spam folder
2. Verify they entered correct email
3. Check server logs for errors

### "Email service not configured" error?

1. Ensure `.env.local` exists in project root
2. Check `EMAIL_USER` and `EMAIL_PASSWORD` are set
3. Restart dev server
4. Visit `/api/debug-env` to verify

### Gmail authentication failing?

1. Use App Password (not regular password)
2. Enable 2-Step Verification
3. Generate new App Password
4. Ensure no extra spaces in `.env.local`

---

## 📊 Email Flow Diagram

```
User Submits Form
       ↓
   API Route
       ↓
   ┌───┴───┐
   ↓       ↓
Admin    User
Emails   Email
   ↓       ↓
3 Emails  1 Email
Sent     Sent
```

---

## 🚀 Production Deployment

When deploying to Vercel:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. Add all environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_RECIPIENT_1`
   - `EMAIL_RECIPIENT_2`
   - `EMAIL_RECIPIENT_3`
3. Redeploy your application
4. Test the live contact form

---

## 📝 Example Response

### Success Response:
```json
{
  "message": "Email sent successfully!",
  "recipients": 3,
  "userConfirmed": true
}
```

### Error Response:
```json
{
  "error": "Failed to send email. Please try again later."
}
```

---

## 💡 Tips

- **Gmail Daily Limit:** Free Gmail accounts can send ~500 emails per day
- **Spam Prevention:** Ensure your confirmation email doesn't look spammy
- **Response Time:** Most emails arrive within seconds
- **Testing:** Use real email addresses for testing
- **Monitoring:** Check server logs for email delivery confirmation

---

Need help? Check `TROUBLESHOOTING.md` for common issues and solutions!
