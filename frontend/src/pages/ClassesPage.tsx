const classes = [
  { title: 'Strength Lab', description: 'Build full-body power with progressive strength training.', day: 'Mon / Wed / Fri', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80' },
  { title: 'HIIT Burn', description: 'High-energy intervals for fat loss and aerobic strength.', day: 'Tue / Thu', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' },
  { title: 'Yoga Flow', description: 'Improve mobility, balance, and recovery.', day: 'Sat', image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80' },
];

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Group classes</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Find your rhythm and push further.</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {classes.map((item) => (
          <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-bold text-slate-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.description}</p>
              <div className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{item.day}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
