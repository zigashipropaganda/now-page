import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data } = await supabase
    .from('now_snapshots')
    .select('entries')
    .eq('is_current', true)
    .single()
  
  return NextResponse.json(data || { entries: [] })
}
