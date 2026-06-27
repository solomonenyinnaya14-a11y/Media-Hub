import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    // 1. Save to Supabase
    const { error: dbError } = await supabase.from('waitlist').insert([{ email }]);
    if (dbError && !dbError.message.includes('duplicate')) {
      console.error('Supabase Error:', dbError);
      return Response.json({ error: 'DB Error' }, { status: 500 });
    }

    // 2. Send Email via Resend
    await resend.emails.send({
      from: 'Media Hub <onboarding@resend.dev>',
      to: email,
      subject: 'You’re on the Media Hub waitlist ✅',
      html: `<p>CEO, you’re locked in. <br/>Only 100 spots at 50% off. We’ll email you at launch.</p>`,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error(error);
    return Response.json({ error: 'Failed' }, { status: 500 });
  }
}
