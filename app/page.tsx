'use client';

import { useState } from 'react';

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwjD5qIBsFVCSUDEnHrB-MKS0UAbC8WKCMGK-Rt9mMPzVk2-xt39Xd17veacb-sSHbgdg/exec';

export default function Home() {
  const [msg, setMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // iPhone fix: Don't read the response. Just fire and trust it.
      await fetch(WEB_APP_URL, {
        method: 'POST',
        body: formData,
      });

      // If fetch didn't throw, Apps Script received it and sent the email
      setMsg('✅ You’re in. Check your email.');
      form.reset();
      
    } catch (error) {
      setMsg('Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{
      minHeight: '100dvh',
      background: '#000',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'Georgia, serif'
    }}>
      <div style={{ maxWidth: '480px', width: '100%', textAlign: 'center' }}>
        
        <div style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '1.5px', color: '#A855F7', marginBottom: '16px' }}>
          MEDIA HUB
        </div>

        <h1 style={{ fontSize: '36px', lineHeight: 1.1, fontWeight: 800, margin: 0 }}>
          Post Once.<br/>
          <span style={{ color: '#A855F7' }}>Reach Everywhere.</span>
        </h1>

        <p style={{ opacity: 0.8, margin: '16px 0 24px', fontSize: '15px', lineHeight: 1.5 }}>
          Schedule to Facebook, X, Instagram from one dashboard. Stop copy-pasting.
        </p>

        <div style={{
          background: '#0a0a0a',
          border: '1px solid #222',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'left'
        }}>
          <div style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', color: '#A855F7', marginBottom: '8px' }}>
            FOUNDING CREATOR OFFER
          </div>
          <h2 style={{ fontSize: '24px', lineHeight: 1.2, fontWeight: 800, margin: '0 0 8px' }}>
            Lock in 50% off at launch.
          </h2>
          <p style={{ opacity: 0.8, margin: '0 0 10px', fontSize: '14px' }}>
            Only 100 spots. Price doubles after.
          </p>

          <p style={{ textAlign: 'center', fontSize: '14px', fontWeight: 600, margin: '0 0 12px' }}>
            Join the waitlist ↓
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              style={{
                width: '100%',
                padding: '14px 16px',
                borderRadius: '12px',
                border: '1px solid #333',
                background: '#111',
                color: '#ffffff',
                fontSize: '16px',
                marginBottom: '12px',
                boxSizing: 'border-box',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px 22px',
                borderRadius: '12px',
                border: '0',
                background: '#A855F7',
                color: '#000',
                fontWeight: 800,
                fontSize: '16px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? 'Locking...' : 'Lock In Now'}
            </button>
          </form>

          {msg && <p style={{ marginTop: '12px', color: '#22C55E', fontWeight: 600, textAlign: 'center', fontSize: '14px' }}>{msg}</p>}
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '20px', fontSize: '14px', opacity: 0.8 }}>
          <span>100 spots</span>
          <span>•</span>
          <span>Nigeria</span>
          <span>•</span>
          <span>X + IG + FB</span>
        </div>

        <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '24px' }}>
          © 2026 Media Hub. Built for creators who hate posting 3 times.
        </p>
      </div>
    </main>
  );
}
