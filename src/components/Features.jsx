import { Bot, EyeOff, Lock, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: EyeOff,
    title: "Distraction hider",
    desc: "Dim or hide activity feeds, notifications, and clutter so you can focus on the task at hand.",
  },
  {
    icon: Bot,
    title: "On-page AI help",
    desc: "Ask context-aware questions and get step-by-step plans without leaving Canvas.",
  },
  {
    icon: Shield,
    title: "Privacy-first",
    desc: "All controls run locally in the browser. You decide when and what to share with AI.",
  },
  {
    icon: Lock,
    title: "Granular control",
    desc: "Per-page toggles, keyboard shortcuts, and quick presets for study, review, or focus modes.",
  },
  {
    icon: Sparkles,
    title: "Smart summaries",
    desc: "Turn long instructions into clear action items and timelines in one click.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for calm and clarity</h2>
          <p className="mt-3 text-white/70">Every control is designed to reduce noise and help you complete work faster.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-slate-950 to-blue-950/30 p-6 hover:border-blue-500/40 transition">
              <div className="h-10 w-10 rounded-md bg-blue-600/20 grid place-items-center text-blue-300">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
