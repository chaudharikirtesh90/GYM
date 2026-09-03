import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary font-black text-white">E</div>
            <div>
              <div className="text-xl font-black text-white">EliteFit</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Gym Club</div>
            </div>
          </div>
          <p className="text-sm text-slate-400">Premium fitness coaching, wellness plans, and member-first experiences that keep you moving forward.</p>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Explore</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/trainers">Trainers</Link></li>
            <li><Link to="/pricing">Memberships</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Support</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/login">Member Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-lg font-bold text-white">Follow Us</h4>
          <div className="flex gap-3 text-lg text-white">
            <span className="rounded-full border border-slate-700 p-2"><FaInstagram /></span>
            <span className="rounded-full border border-slate-700 p-2"><FaFacebookF /></span>
            <span className="rounded-full border border-slate-700 p-2"><FaXTwitter /></span>
            <span className="rounded-full border border-slate-700 p-2"><FaYoutube /></span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-5 text-center text-sm text-slate-400 md:px-6">© 2026 EliteFit Gym. All rights reserved.</div>
    </footer>
  );
}
