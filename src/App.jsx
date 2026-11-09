
import React from "react";
import "./App.css";

const services = [
  {
    number: "01",
    title: "Restaurants",
    description:
      "Give your restaurant its own identity with professionally branded drinking water bottles.",
    icon: "restaurant",
  },
  {
    number: "02",
    title: "Hotels & Resorts",
    description:
      "Create a premium guest experience with water bottles carrying your hotel's branding.",
    icon: "hotel",
  },
  {
    number: "03",
    title: "Cafés & Businesses",
    description:
      "Turn everyday water bottles into a professional extension of your business identity.",
    icon: "business",
  },
];

function DropIcon({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M20 2C20 2 3 23 3 32C3 41 10.6 46 20 46C29.4 46 37 41 37 32C37 23 20 2 20 2Z"
        fill="currentColor"
      />
      <path
        d="M9 32C9 25 18 13 18 13"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity=".65"
      />
    </svg>
  );
}

function BrandLogo() {
  return (
    <a href="#home" className="brand-logo">
      <span className="brand-symbol">
        <DropIcon size={38} />
      </span>
      <span className="brand-name">
        Your<span>Water</span>
        <small>YOUR BRAND. YOUR WATER.</small>
      </span>
    </a>
  );
}

function BottleMockup() {
  return (
    <div className="bottle-scene">
      <div className="bottle-glow" />

      <div className="bottle">
        <div className="bottle-cap">
          <div className="cap-lines" />
        </div>

        <div className="bottle-neck" />

        <div className="bottle-body">
          <div className="bottle-shine" />
          <div className="bottle-water" />

          <div className="bottle-label">
            <div className="label-brand">
              <DropIcon size={22} />
              <span>YOUR WATER</span>
            </div>
            <div className="label-line" />
            <div className="label-restaurant">YOUR BRAND</div>
            <div className="label-product">DRINKING WATER</div>
            <div className="label-bottom">500 ML</div>
          </div>
        </div>

        <div className="bottle-base" />
      </div>

      <div className="floating-card card-one">
        <span className="floating-icon">✓</span>
        <div>
          <strong>100% Customized</strong>
          <small>Your logo, your identity</small>
        </div>
      </div>

      <div className="floating-card card-two">
        <span className="qr-symbol">▦</span>
        <div>
          <strong>Scan & Connect</strong>
          <small>Your business, one scan away</small>
        </div>
      </div>

      <div className="scene-circle circle-one" />
      <div className="scene-circle circle-two" />
    </div>
  );
}

