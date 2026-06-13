export default function Page() {
  const products = [
    {
      name: "Cube Squeeze Toy",
      desc: "Stress relief cube with glitter textures",
      image: "/解压1.png"
    },
    {
      name: "Rainbow Mystery Dumpling",
      desc: "Cute surprise squishy toy set",
      image: "/包子.png"
    },
    {
      name: "Slot Machine Fidget Toy",
      desc: "Slot Machine Fidget Toy",
      image: "/老虎机.png"
    },
    {
      name: "Ice Cream Fidget Toy",
      desc: "Colorful ice cream style stress toy",
      image: "/冰淇淋.png"
    }
  ]

  return (
    <main style={{fontFamily:'Arial', padding:'30px', background:'#fffaf7'}}>

      {/* HEADER */}
      <header style={{textAlign:'center', marginBottom:'40px'}}>
        <h1 style={{fontSize:'40px'}}>LOVINO</h1>
        <p>Premium Fidget & Stress Relief Toys</p>
      </header>

      {/* BRAND STORY */}
      <section style={{marginBottom:'40px'}}>
        <h2>Our Story</h2>
        <p>
          LOVINO is a creative toy brand focused on stress relief, joy, and imagination.
          We design safe, soft, and colorful fidget toys for kids and adults worldwide.
        </p>
      </section>

      {/* PRODUCTS */}
      <section>
        <h2>Our Products</h2>

        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(2,1fr)',
          gap:'20px'
        }}>

          {products.map((p, i) => (
            <div key={i} style={{
              border:'1px solid #eee',
              padding:'15px',
              borderRadius:'10px'
            }}>
              <img src={p.image} style={{width:'100%', height:'180px', objectFit:'cover'}} />
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section style={{marginTop:'50px'}}>
        <h2>Contact</h2>
        <p>Email: support@lovino-toys.com</p>
      </section>

      {/* FOOTER */}
      <footer style={{marginTop:'40px', fontSize:'12px', color:'#999'}}>
        © 2026 LOVINO Toys. All rights reserved.
      </footer>

    </main>
  )
}
