import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
  const auth = cookies().get('admin_auth')
  
  if (auth?.value !== 'true') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { entries } = await request.json()
  
  // Get current snapshot
  const { data: current } = await supabase
    .from('now_snapshots')
    .select('id')
    .eq('is_current', true)
    .single()
  
  // If exists, mark as not current
  if (current) {
    await supabase
      .from('now_snapshots')
      .update({ is_current: false })
      .eq('id', current.id)
  }
  
  // Insert new current snapshot
  const { error } = await supabase
    .from('now_snapshots')
    .insert({
      snapshot_date: new Date().toISOString().split('T')[0],
      entries,
      is_current: true
    })
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  
  return NextResponse.json({ success: true })
}
