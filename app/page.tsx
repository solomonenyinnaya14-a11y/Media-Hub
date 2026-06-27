'use client'
import { useState } from 'react'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setMsg('Adding...')
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ email })
    })
    const data = await res.json()
    if (res.ok) { setMsg('Locked in ✅ 50% off secured'); setEmail('') }
    else { setMsg(data.error || 'Already on list') }
  }

  return (
    <main style={{background:'#000',color:'#fff',minHeight:'100dvh',padding:24}}>
      <h1 style={{fontSize:32,fontWeight:700}}>Media Hub lets you Post Once.<br/><span style={{color:'#A855F7'}}>Reach Everywhere</span></h1>
      <p style={{color:'#A1A1AA',marginTop:12}}>Schedule your posts to Facebook, X, Instagram while you do other stuff.</p>
      <p style={{color:'#A855F7',fontWeight:600,marginTop:16}}>50% discount for first 100 users forever</p>
      <p style={{color:'#71717A',fontSize:14}}>Price goes up after. Lock in now.</p>
      <form onSubmit={submit} style={{marginTop:16}}>
        <input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email" style={{width:'100%',height:48,borderRadius:12,background:'#18181B',border:'1px solid #27272A',color:'#fff',padding:12}}/>
        <button style={{width:'100%',height:48,marginTop:8,borderRadius:12,background:'#9333EA',color:'#fff',fontWeight:700}}>Join Waitlist</button>
        {msg && <p style={{marginTop:8,color:'#A855F7'}}>{msg}</p>}
      </form>
      <p style={{textAlign:'center',color:'#52525B',fontSize:12,marginTop:32}}>Built for X + Facebook + Instagram creators in Nigeria © 2026</p>
    </main>
  )
}
