'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'ok'|'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({email})
    });
    setStatus(res.ok ? 'ok' : 'error');
  }

  return (
    <>
      <div className="brand">Media Hub</div>
      
      <h1>Post Once.<br/><span className="purple">Reach<br/>Everywhere.</span></h1>
      <p className="sub">Schedule to Facebook, X, Instagram from one dashboard. Stop copy-pasting.</p>
      
      <div className="card">
        <div className="small">FOUNDING CREATOR OFFER</div>
        <h2 style={{margin:'8px 0'}}>Lock in 50% off at launch.</h2>
        <p style={{margin:'0 0 12px'}}>Only 100 spots. Price doubles after.</p>

        <form onSubmit={onSubmit}>
          <input type="email" required placeholder="your@email.com" value={email} onChange={e=>setEmail(e.target.value)} />
          <button className="btn" disabled={status==='loading'}>
            {status==='loading' ? 'Adding...' : 'Lock In Now'}
          </button>
        </form>
        {status==='ok' && <div className="success">✅ Locked in. 50% off reserved for you at launch</div>}
        {status==='error' && <div style={{color:'#f87171', marginTop:8}}>Something went wrong.</div>}
      </div>

      <div className="meta">
        <span>🔥 100 spots</span>
        <span>⚡ Nigeria</span>
        <span>📱 X + IG + FB</span>
      </div>
      <div className="footer">© 2026 Media Hub. Built for creators who hate posting 3 times.</div>
    </>
  );
}
