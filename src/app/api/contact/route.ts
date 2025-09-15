import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import DOMPurify, { WindowLike } from 'dompurify';
import { JSDOM } from 'jsdom';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Create DOMPurify instance for server-side
    const window = new JSDOM('').window;
    const purify = DOMPurify(window as WindowLike);

    // Sanitize inputs using DOMPurify
    const sanitizeInput = (input: string): string => {
      const trimmed = input.trim().substring(0, 1000);
      return purify.sanitize(trimmed, {
        ALLOWED_TAGS: [], // Remove all HTML tags
        ALLOWED_ATTR: [], // Remove all attributes
        KEEP_CONTENT: true, // Keep text content
        ALLOW_DATA_ATTR: false, // Remove data attributes
        ALLOW_UNKNOWN_PROTOCOLS: false, // Block unknown protocols
        SANITIZE_DOM: true, // Sanitize DOM structure
        SANITIZE_NAMED_PROPS: true, // Sanitize named properties
        RETURN_DOM: false, // Return string, not DOM
        RETURN_DOM_FRAGMENT: false, // Don't return DOM fragment
      });
    };

    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email).toLowerCase();
    const sanitizedMessage = sanitizeInput(message);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'no-email@example.com'],
      subject: `New Contact Form Message from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${sanitizedEmail}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              <em>Sent from your portfolio contact form</em>
            </p>
            <p style="margin-top: 10px;">
              <a href="mailto:${sanitizedEmail}" style="background: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">
                Reply to ${sanitizedName}
              </a>
            </p>
          </div>
        </div>
      `,
      replyTo: sanitizedEmail,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
