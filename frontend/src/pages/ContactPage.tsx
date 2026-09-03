export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Contact us</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Let’s build your next best routine.</h1>
      </div>
      <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Send a message</h2>
          <form className="mt-6 space-y-4">
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Full name" />
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Email address" />
            <textarea className="min-h-32 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3" placeholder="Your message" />
            <button className="primary-btn" type="submit">Send message</button>
          </form>
        </div>
        <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
          <h3 className="text-2xl font-bold">Visit the club</h3>
          <ul className="mt-6 space-y-4 text-slate-300">
            <li>📍 78 Fitness Avenue, Downtown</li>
            <li>📞 +1 (555) 210-8201</li>
            <li>✉️ hello@elitefitgym.com</li>
            <li>⏰ Mon-Sat • 5:00 AM - 10:00 PM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
