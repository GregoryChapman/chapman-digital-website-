import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Chapman Digital Contact Form <contact@chapmandigitalservices.com>',
      to: ['contact@chapmandigitalservices.com'],
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Email:</strong> <a href="mailto:${email}" style="color: #4F46E5;">${email}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Company:</strong> ${company || 'Not provided'}</p>
          </div>
          <div style="margin-top: 20px;">
            <p style="margin: 10px 0;"><strong style="color: #4F46E5;">Message:</strong></p>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #4F46E5; margin-top: 10px;">
              <p style="white-space: pre-wrap; line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <p style="margin-top: 30px; color: #666; font-size: 12px;">
            This email was sent from the Chapman Digital Services contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: `Failed to send email: ${error.message || 'Unknown error'}` },
        { status: 500 }
      );
    }

    console.log('Email sent successfully via Resend:', data?.id);
    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    );
  }
}
