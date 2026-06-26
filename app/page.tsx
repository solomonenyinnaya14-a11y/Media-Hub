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
    setStatus(res.ok ? "✅ You're on the list!" : '❌ Already joined');
    if (res.ok) setEmail('');
  };

  return (
    <main style={{
      minHeight: '100vh',
      backgroundColor: '#000',
      color: '#ffffff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 24px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <div style={{ maxWidth: '500px', width: '100%', textAlign: 'center' }}>
        
        <h1 style={{ 
          fontSize: '52px', 
          fontWeight: '800', 
          lineHeight: '1.1', 
          margin: '0 0 20px 0' 
        }}>
          Post once.<br/>
          <span style={{ color: '#A855F7' }}>Reach<br/>everywhere.</span>
        </h1>

        <p style={{ 
          fontSize: '17px', 
          color: '#9CA3AF', 
          lineHeight: '1.6', 
          margin: '0 0 32px 0' 
        }}>
          Media Hub lets Nigerian creators write 1<br/>
          post → Publish to X + Facebook at same<br/>
          time. No more copy-paste.
        </p>

        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto 16px auto' }}>
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
              padding: '16px',
              color: '#ffffff',
              fontSize: '16px',
              marginBottom: '12px',
              outline: 'none',
              boxSizing: 'border-box'
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
              padding: '16px',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              boxSizing: 'border-box'
            }}
          >
            Join Waitlist
          </button>
        </form>

        {status && <p style={{ fontSize: '14px', marginBottom: '8px', color: '#A855F7' }}>{status}</p>}

        <p style={{ 
          fontSize: '15px', 
          color: '#A855F7', 
          fontWeight: '700', 
          margin: '0 0 32px 0' 
        }}>
          First 100 users 50% discount forever
        </p>

        <p style={{ 
          fontSize: '14px', 
          color: '#4B5563', 
          margin: '0' 
        }}>
          Built for X + Facebook creators in Nigeria
        </p>

      </div>
    </main>
  )
}
