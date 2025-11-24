# Resend Email Setup Guide

The contact form has been updated to use **Resend**, a modern and reliable email service. Follow these steps to get it working:

## Step 1: Install Resend Package

Run this command in your project directory:

```bash
npm install resend
```

## Step 2: Create a Resend Account

1. Go to [resend.com](https://resend.com) and sign up for a free account
2. The free tier includes **3,000 emails per month** - perfect for a contact form!

## Step 3: Get Your API Key

1. After logging in, go to the **API Keys** section
2. Click **"Create API Key"**
3. Give it a name (e.g., "Contact Form")
4. **Copy the API key** (it starts with `re_`)

## Step 4: Add Environment Variable

### For Local Development:

Create a `.env.local` file in your project root (if it doesn't exist) and add:

```
RESEND_API_KEY=re_your_api_key_here
```

Replace `re_your_api_key_here` with the API key you copied.

### For Production (Vercel):

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (starts with `re_`)
4. Make sure to add it for **Production**, **Preview**, and **Development** environments
5. Click **Save**

## Step 5: Verify Your Domain (Required to Send to contact@chapmandigitalservices.com)

**Current Status**: The contact form is currently configured to send emails to `gregory.chapman@chapmandigitalservices.com` (your verified email) because Resend requires domain verification before sending to other addresses.

**To send emails directly to `contact@chapmandigitalservices.com`**, you need to verify your domain:

1. In Resend dashboard, go to **Domains** (or visit [resend.com/domains](https://resend.com/domains))
2. Click **"Add Domain"**
3. Enter `chapmandigitalservices.com`
4. Follow the DNS verification steps:
   - Resend will provide DNS records to add to your domain
   - Add these records in your domain registrar (where you manage DNS for chapmandigitalservices.com)
   - Wait for DNS propagation (usually 5-30 minutes)
5. Once verified, update `/src/app/api/contact/route.ts`:

```typescript
from: 'Chapman Digital Contact Form <contact@chapmandigitalservices.com>',
to: ['contact@chapmandigitalservices.com'], // Change back to contact@
```

**Note**: Until you verify your domain, emails will be sent to `gregory.chapman@chapmandigitalservices.com` and will include a note about the intended recipient. After domain verification, emails will go directly to `contact@chapmandigitalservices.com` and will be more reliable (less likely to go to spam).

## Step 6: Test the Contact Form

1. Make sure your development server is running: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email at `contact@chapmandigitalservices.com`

## Troubleshooting

### Emails not arriving?

1. **Check your spam folder** - Especially if you haven't verified your domain yet
2. **Check the browser console** - Look for any error messages
3. **Check Vercel logs** - If deployed, check the function logs in Vercel dashboard
4. **Verify API key** - Make sure `RESEND_API_KEY` is set correctly in your environment variables
5. **Check Resend dashboard** - Go to "Emails" in Resend to see if emails were sent and their status

### "Email service is not configured" error?

- Make sure you've added `RESEND_API_KEY` to your `.env.local` file (for local) or Vercel environment variables (for production)
- Restart your development server after adding the environment variable

### Still having issues?

- Check the Resend dashboard for detailed error messages
- Make sure your Resend account is active
- Verify you haven't exceeded the free tier limit (3,000 emails/month)

## What Changed?

- ✅ Switched from EmailJS to Resend (more reliable server-side solution)
- ✅ Updated contact form to use API route instead of client-side EmailJS
- ✅ Added better error handling and user feedback
- ✅ Improved email formatting with HTML template

## Next Steps

1. Install the Resend package: `npm install resend`
2. Set up your Resend account and get your API key
3. Add the API key to your environment variables
4. Test the contact form
5. (Optional) Verify your domain for better deliverability

Your contact form should now reliably send emails to `contact@chapmandigitalservices.com`! 🎉

