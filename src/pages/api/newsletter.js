import mail from 'nodemailer';

// Create nodemailer transporter
const transporter = mail.createTransport({
  host: import.meta.env.SMTP_HOST || process.env.SMTP_HOST,
  port: import.meta.env.SMTP_PORT || process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: import.meta.env.SMTP_USER || process.env.SMTP_USER,
    pass: import.meta.env.SMTP_PASS || process.env.SMTP_PASS,
  },
  debug: true,
  logger: true,
});

// Astro API route handler
export async function POST({ request }) {
  try {
    // Parse the request body
    const body = await request.json();
    const { email } = body;

    // Validate required field
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const smtpEmail = import.meta.env.SMTP_EMAIL || process.env.SMTP_EMAIL || 'sales@appvintech.com';

    // Send notification to company
    await transporter.sendMail({
      from: smtpEmail,
      to: smtpEmail,
      subject: 'New Newsletter Subscription',
      text: `New newsletter subscription:\n\nEmail: ${email}\n`,
      replyTo: email,
    });

    // Send confirmation to subscriber
    await transporter.sendMail({
      from: smtpEmail,
      to: email,
      subject: 'Thanks for Subscribing!',
      text: `Hi there,\n\nThank you for subscribing to our newsletter! We'll keep you updated with our latest insights on AI, digital transformation, and product engineering.\n\nBest regards,\nAppVin Technologies Team`,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to subscribe', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Handle OPTIONS request for CORS
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
