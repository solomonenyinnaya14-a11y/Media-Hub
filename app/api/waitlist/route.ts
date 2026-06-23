import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  const { email } = await req.json()
  const { error } = await supabase.from('waitlist').insert({ email })
  return error ? NextResponse.json({error}, {status: 400}) : NextResponse.json({ok: true})
}
