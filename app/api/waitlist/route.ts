import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

// Use service_role key on server to bypass RLS
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    
    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    // Insert to waitlist table
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email, created_at: new Date().toISOString() }])
      .select()

    // Log errors so we see them in Vercel logs
    console.log('Waitlist insert result:', { data, error })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
    
  } catch (err) {
    console.log('Route error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
