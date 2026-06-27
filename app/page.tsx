'use client';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok'>('idle');

  async function join(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setStatus('ok');
    else setStatus('idle');
  }

  return (
    <main style={{minHeight:'100vh',background:'#000',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',padding:24}}>
      <div style={{maxWidth:560,width:'100%'}}>
        <h1 style={{fontSize:48,lineHeight:1.05,margin:'0 0 16px'}}>
          Post Once. <br />
          <span style={{color:'#a855f7'}}>Reach Everywhere.</span>
        </h1>
        <p style={{opacity:.8,margin:'0 0 24px'}}>
          Schedule to Facebook, X, Instagram from one dashboard. Stop copy-pasting.
        </p>

        <div style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:16,padding:20}}>
          <div style={{fontSize:12,letterSpacing:1,color:'#a855f7',marginBottom:8}}>
            FOUNDING CREATOR OFFER
          </div>
          <div style={{fontSize:28,fontWeight:800,marginBottom:8}}>
            Lock in 50% off at launch.
          </div>
          <div style={{opacity:.8,marginBottom:16}}>
            Only 100 spots. Price doubles after.
          </div>

          <form onSubmit={join} style={{display:'grid',gap:12}}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              style={{padding:'14px 16px',borderRadius:12,border:'1px solid #333',background:'#111',color:'#fff',fontSize:16}}
            />
            <button disabled={status==='loading'} style={{padding:'14px 16px',borderRadius:12,border:0,background:'#a855f7',color:'#fff',fontWeight:700,fontSize:16,cursor:'pointer'}}>
              {status==='loading' ? 'Adding...' : 'Lock In Now'}
            </button>
            {status==='ok' && (
              <div style={{fontSize:14,color:'#a855f7',display:'flex',gap:8,alignItems:'center'}}>
                ✅ Locked in. 50% off reserved for you at launch
              </div>
            )}
          </form>
        </div>

        <div style={{display:'flex',gap:12,opacity:.7,fontSize:12,marginTop:12}}>
          <div>🔥 100 spots</div>
          <div>⚡ Nigeria</div>
          <div>📱 X + IG + FB</div>
        </div>
        <p style={{opacity:.5,fontSize:12,marginTop:16}}>
          © 2026 Media Hub. Built for creators who hate posting 3 times.
        </p>
      </div>
    </main>
  );
}
