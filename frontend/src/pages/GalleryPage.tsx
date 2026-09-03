const images = [
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80',
];

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="mb-12 text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">Gallery</p>
        <h1 className="mt-3 text-4xl font-black text-slate-900">A little look inside our club.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {images.map((image, index) => (
          <div key={image + index} className="overflow-hidden rounded-[2rem] shadow-soft">
            <img src={image} alt={`Gallery item ${index + 1}`} className="h-72 w-full object-cover transition duration-300 hover:scale-105" />
          </div>
        ))}
      </div>
    </div>
  );
}
