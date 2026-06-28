import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  await resend.emails.send({
    from: 'Solomon from Media Hub <onboarding@resend.dev>', // Human name + free Resend domain
    to: email,
    subject: 'You’re in: Media Hub early access', // No spam words
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #fff; background: #000; padding: 24px;">
        <div style="font-size: 14px; font-weight: 900; letter-spacing: 1.5px; color: #a855f7; text-align: center; margin-bottom: 24px;">MEDIA HUB</div>
        
        <h1 style="font-size: 32px; line-height: 1.1; font-weight: 800; text-align: center; margin: 0; color: #fff;">
          Post Once. <span style="color: #a855f7;">Reach Everywhere.</span>
        </h1>
        
        <p style="margin: 16px 0;">Hey there,</p>
        
        <p>✅ <strong>You're on the early access list for Media Hub.</strong></p>
        
        <p>We're only letting in 100 creators first. You'll get first access when we open.</p>
        
        <p>We'll email you the moment Media Hub opens.</p>
        
        <p style="margin-top: 24px;">- Solomon, Founder @ Media Hub</p>
      </div>
    `,
  });

  return Response.json({ ok: true });
}
