import { CheckCircle, Zap } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: [
      "Hide activity & notifications",
      "Focus presets",
      "Local-only controls",
    ],
    cta: "Start free",
  },
  {
    name: "Pro",
    price: "$6",
    period: "/mo",
    highlight: true,
    features: [
      "Everything in Basic",
      "AI summaries & plans",
      "Context-aware Q&A",
      "Keyboard shortcuts",
      "Priority support",
    ],
    cta: "Go Pro",
  },
  {
    name: "Team",
    price: "$12",
    period: "/user/mo",
    highlight: false,
    features: [
      "All Pro features",
      "Admin controls",
      "Shared presets",
      "Centralized billing",
    ],
    cta: "Contact sales",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-gradient-to-b from-blue-950 to-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-10 right-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
          <p className="mt-3 text-white/70">Start free, upgrade when you want more AI power and controls.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border p-6 bg-black/50 ${
                t.highlight
                  ? "border-blue-500/50 shadow-[0_0_0_1px_rgba(59,130,246,0.2)]"
                  : "border-white/10"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1 text-xs">
                  <Zap className="h-3.5 w-3.5" /> Popular
                </div>
              )}

              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-medium">{t.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-semibold">{t.price}</span>
                    <span className="text-white/60">{t.period}</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className={`rounded-md px-4 py-2 text-sm font-medium transition ${
                    t.highlight ? "bg-blue-600 hover:bg-blue-500" : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {t.cta}
                </a>
              </div>

              <ul className="mt-6 space-y-2 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/80">
                    <CheckCircle className="mt-0.5 h-4 w-4 text-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
