import { Link } from 'react-router-dom';
import { FiMenu, FiUser } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Classes', href: '/classes' },
  { label: 'Trainers', href: '/trainers' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-500 font-black text-white">E</div>
          <div>
            <div className="text-xl font-black tracking-tight text-slate-900">EliteFit</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-500">Gym Club</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-sm font-medium text-slate-700 transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/dashboard" className="secondary-btn">
            <FiUser className="mr-2" /> Dashboard
          </Link>
          <Link to="/login" className="primary-btn">
            Join Now
          </Link>
        </div>

        <button className="rounded-full border border-slate-200 p-2 lg:hidden">
          <FiMenu size={18} />
        </button>
      </div>
    </header>
  );
}
