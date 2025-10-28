# Email Setup Guide for Contact Form

I've set up two options for sending emails directly from your contact form. Choose the one that works best for you:

## Option 1: EmailJS (Recommended for Quick Setup)

### Setup Steps:
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Create a new service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (contact@chapmandigitalservices.com)
4. Get your Service ID, Template ID, and Public Key
5. Update the ContactForm.tsx file with your credentials:

```typescript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const publicKey = 'YOUR_PUBLIC_KEY';
```

### Pros:
- ✅ Quick setup (5 minutes)
- ✅ No server configuration needed
- ✅ Works with any email provider
- ✅ Free tier available

### Cons:
- ❌ Client-side only (less secure)
- ❌ Limited customization

---

## Option 2: Vercel Serverless Function (Recommended for Production)

### Setup Steps:
1. Choose an email service provider:
   - **Gmail**: Use App Passwords
   - **SendGrid**: Free tier available
   - **Mailgun**: Free tier available
   - **AWS SES**: Very cheap

2. Set up environment variables in Vercel:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-app-password
   ```

3. Replace ContactForm import in contact/page.tsx:
   ```typescript
   import ContactFormAPI from "@/components/ContactFormAPI";
   ```

4. Update the contact page to use ContactFormAPI instead of ContactForm

### Gmail Setup (Easiest):
1. Enable 2-factor authentication on your Gmail
2. Generate an App Password: Google Account → Security → App passwords
3. Use your Gmail address and the app password

### Pros:
- ✅ Server-side (more secure)
- ✅ Full control over email formatting
- ✅ Better error handling
- ✅ No third-party dependencies

### Cons:
- ❌ Requires email service setup
- ❌ Slightly more complex

---

## Current Implementation

The contact form currently has both options implemented:

1. **ContactForm.tsx** - Uses EmailJS with mailto fallback
2. **ContactFormAPI.tsx** - Uses Vercel serverless function
3. **API route** - `/api/contact` for serverless function

## Testing

To test the current setup:
1. The form will try EmailJS first
2. If EmailJS fails, it falls back to opening the user's email client
3. Both methods send to contact@chapmandigitalservices.com

## Next Steps

1. **For immediate use**: Set up EmailJS (5 minutes)
2. **For production**: Set up Vercel serverless function with Gmail
3. **For high volume**: Consider SendGrid or Mailgun

Would you like me to help you set up either option?
