import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // 1. Save to Supabase
    const { error: dbError } = await supabase.from('waitlist').insert({ email });
    if (dbError) throw dbError;

    // 2. Send email - TO YOUR GMAIL ONLY
    await resend.emails.send({
      from: 'Media Hub <onboarding@resend.dev>',
      to: 'solomonenyinaya14@gmail.com', // <-- This is your real Gmail
      subject: '🔒 You’re locked in for 50% off Media Hub',
      html: `
        <h2>CEO, you’re on the list.</h2>
        <p>Only 100 spots at 50% off. Price doubles at launch.</p>
        <p>We’ll email you when doors open.</p>
        <br>
        <p>- Media Hub Team</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
