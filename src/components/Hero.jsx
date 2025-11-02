import { Bot, EyeOff, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-black via-slate-950 to-blue-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/30 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-500 to-blue-700 grid place-items-center shadow-inner shadow-blue-400/20">
              <EyeOff className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-tight">VeilCanvas</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#pricing" className="ml-2 rounded-md bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-500 transition">Get started</a>
          </nav>
        </div>
      </header>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" />
              New: AI Assistant for Canvas workflows
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
              Hide distractions on Canvas. Get AI help when it matters.
            </h1>
            <p className="mt-5 text-white/70 max-w-prose">
              VeilCanvas is a clean, privacy-first helper that dims activity feeds, blocks noisy elements, and adds an on-page AI assistant to keep you focused while you work.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 font-medium text-white shadow hover:bg-blue-500 transition">
                Try it free
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/20 transition border border-white/10">
                See how it works
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-white/50">
              <div className="flex items-center gap-1.5"><Shield className="h-4 w-4" /> Privacy-first</div>
              <div className="flex items-center gap-1.5"><EyeOff className="h-4 w-4" /> Activity hider</div>
              <div className="flex items-center gap-1.5"><Bot className="h-4 w-4" /> Built-in AI</div>
            </div>
          </div>

          <div className="relative rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl ring-1 ring-white/10">
            <div className="rounded-lg bg-black/60 p-4">
              <div className="flex items-center justify-between text-xs text-white/50">
                <span>Canvas Dashboard</span>
                <span>VeilCanvas active</span>
              </div>
              <div className="mt-3 grid grid-cols-3 gap-3 text-xs">
                <div className="rounded-md border border-white/10 bg-black/40 p-3 text-white/70">
                  Activity Feed
                  <div className="mt-2 h-20 rounded bg-gradient-to-tr from-blue-900/40 to-transparent" />
                </div>
                <div className="rounded-md border border-white/10 bg-black/40 p-3 text-white/70">
                  Recent Grades
                  <div className="mt-2 h-20 rounded bg-gradient-to-tr from-blue-900/40 to-transparent" />
                </div>
                <div className="rounded-md border border-white/10 bg-black/40 p-3 text-white/70">
                  Calendar
                  <div className="mt-2 h-20 rounded bg-gradient-to-tr from-blue-900/40 to-transparent" />
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-white/10 bg-black/50 p-3">
                <div className="flex items-center gap-2 text-white/70 text-sm"><Bot className="h-4 w-4 text-blue-400" /> Ask Veil</div>
                <div className="mt-2 rounded bg-black/70 p-3 text-xs text-white/60">
                  “Summarize this assignment and suggest a plan.”
                </div>
                <div className="mt-2 flex gap-2">
                  <input className="flex-1 rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600" placeholder="Ask anything…" />
                  <button className="rounded-md bg-blue-600 px-3 py-2 text-sm hover:bg-blue-500">Send</button>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -inset-1 rounded-xl ring-1 ring-blue-500/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
