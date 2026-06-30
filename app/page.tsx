'use client';
import { useState } from 'react';

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwjD5qIBsFVCSUDEnHrB-MKS0UAbC8WKCMGK-Rt9mMPzVk2-xt39Xd17veacb-sSHbgdg/exec";

export default function Home() {
  const [msg, setMsg] = useState('');
  
  return (
    <>
    <form 
      onSubmit={async (e) => {
        e.preventDefault();
        setMsg("Locking you in...");
        const email = (e.target as any).email.value;
        
        await fetch(WEB_APP_URL, {
          method: "POST",
          mode: "no-cors", // <- This is why Google works
          body: new URLSearchParams({ email })
        });
        
        setMsg("✅ You're in. Check your email.");
        (e.target as any).reset();
      }} 
      style={{display:'flex', gap:'8px', marginTop:'16px'}}
    >
      <input type="email" name="email" placeholder="your@email.com" required style={{flex:1, padding:'12px', borderRadius:'8px', border:'1px solid #ccc'}}/>
      <button type="submit" style={{padding:'12px 20px', borderRadius:'8px', border:0, background:'#000', color:'#fff', fontWeight:600}}>Lock In Now</button>
    </form>
    <p>{msg}</p>
    </>
  )
}
