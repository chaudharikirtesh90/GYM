const trainers = [
  { name: 'Olivia Carter', role: 'Strength Coach', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { name: 'Marcus Lee', role: 'HIIT Specialist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Ava Smith', role: 'Mobility Expert', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80' },
  { name: 'Noah Brown', role: 'Nutrition Guide', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80' },
];

export default function TrainersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Our trainers</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Meet the specialists behind the results.</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-4">
        {trainers.map((trainer) => (
          <div key={trainer.name} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
            <img src={trainer.image} alt={trainer.name} className="h-80 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900">{trainer.name}</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-primary">{trainer.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
