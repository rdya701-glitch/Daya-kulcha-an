import './App.css'

const menu = [
  { name: 'Aloo Kulcha', price: 50 },
  { name: 'Daya Special Kulcha', price: 60 },
  { name: 'Onion Kulcha', price: 70 },
  { name: 'Gobhi Kulcha', price: 70 },
  { name: 'Achari Kulcha', price: 70 },
  { name: 'Moong Dal Kulcha', price: 70 },
  { name: 'Bhujia Kulcha', price: 70 },
  { name: 'Bada Kulcha', price: 70 },
  { name: 'Mix Veg Kulcha', price: 80 },
  { name: 'Paneer Kulcha', price: 90 },
  { name: 'Chur-Chur Kulcha', price: 100 },
  { name: 'Jumbo Special Kulcha', price: 150 },
  { name: 'Jalebi', price: 110 },
  { name: 'Patty', price: 120 },
  { name: 'Cheese Kulcha', price: 130 },
  { name: 'Dry Fruit Kulcha', price: 200 },
]

const phone = '919588319433'

function orderLink(item) {
  const message = `Hello Daya Kulcha & Dhaba, I want to order ${item.name} for ₹${item.price}. Please confirm my order.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}

export default function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="brand" href="#home">
          <span className="brand-mark">D</span>
          <span>
            <strong>DAYA KULCHA</strong>
            <small>& DHABA</small>
          </span>
        </a>

        <a className="call-button" href={`tel:+${phone}`}>
          Call Us
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">A TASTE TO REMEMBER</p>
            <h1>Swad Jo Yaad Reh Jaaye</h1>
            <p className="hero-description">
              Enjoy delicious Amritsari Kulcha, freshly prepared
              with love and authentic desi flavours.
            </p>
            <a className="primary-button" href="#menu">
              Explore Our Menu
            </a>
          </div>
          <div className="hero-food" aria-label="Kulcha illustration">
            <span>🫓</span>
            <span>🥘</span>
            <span>🌿</span>
          </div>
        </section>

        <section className="welcome">
          <p className="eyebrow">WELCOME TO DAYA</p>
          <h2>Good Food. Great Taste.</h2>
          <p>
            Your local destination for tasty kulche and
            a satisfying meal in Nanpara.
          </p>
        </section>

        <section className="menu-section" id="menu">
          <div className="section-heading">
            <p className="eyebrow">MADE FRESH FOR YOU</p>
            <h2>Daya Amritsari Special Kulcha</h2>
            <p>Choose your favourite from our menu.</p>
          </div>

          <div className="butter-note">
            🧈 Amul butter available at an extra ₹10.
          </div>

          <div className="menu-grid">
            {menu.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="food-symbol">
                  {index % 3 === 0 ? '🫓' : index % 3 === 1 ? '🥘' : '🍽️'}
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>Prepared fresh to order</p>
                  <strong className="price">₹{item.price}</strong>
                </div>

                <a
                  className="order-button"
                  href={orderLink(item)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Order
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="location-section" id="location">
          <p className="eyebrow">COME VISIT US</p>
          <h2>Daya Kulcha & Dhaba</h2>
          <p className="address">
            Bahraich Road, in front of Nanpara New Tehsil
          </p>
          <p>🕘 Open daily: 9:00 AM – 10:00 PM</p>
          <div className="location-actions">
            <a
              className="primary-button"
              href="https://www.google.com/maps/search/?api=1&query=Daya+Kulcha+Dhaba+Nanpara+New+Tehsil"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </a>
            <a
              className="outline-button"
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <strong>DAYA KULCHA & DHABA</strong>
        <p>Swad Jo Yaad Reh Jaaye</p>
        <a href={`tel:+${phone}`}>9588319433</a>
        <p className="copyright">© Daya Kulcha & Dhaba</p>
      </footer>

      <a
        className="floating-whatsapp"
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Order on WhatsApp"
      >
        WhatsApp Order
      </a>
    </div>
  )
}
