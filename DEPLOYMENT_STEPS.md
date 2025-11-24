# Production Deployment Steps

Follow these steps to deploy the contact form changes to production:

## Step 1: Commit and Push Code Changes

All the code changes are ready. You need to commit and push them:

```bash
# Add all changed files
git add package.json package-lock.json src/app/api/contact/route.ts src/app/contact/page.tsx src/components/ContactFormAPI.tsx RESEND_SETUP.md

# Commit the changes
git commit -m "Switch contact form to Resend email service with verified domain"

# Push to GitHub
git push origin main
```

## Step 2: Add Environment Variable to Vercel

**IMPORTANT**: You must add the Resend API key to Vercel for production to work.

1. Go to [vercel.com](https://vercel.com) and log in
2. Navigate to your project dashboard
3. Click on **Settings** (in the top navigation)
4. Click on **Environment Variables** (in the left sidebar)
5. Add a new environment variable:
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_jTtkPi7V_7dQzE7yGNSurCaPpJbikkmQK`
   - **Environments**: Check all three boxes:
     - ✅ Production
     - ✅ Preview  
     - ✅ Development
6. Click **Save**

## Step 3: Trigger a New Deployment

After adding the environment variable, you need to trigger a new deployment:

### Option A: Automatic (if auto-deploy is enabled)
- Vercel will automatically deploy when you push to `main`
- Just wait a few minutes for the deployment to complete

### Option B: Manual Deployment
1. In your Vercel project dashboard
2. Go to the **Deployments** tab
3. Click the **"..."** menu on the latest deployment
4. Click **"Redeploy"**
5. Make sure to check **"Use existing Build Cache"** is OFF (to ensure new env vars are picked up)
6. Click **"Redeploy"**

## Step 4: Verify the Deployment

1. Once deployment completes, visit your production site
2. Go to the contact page
3. Submit a test form
4. Check that you receive the email at `contact@chapmandigitalservices.com`

## Troubleshooting

### Form still not working after deployment?

1. **Check Vercel logs**:
   - Go to your Vercel project → **Deployments** → Click on the latest deployment → **Functions** tab
   - Look for any errors in the `/api/contact` function logs

2. **Verify environment variable**:
   - Go to **Settings** → **Environment Variables**
   - Make sure `RESEND_API_KEY` is set correctly
   - Make sure it's enabled for **Production** environment

3. **Check Resend dashboard**:
   - Go to [resend.com](https://resend.com) → **Emails** section
   - See if emails are being sent and check for any error messages

4. **Domain verification**:
   - Make sure your domain `chapmandigitalservices.com` is still verified in Resend
   - Go to Resend dashboard → **Domains** to verify

## Quick Checklist

- [ ] Code changes committed and pushed to GitHub
- [ ] `RESEND_API_KEY` added to Vercel environment variables
- [ ] Environment variable enabled for Production, Preview, and Development
- [ ] New deployment triggered (or auto-deployed)
- [ ] Tested contact form on production site
- [ ] Received test email at contact@chapmandigitalservices.com

## What Changed?

- ✅ Switched from EmailJS to Resend (server-side, more reliable)
- ✅ Updated contact form to use API route
- ✅ Configured to send from `contact@chapmandigitalservices.com` (verified domain)
- ✅ Configured to send to `contact@chapmandigitalservices.com`
- ✅ Improved error handling and user feedback

Your contact form should now work reliably in production! 🎉

