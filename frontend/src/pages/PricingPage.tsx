const plans = [
  { name: 'Starter', price: '$49', description: 'Perfect for beginner routines and access coaching basics.', features: ['Gym floor access', '2 classes/week', 'Locker room access'] },
  { name: 'Pro', price: '$89', description: 'Best for members training consistently with personalized guidance.', features: ['Unlimited classes', '1 PT session', 'Nutrition guidance'], highlight: true },
  { name: 'Elite', price: '$149', description: 'For serious results, performance coaching, and premium support.', features: ['Priority booking', 'Custom plan', 'VIP access'] },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Membership plans</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Pick a plan for your goals.</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-[2rem] border p-8 ${plan.highlight ? 'border-primary bg-red-500 text-white shadow-2xl shadow-red-200' : 'border-slate-200 bg-white text-slate-900'}`}>
            <h2 className="text-2xl font-bold">{plan.name}</h2>
            <div className="mt-5 flex items-end gap-2">
              <span className="text-5xl font-black">{plan.price}</span>
              <span className={plan.highlight ? 'text-red-100' : 'text-slate-500'}>/ month</span>
            </div>
            <p className={`mt-4 ${plan.highlight ? 'text-red-100' : 'text-slate-600'}`}>{plan.description}</p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>
            <button className={`mt-8 w-full rounded-full px-5 py-3 font-semibold ${plan.highlight ? 'bg-white text-red-500' : 'bg-slate-900 text-white'}`}>Choose plan</button>
          </div>
        ))}
      </div>
    </div>
  );
}