function ServiceIcon({ type }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (type === "restaurant") {
    return (
      <svg {...common}>
        <path d="M3 21h18M5 21V9h14v12M8 9V5h8v4M9 13h2m2 0h2m-6 4h2m2 0h2" />
        <path d="M3 9h18" />
      </svg>
    );
  }

  if (type === "hotel") {
    return (
      <svg {...common}>
        <path d="M3 21V5h18v16M7 21v-5h10v5M7 9h2m6 0h2M7 12h2m6 0h2M12 5V2" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h4" />
    </svg>
  );
}

function App() {
  const whatsappNumber = "932147152363";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello! I am interested in customized branded water bottles for my business. Please share more details."
  )}`;

  return (
    <div className="website" id="home">
      {/* Navigation */}
      <header className="navbar">
        <div className="container nav-content">
          <BrandLogo />

          <nav className="nav-links">
            <a href="#home" className="active">Home</a>
            <a href="#services">Our Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#why-us">Why Us</a>
          </nav>

          <a href={whatsappLink} className="nav-button" target="_blank" rel="noreferrer">
            Get Started <span>↗</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-line" />
                CUSTOM BRANDED DRINKING WATER
              </div>

              <h1>
                Your Brand.
                <br />
                <span>Your Water.</span>
              </h1>

              <p className="hero-description">
                Make every bottle a reflection of your business.
                We help restaurants, hotels and businesses create
                their own professionally branded drinking water.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-button">
                  Get Your Own Branded Water <span>→</span>
                </a>
                <a href="#how-it-works" className="secondary-button">
                  Discover How It Works
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-icon">
                  <DropIcon size={23} />
                </div>
                <div>
                  <strong>Your Business. Your Identity.</strong>
                  <span>Customized bottles made for your brand.</span>
                </div>
              </div>
            </div>

            <BottleMockup />
          </div>

          <div className="hero-bottom-wave" />
        </section>

        {/* Introduction */}
        <section className="intro-section">
          <div className="container intro-content">
            <span className="section-tag">A NEW WAY TO BRAND YOUR BUSINESS</span>
            <h2>
              More than just water.
              <br />
              <span>It's your brand in every bottle.</span>
            </h2>
            <p>
              Your Water provides customized drinking water bottles
              designed around your business identity. From your logo
              to your label, every bottle represents your brand.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-tag">WHO WE SERVE</span>
                <h2>Made for businesses<br />like yours.</h2>
              </div>
              <p>
                Whatever your business, give your customers
                an experience that carries your identity.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top">
                    <div className="service-icon">
                      <ServiceIcon type={service.icon} />
                    </div>
                    <span>{service.number}</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#contact" className="service-link">
                    Get Started <span>→</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="process-section" id="how-it-works">
          <div className="container">
            <div className="center-heading">
              <span className="section-tag">SIMPLE PROCESS</span>
              <h2>Your brand. Three simple steps.</h2>
              <p>Getting your own branded water bottles is easy.</p>
            </div>

            <div className="process-grid">
              <div className="process-item">
                <span className="process-number">01</span>
                <div className="process-icon">◈</div>
                <h3>Share Your Brand</h3>
                <p>
                  Tell us about your business and share your logo
                  and branding requirements.
                </p>
              </div>

              <div className="process-item">
                <span className="process-number">02</span>
                <div className="process-icon">✎</div>
                <h3>Approve Your Design</h3>
                <p>
                  We prepare a customized bottle label
                  for your approval.
                </p>
              </div>

              <div className="process-item">
                <span className="process-number">03</span>
                <div className="process-icon">✓</div>
                <h3>Get Your Bottles</h3>
                <p>
                  Once everything is approved, your branded
                  bottles are prepared for delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="why-section" id="why-us">
          <div className="container why-grid">
            <div className="why-visual">
              <div className="why-water-circle">
                <DropIcon size={100} />
                <span>YOUR WATER</span>
                <small>YOUR BRAND. YOUR WATER.</small>
              </div>
              <div className="why-decoration decoration-one" />
              <div className="why-decoration decoration-two" />
            </div>

            <div className="why-content">
              <span className="section-tag">WHY YOUR WATER</span>
              <h2>
                Your business deserves
                <span> its own identity.</span>
              </h2>
              <p>
                A customized water bottle is more than a drink.
                It is an opportunity to make your business
                memorable at every table and every interaction.
              </p>

              <div className="benefit-list">
                <div className="benefit">
                  <span>✓</span>
                  <div>
                    <strong>Personalized Branding</strong>
                    <p>Your logo and business identity on every bottle.</p>
                  </div>
                </div>

                <div className="benefit">
                  <span>✓</span>
                  <div>
                    <strong>Professional Presentation</strong>
                    <p>Labels designed to complement your business.</p>
                  </div>
                </div>

                <div className="benefit">
                  <span>✓</span>
                  <div>
                    <strong>QR Code Integration</strong>
                    <p>Give customers an easy way to discover your business.</p>
                  </div>
                </div>
              </div>

              <a href="#contact" className="primary-button">
                Create Your Brand <span>→</span>
              </a>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-section" id="contact">
          <div className="container contact-content">
            <span className="section-tag">LET'S WORK TOGETHER</span>
            <h2>
              Ready to put your
              <br />
              <span>brand on the bottle?</span>
            </h2>
            <p>
              Let's create customized drinking water bottles
              that represent your business.
            </p>
            <a href={whatsappLink} className="contact-button" target="_blank" rel="noreferrer">
              Contact Us on WhatsApp <span>↗</span>
            </a>
            <small>YOUR BRAND. YOUR WATER.</small>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <BrandLogo />
            <p>
              Customized drinking water bottles
              for businesses that want their own identity.
            </p>
          </div>

          <div className="footer-column">
            <strong>Explore</strong>
            <a href="#home">Home</a>
            <a href="#services">Our Services</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#why-us">Why Us</a>
          </div>

          <div className="footer-column">
            <strong>Get In Touch</strong>
            <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Your Water. All rights reserved.</span>
          <span>Your Brand. Your Water.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
