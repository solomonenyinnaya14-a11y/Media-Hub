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
    if(res.ok) setEmail('');
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center space-y-6">
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Media Hub lets you <span className="text-green-500">Post Once. Reach Everywhere</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-xl mx-auto">
          Schedule your posts to Facebook, X, Instagram while you do other stuff.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
          <input 
            type="email" 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-zinc-900 border-zinc-700 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg px-6 py-3 transition whitespace-nowrap">
            Get 50% OFF
          </button>
        </form>

        {status && <p className="text-sm text-green-400">{status}</p>}

        <div className="bg-zinc-900/60 border-green-500/30 rounded-xl p-3 max-w-sm mx-auto">
          <p className="text-sm text-green-400 font-semibold">🔥 Only 100 spots at 50% off for life</p>
          <p className="text-xs text-gray-500">Price goes up after. Lock in now.</p>
        </div>

        <div className="flex justify-center items-center gap-8 pt-4 text-gray-400 text-3xl font-bold">
          <span>f</span> 
          <span>X</span> 
          <span className="text-lg">Instagram</span> 
        </div>

      </div>
    </main>
  )
}
