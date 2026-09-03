const posts = [
  { title: 'Build a stronger core', category: 'Fitness', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80' },
  { title: 'Nutrition habits that stick', category: 'Nutrition', image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80' },
  { title: 'How to recover smarter', category: 'Recovery', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80' },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Latest blog</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">Fitness insights to keep you growing.</h1>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <img src={post.image} alt={post.title} className="h-64 w-full object-cover" />
            <div className="p-6">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-primary">{post.category}</div>
              <h2 className="mt-3 text-2xl font-bold text-slate-900">{post.title}</h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
