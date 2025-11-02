import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 600);
  }

  return (
    <section id="contact" className="relative bg-black text-white py-20">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-10 bottom-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Mail className="h-3.5 w-3.5 text-blue-400" /> Contact
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Questions, feedback, or team plans?</h2>
          <p className="mt-3 text-white/70 max-w-prose">We’d love to hear from you. Send us a note and we’ll get back within one business day.</p>
          <ul className="mt-6 text-sm text-white/60 space-y-2 list-disc list-inside">
            <li>Privacy-focused by design</li>
            <li>Discounts for students and educators</li>
            <li>Custom deployments for institutions</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-950 to-blue-950/30 p-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input required className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input required type="email" className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@domain.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-md bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-600" placeholder="Tell us what you need…" />
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <button disabled={status!=="idle" && status!=="success"} type="submit" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-500 disabled:opacity-60">
              {status === "submitting" ? "Sending…" : status === "success" ? "Sent ✓" : "Send message"}
            </button>
            <p className="text-xs text-white/60">We’ll reply within 24 hours.</p>
          </div>
        </form>
      </div>
      <div className="mt-16 text-center text-xs text-white/50">
        © {new Date().getFullYear()} VeilCanvas. All rights reserved.
      </div>
    </section>
  );
}
