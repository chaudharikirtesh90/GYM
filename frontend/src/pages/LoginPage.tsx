export default function LoginPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 md:px-6">
      <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-soft md:grid-cols-2">
        <div className="hidden bg-slate-900 p-10 text-white md:block">
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">Welcome back</div>
          <h1 className="mt-6 text-4xl font-black">Log in to your EliteFit account.</h1>
          <p className="mt-4 text-slate-300">Access your membership, workouts, bookings, and progress dashboard.</p>
        </div>
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-black text-slate-900">Sign in</h2>
          <form className="mt-8 space-y-5">
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" type="email" placeholder="Email address" />
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary" type="password" placeholder="Password" />
            <button className="primary-btn w-full" type="submit">Login</button>
          </form>
          <div className="mt-6 text-sm text-slate-600">Need an account? <a href="/register" className="font-bold text-primary">Create one</a></div>
        </div>
      </div>
    </div>
  );
}
