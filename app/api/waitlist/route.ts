import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Server-only clients. Never expose SERVICE_ROLE_KEY to browser.
const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!, // Must be Service Role, not Anon Key
  {
    auth: { persistSession: false } // Important for serverless functions
  }
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = body?.email?.toLowerCase().trim();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // 1. Save to Supabase first. If email exists already, ignore it and continue.
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (dbError) {
      // 23505 = unique_violation / duplicate key. That's OK, don't fail.
      if (dbError.code !== '23505') {
        console.error('Supabase insert error:', dbError);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
      }
      console.log('Duplicate email, continuing:', email);
    }

    // 2. Send email via Resend
    // CRITICAL: With onboarding@resend.dev you can ONLY send TO your Resend account email.
    // Change this to your Resend login email for testing. Verify a domain to send to anyone later.
    const { data, error: emailError } = await resend.emails.send({
      from: 'Media Hub <onboarding@resend.dev>',
      to: 'solomonenyinnaya14@gmail.com', // <-- REPLACE THIS WITH YOUR RESEND LOGIN EMAIL NOW
      subject: 'You’re Locked In 🚀 | 50% Off Media Hub',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #111;">
          <h1 style="color: #7c3aed; margin: 0 0 16px 0;">Post Once. Reach Everywhere.</h1>
          <p>Hey there,</p>
          <p>✅ You're locked in for <strong>50% off at launch</strong>.</p>
          <p>Only 100 spots. Price doubles after.</p>
          <p>We'll email you the moment Media Hub opens.</p>
          <br/>
          <p>- Solomon, Founder @ Media Hub</p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      // Don't 500 the whole request if email fails. DB save already worked.
      return NextResponse.json({ ok: true, email_sent: false, emailError: emailError.message }, { status: 200 });
    }

    console.log('Email sent successfully:', data?.id);
    return NextResponse.json({ ok: true, email_sent: true, id: data?.id });

  } catch (err: any) {
    console.error('Waitlist route crashed:', err);
    return NextResponse.json({ error: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
