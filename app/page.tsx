'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    if (res.ok) setStatus('success');
    else setStatus('error');
  };

  return (
    <main className="min-h-screen bg-black text-white flex-col items-center justify-center p-6 font-serif">
      <div className="w-full max-w-md">
        <h1 className="text-5xl font-bold text-left">
          Post Once. <br />
          <span className="text-purple-500">Reach</span>
          <br />
          <span className="text-purple-500">Everywhere.</span>
        </h1>
        <p className="mt-4 text-left text-gray-300">
          Schedule to Facebook, X, Instagram from one dashboard. Stop copy-pasting.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md p-6 rounded-2xl border-gray-800 bg-gray-900/50">
        <p className="text-xs text-purple-400 font-semibold tracking-widest">FOUNDING CREATOR OFFER</p>
        <h2 className="text-3xl font-bold mt-2">Lock in 50% off at launch.</h2>
        <p className="text-sm text-gray-400 mt-2">Only 100 spots. Price doubles after.</p>
        
        <form onSubmit={handleSubmit} className="mt-6 space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full p-3 rounded-lg bg-black border-gray-700 focus:border-purple-500 outline-none"
          />
          <button
            disabled={status === 'loading'}
            className="w-full p-3 rounded-lg bg-purple-600 font-bold hover:bg-purple-700 disabled:bg-gray-700"
          >
            {status === 'loading' ? 'Locking...' : 'Lock In Now'}
          </button>
        </form>

        {status === 'success' && (
          <p className="mt-3 text-green-400 text-sm flex items-center gap-2">
            ✅ Locked in. 50% off reserved for you at launch
          </p>
        )}
        {status === 'error' && <p className="mt-3 text-red-400 text-sm">Something went wrong. Try again.</p>}
      </div>
      
      <div className="flex gap-4 mt-6 text-sm text-gray-400">
        <p>🔥 100 spots</p>
        <p>⚡ Nigeria</p>
        <p>📱 X + IG + FB</p>
      </div>

      <p className="mt-6 text-xs text-gray-600 text-center">
        © 2026 Media Hub. Built for creators who hate posting 3 times.
      </p>
    </main>
  );
}
