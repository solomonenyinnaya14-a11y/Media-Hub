'use client'
import { useState } from 'react'
export default function Page() {
  const [email,setEmail]=useState(''); const [msg,setMsg]=useState('')
  const submit=async(e:any)=>{e.preventDefault();setMsg('Adding...');const r=await fetch('/api/waitlist',{method:'POST',body:JSON.stringify({email}),headers:{'Content-Type':'application/json'}});const d=await r.json();setMsg(r.ok?'✅ Locked in':'Already on list');if(r.ok)setEmail('')}
  return <main style={{background:'#000',color:'#fff',minHeight:'100dvh',padding:24}}><h1 style={{color:'#A855F7',fontSize:32}}>BLACK PAGE TEST</h1><form onSubmit={submit}><input value={email} onChange={e=>setEmail(e.target.value)} style={{width:'100%',height:48}}/>{msg&&<p>{msg}</p>}<button>Lock In</button></form></main>
}
