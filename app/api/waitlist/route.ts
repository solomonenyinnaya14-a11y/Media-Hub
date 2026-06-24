import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.SUPABASE_URL, // Remove NEXT_PUBLIC_
  process.env.SUPABASE_SERVICE_ROLE_KEY // Use service_role, not ANON_KEY
)

export async function POST(req: Request) {
  const { email } = await req.json()
  const { error } = await supabase.from('waitlist').insert({ email })
  console.log('Supabase error:', error) // Add this to see errors in Vercel logs
  return error ? NextResponse.json(error, {status: 400}) : NextResponse.json({ok: true})
}
