import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  const { data } = await supabase
    .from('now_snapshots')
    .select('id, snapshot_date, entries')
    .eq('is_current', false)
    .order('snapshot_date', { ascending: false })
    .limit(12)
  
  return NextResponse.json(data || [])
}
