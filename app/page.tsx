export default function Home() {
  return (
    <div className="min-h-screen bg-[#fef7e8] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-[#fffaf2] p-8 md:p-12 rounded-sm shadow-[12px_12px_0_rgba(0,0,0,0.05)] border border-[#d9cdb0]">
        <h1 className="text-5xl md:text-6xl font-normal tracking-tighter mb-2 border-l-4 border-[#e85d4f] pl-4">
          now.
        </h1>
        <p className="text-xs uppercase tracking-wider text-[#a18e6f] mb-8 pl-4">
          a snapshot of this moment
        </p>

        <div className="space-y-6">
          <div className="border-b border-dashed border-[#d9cdb0] pb-4">
            <div className="text-xs uppercase tracking-wider font-bold text-[#e85d4f] mb-1">
              🎧 MUSIC
            </div>
            <div className="text-lg md:text-xl leading-relaxed font-serif">
              Listening to that album on repeat
            </div>
          </div>

          <div className="border-b border-dashed border-[#d9cdb0] pb-4">
            <div className="text-xs uppercase tracking-wider font-bold text-[#e85d4f] mb-1">
              📺 SHOW
            </div>
            <div className="text-lg md:text-xl leading-relaxed font-serif">
              Binge-watching something good
            </div>
          </div>

          <div className="border-b border-dashed border-[#d9cdb0] pb-4">
            <div className="text-xs uppercase tracking-wider font-bold text-[#e85d4f] mb-1">
              📖 WORD
            </div>
            <div className="text-lg md:text-xl leading-relaxed font-serif">
              A word that's stuck in my brain
            </div>
          </div>
        </div>

        <div className="mt-10 pt-4 text-center text-xs text-[#b8a99a] border-t border-[#d9cdb0]">
          <div className="font-mono mb-1">
            last updated · April 2, 2026
          </div>
          <div className="italic">— no feed, no likes, just now —</div>
        </div>
      </div>
    </div>
  )
      }
