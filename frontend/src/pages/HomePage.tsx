import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCheck, FiTarget, FiUsers, FiTrendingUp } from 'react-icons/fi';

const stats = [
  { value: '12k+', label: 'Active Members' },
  { value: '97%', label: 'Client Retention' },
  { value: '24/7', label: 'Gym Access' },
  { value: '4.9/5', label: 'Coach Rating' },
];

const plans = [
  { name: 'Starter', price: '$49', features: ['Gym access', '2 classes / week', 'Locker room'], badge: 'Most Flexible' },
  { name: 'Pro', price: '$89', features: ['Unlimited classes', '1 PT session', 'Nutrition plan'], badge: 'Popular', highlight: true },
  { name: 'Elite', price: '$149', features: ['Priority booking', 'Custom coaching', 'VIP events'], badge: 'Best Value' },
];

const trainers = [
  { name: 'Olivia Carter', role: 'Strength Coach', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80' },
  { name: 'Marcus Lee', role: 'HIIT Specialist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80' },
  { name: 'Ava Smith', role: 'Mobility Expert', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80' },
];

const classes = [
  { title: 'Strength Lab', time: 'Mon / Wed / Fri • 6:00 AM', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80' },
  { title: 'HIIT Burn', time: 'Tue / Thu • 7:30 PM', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' },
  { title: 'Yoga Flow', time: 'Sat • 9:00 AM', image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80' },
];

const testimonials = [
  { quote: 'The coaching and accountability transformed my routine and my confidence.', name: 'Maya R.' },
  { quote: 'EliteFit feels premium, motivating, and genuinely supportive.', name: 'Daniel T.' },
  { quote: 'I finally achieved my fitness goals without feeling overwhelmed.', name: 'Sophia L.' },
];

const faqs = [
  { q: 'Do I need a membership to book a trainer?', a: 'Yes, all trainer bookings are available on selected membership plans or as add-ons.' },
  { q: 'Can I change my workout plan?', a: 'Absolutely. Your coach can update your plan based on your progress and goals.' },
  { q: 'Is there a free trial?', a: 'We offer a limited complimentary trial session for new members.' },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-hero-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 md:grid-cols-2 md:px-6 lg:py-28">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">Strength. Performance. Results.</span>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-slate-900 md:text-6xl">
              Lift <span className="text-gradient">stronger</span> every day.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-slate-600">
              Premium gym coaching, adaptive training plans, and a supportive community built around your best performance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/pricing" className="primary-btn">Get Started</Link>
              <Link to="/classes" className="secondary-btn">Explore Classes</Link>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div><div className="text-2xl font-black text-slate-900">8k+</div><div className="text-sm text-slate-600">Members</div></div>
              <div><div className="text-2xl font-black text-slate-900">45+</div><div className="text-sm text-slate-600">Classes</div></div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="card-shadow overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-4 backdrop-blur-xl">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" alt="Gym members training" className="h-[560px] w-full rounded-[1.5rem] object-cover" />
            </div>
            <div className="glass absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-500"><FiTrendingUp size={22} /></div>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-slate-500">This month</div>
                <div className="text-lg font-black text-slate-900">+24% growth</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-3xl p-6 text-center shadow-soft">
              <div className="text-4xl font-black text-slate-900">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Why choose us</p>
          <h2 className="section-title mt-3">More than a gym. A complete performance system.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: FiTarget, title: 'Goal-based coaching', text: 'Personalized training plans designed around your targets and lifestyle.' },
            { icon: FiUsers, title: 'Supportive community', text: 'Workout with experienced coaches and people that keep you consistent.' },
            { icon: FiCheck, title: 'Measured results', text: 'Track progress, attendance, nutrition, and performance with real analytics.' },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-primary"><Icon size={24} /></div>
              <h3 className="mb-3 text-2xl font-bold text-slate-900">{title}</h3>
              <p className="text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-400">Membership plans</p>
            <h2 className="section-title mt-3 text-white">Choose the plan that fits your goals.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] border p-8 ${plan.highlight ? 'border-red-500 bg-red-500 text-white shadow-2xl shadow-red-500/20' : 'border-slate-700 bg-slate-800/70 text-slate-100'}`}>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${plan.highlight ? 'bg-white/20 text-white' : 'bg-red-500/20 text-red-300'}`}>{plan.badge}</span>
                </div>
                <div className="mb-5 flex items-end gap-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={plan.highlight ? 'text-red-100' : 'text-slate-400'}>/ month</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-xs">✓</span>{feature}</li>
                  ))}
                </ul>
                <button className={`mt-8 w-full rounded-full px-5 py-3 font-semibold transition ${plan.highlight ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-red-500 text-white hover:bg-red-400'}`}>Choose Plan</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Meet our coaches</p>
          <h2 className="section-title mt-3">Certified fit experts that drive real progress.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
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
      </section>

      <section className="bg-slate-100 py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Popular classes</p>
            <h2 className="section-title mt-3">Train with energy and purpose.</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {classes.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.time}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">Book now <FiArrowRight /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Transformations</p>
          <h2 className="section-title mt-3">Results that speak for themselves.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
            'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80',
          ].map((image, index) => (
            <div key={image} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft">
              <img src={image} alt={`Transformation ${index + 1}`} className="h-96 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Testimonials</p>
          <h2 className="section-title mt-3">What our members say.</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft">
              <p className="text-lg leading-relaxed text-slate-700">“{item.quote}”</p>
              <div className="mt-6 font-bold text-slate-900">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1.2fr_0.8fr] md:px-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-red-400">BMI calculator</p>
            <h2 className="section-title mt-3 text-white">Know where you stand and where you’re going.</h2>
            <p className="mt-5 max-w-xl text-slate-300">Use our BMI assessment to understand your current fitness baseline and plan your healthiest next step.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <input className="rounded-xl border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none" placeholder="Height (cm)" />
              <input className="rounded-xl border border-slate-600 bg-slate-700 px-4 py-3 text-white outline-none" placeholder="Weight (kg)" />
            </div>
            <button className="primary-btn mt-6 w-full">Calculate BMI</button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
        <div className="mb-12 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">FAQ</p>
          <h2 className="section-title mt-3">Questions answered clearly.</h2>
        </div>
        <div className="space-y-5">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="text-xl font-bold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-slate-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
