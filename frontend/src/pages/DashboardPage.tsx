const widgets = [
  { title: 'Membership', value: 'Pro Plan', tone: 'bg-red-50 text-red-600' },
  { title: 'Booked classes', value: '08', tone: 'bg-sky-50 text-sky-600' },
  { title: 'Attendance', value: '94%', tone: 'bg-emerald-50 text-emerald-600' },
  { title: 'Invoices', value: '$229', tone: 'bg-violet-50 text-violet-600' },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div className="mb-10">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Member dashboard</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Welcome back, Alex.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {widgets.map((item) => (
          <div key={item.title} className={`rounded-[2rem] p-6 ${item.tone}`}>
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-80">{item.title}</p>
            <h3 className="mt-4 text-3xl font-black">{item.value}</h3>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft lg:col-span-2">
          <h2 className="text-2xl font-black text-slate-900">Progress overview</h2>
          <div className="mt-5 h-56 rounded-2xl bg-gradient-to-br from-red-50 via-white to-slate-100 p-4">Chart placeholder</div>
        </div>
        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black text-slate-900">Next sessions</h2>
          <ul className="mt-6 space-y-4 text-slate-700">
            <li>Strength Lab — Tue 6:00 AM</li>
            <li>HIIT Burn — Thu 7:30 PM</li>
            <li>Yoga Flow — Sat 9:00 AM</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
