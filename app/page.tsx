'use client'
import { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e: any) => {
    e.preventDefault()
    setMsg('Adding...')
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    const data = await res.json()
    if (res.ok) {
      setMsg('✅ Locked in. 50% off secured forever')
      setEmail('')
    } else {
      setMsg(data.error?.includes('duplicate') ? 'You’re already on the list ✅' : 'Try again')
    }
  }

  return (
    <main style={{background:'#000',color:'#fff',minHeight:'100dvh',fontFamily:'-apple-system,BlinkMacSystemFont,sans-serif',padding:28,display:'flex',flexDirection:'column'}}>
      <div style={{marginTop:48}}>
        <h1 style={{fontSize:38,lineHeight:1.1,fontWeight:800,letterSpacing:'-1px'}}>
          Post Once.<br/><span style={{color:'#A855F7'}}>Reach Everywhere.</span>
        </h1>
        <p style={{color:'#A1A1AA',fontSize:16,marginTop:12,lineHeight:1.5}}>
          Schedule to Facebook, X, Instagram from one dashboard. Stop copy-pasting.
        </p>
      </div>

      <div style={{background:'#0A0A0A',border:'1px solid #27272A',borderRadius:20,padding:24,marginTop:24}}>
        <p style={{color:'#A855F7',fontWeight:800,fontSize:12,letterSpacing:'1px'}}>FOUNDING CREATOR OFFER</p>
        <p style={{fontSize:26,fontWeight:800,marginTop:6}}>50% OFF. For life.</p>
        <p style={{color:'#A1A1AA',fontSize:14,marginTop:4}}>Only 100 spots. Then price goes up.</p>
        
        <form onSubmit={submit} style={{marginTop:20}}>
          <input 
            type="email" required value={email} onChange={e=>setEmail(e.target.value)} 
            placeholder="your@email.com" 
            style={{width:'100%',height:52,borderRadius:14,background:'#18181B',border:'1px solid #27272A',color:'#fff',padding:'0 16px',fontSize:16}}
          />
          <button style={{width:'100%',height:52,marginTop:10,borderRadius:14,background:'#9333EA',color:'#fff',fontWeight:800,border:'none',fontSize:16}}>
            Lock In Now
          </button>
          {msg && <p style={{marginTop:12,color:'#A855F7',fontSize:14,fontWeight:700,textAlign:'center'}}>{msg}</p>}
        </form>
      </div>

      <div style={{marginTop:20,display:'flex',gap:16,color:'#71717A',fontSize:13,fontWeight:600}}>
        <span>🔥 100 spots</span><span>⚡ Nigeria</span><span>📱 X + IG + FB</span>
      </div>

      <p style={{textAlign:'center',color:'#52525B',fontSize:12,marginTop:'auto',paddingTop:24}}>
        © 2026 Media Hub. Built for creators who hate posting 3 times.
      </p>
    </main>
  )
}
