export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-28 text-center md:px-6">
      <div className="text-7xl font-black text-primary">404</div>
      <h1 className="mt-6 text-4xl font-black text-slate-900">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for does not exist or has moved.</p>
      <a href="/" className="primary-btn mt-8">Go home</a>
    </div>
  );
}
