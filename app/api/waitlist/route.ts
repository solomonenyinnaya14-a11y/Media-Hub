import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// 1. Init clients
const resend = new Resend(process.env.RESEND_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service key on server, not anon key
);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 });
    }

    // 2. Save to Supabase first
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email }]);

    if (dbError) {
      console.error('Supabase insert error:', dbError);
      // Don't block email if DB fails? Or do. Your call. I'll block.
      return NextResponse.json({ error: 'Failed to save email' }, { status: 500 });
    }

    // 3. Send email via Resend
    // TODO: Replace resend.dev with your verified domain before launch
    const { data, error: emailError } = await resend.emails.send({
      from: 'Media Hub <onboarding@resend.dev>', // CHANGE TO onboarding@mail.mediahub.ng later
      to: email,
      subject: 'You’re Locked In 🚀 | 50% Off Media Hub',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #7c3aed;">Post Once. Reach Everywhere.</h1>
          <p>Hey there,</p>
          <p>✅ You're locked in for <strong>50% off at launch</strong>.</p>
          <p>Only 100 spots. Price doubles after.</p>
          <p>We'll email you the moment Media Hub opens.</p>
          <br/>
          <p>- Solomon, Founder @ Media Hub</p>
        </div>
      `
    });

    if (emailError) {
      console.error('Resend error:', emailError);
      // Email failed but DB saved. Still tell frontend it worked, but log it.
      return NextResponse.json({ ok: true, email_sent: false, emailError }, { status: 200 });
    }

    console.log('Email sent:', data?.id);
    return NextResponse.json({ ok: true, email_sent: true, id: data?.id });

  } catch (err) {
    console.error('Waitlist route crashed:', err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
