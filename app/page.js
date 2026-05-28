export default function LuxuryBagBrandWebsite() {
  const products = [
    {
      name: ' MICHAEL KORS Outlet',
      desc: 'A sophisticated monogram handbag crafted for modern lifestyles, blending versatility with elevated style.',
      price: '$379',
      image: 'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: ' MICHAEL KORS Outlet',
      desc: 'A sophisticated monogram handbag crafted for modern lifestyles, blending versatility with elevated style.',
      price: '$359',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: ' MICHAEL KORS Outlet',
      desc: 'A sophisticated monogram handbag crafted for modern lifestyles, blending versatility with elevated style.',
      price: '$329',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ee] text-neutral-900 font-sans">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#f7f3ee]/80 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-[0.3em]">MICHAEL KORS Outlet</h1>
          <nav className="hidden md:flex gap-8 text-sm tracking-wide">
            <a href="#collection">Collection</a>
            <a href="#story">Story</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury bag hero"
          className="w-full h-[85vh] object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <p className="uppercase tracking-[0.4em] text-sm mb-4">Quiet Luxury • Timeless Design</p>
            <h2 className="text-5xl md:text-7xl font-light max-w-3xl leading-tight">
              Crafted for timeless elegance.
            </h2>
            <p className="mt-6 max-w-xl text-lg text-neutral-200">
              Luxury woven handbags inspired by modern elegance, crafted for confident women in the Middle East and beyond.
            </p>
          </div>
        </div>
      </section>

      <section id="collection" className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <p className="uppercase tracking-[0.3em] text-sm text-neutral-500 mb-3">Featured Collection</p>
          <h3 className="text-4xl font-light">Signature Bags</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item) => (
            <div key={item.name} className="bg-white rounded-[2rem] overflow-hidden shadow-sm">
              <img src={item.image} alt={item.name} className="h-[420px] w-full object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-2xl font-medium">{item.name}</h4>
                  <span className="text-lg">{item.price}</span>
                </div>

                <p className="text-neutral-600 leading-relaxed">{item.desc}</p>

                <button className="mt-6 w-full bg-black text-white py-3 rounded-full">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="story" className="bg-[#ece4d8] py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-neutral-600 mb-4">Brand Story</p>
            <h3 className="text-5xl font-light mb-6 leading-tight">
              Inspired by quiet luxury.
            </h3>

            <p className="text-lg leading-8 text-neutral-700">
              LUXORA creates modern woven handbags designed with minimalist elegance and premium presentation for fashion-conscious women.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
            alt="Brand story"
            className="rounded-[2rem] shadow-lg h-[600px] object-cover w-full"
          />
        </div>
      </section>

      <footer id="contact" className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <h4 className="text-2xl tracking-[0.3em] mb-4">LUXORA</h4>
            <p className="text-neutral-400 leading-7">
              Contemporary luxury handbags designed for timeless everyday wear.
            </p>
          </div>

          <div>
            <h5 className="text-lg mb-4">Contact</h5>
            <ul className="space-y-3 text-neutral-400">
              <li>support@luxoraofficial.com</li>
              <li>Middle East • GCC</li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg mb-4">Collections</h5>
            <ul className="space-y-3 text-neutral-400">
              <li>Woven Bags</li>
              <li>Shoulder Bags</li>
              <li>Crossbody Bags</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
