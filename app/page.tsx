'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Saving...');
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    setStatus(res.ok? "✅ You're on the list!" : '❌ Already joined');
    if(res.ok) setEmail('');
  };

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      fontFamily: 'system-ui, sans-serif',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '600px', width: '100%' }}>
        
        <h1 style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.1', marginBottom: '16px' }}>
          Post once.<br/>
          <span style={{ color: '#A855F7' }}>Reach everywhere.</span>
        </h1>

        <p style={{ fontSize: '18px', color: '#9CA3AF', marginBottom: '32px', lineHeight: '1.6' }}>
          Media Hub lets Nigerian creators write 1 post → Publish to X + Facebook at same time. No more copy-paste.
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{
              width: '100%',
              backgroundColor: '#1F2937',
              border: 'none',
              borderRadius: '12px',
              padding: '14px 16px',
              color: '#ffffff',
              fontSize: '16px',
              marginBottom: '12px',
              outline: 'none'
            }}
          />
          <button 
            type="submit"
            style={{
              width: '100%',
              backgroundColor: '#A855F7',
              color: '#ffffff',
              fontWeight: '700',
              borderRadius: '12px',
              padding: '14px 16px',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Join Waitlist
          </button>
        </form>

        {status && <p style={{ fontSize: '14px', marginTop: '12px', color: '#A855F7' }}>{status}</p>}

        <div style={{ marginTop: '16px' }}>
          <p style={{ fontSize: '14px', color: '#A855F7', fontWeight: '600' }}>
            🔥 Free forever for first 100 creators
          </p>
          <p style={{ fontSize: '14px', color: '#A855F7', fontWeight: '600' }}>
            50% OFF for life after that
          </p>
        </div>

        <p style={{ fontSize: '14px', color: '#4B5563', marginTop: '40px' }}>
          Built for X + Facebook creators in Nigeria
        </p>

      </div>
    </main>
  )
}
