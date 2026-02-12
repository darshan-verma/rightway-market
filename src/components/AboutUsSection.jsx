import React, { useState, useRef, useCallback } from "react";

const galleryItems = [
  {
    id: 1,
    emoji: "🏢",
    label: "Office Space",
    bg: "linear-gradient(135deg, #5a3a28, #8a6040)",
    title: "Where Ideas Are Born",
    desc: "Our vibrant office spaces are designed to fuel creativity and collaboration across every team.",
  },
  {
    id: 2,
    emoji: "🎨",
    label: "Creative Hub",
    bg: "linear-gradient(135deg, #3a5a28, #5a8a40)",
    title: "The Creative Engine",
    desc: "A playground for designers, writers and strategists to craft campaigns that break the internet.",
  },
  {
    id: 3,
    emoji: "☕",
    label: "Chill Zone",
    bg: "linear-gradient(135deg, #28405a, #406a8a)",
    title: "Recharge & Reconnect",
    desc: "Because the best ideas often come over a hot cup of chai and casual conversations.",
  },
  {
    id: 4,
    emoji: "💡",
    label: "Brainstorm Room",
    bg: "linear-gradient(135deg, #6a5a18, #9a8a30)",
    title: "Think Tank",
    desc: "Where wild ideas meet sharp strategy — our brainstorm rooms are where the magic happens.",
  },
  {
    id: 5,
    emoji: "🎯",
    label: "Strategy Desk",
    bg: "linear-gradient(135deg, #5a2850, #8a4080)",
    title: "Precision Planning",
    desc: "Data-driven decisions and bold creative thinking collide at our strategy desks.",
  },
  {
    id: 6,
    emoji: "🎬",
    label: "Production Studio",
    bg: "linear-gradient(135deg, #4a1a2a, #7a3a4a)",
    title: "Lights, Camera, Content!",
    desc: "From reels to full campaigns — our in-house production studio brings stories to life.",
  },
  {
    id: 7,
    emoji: "🌿",
    label: "Terrace Garden",
    bg: "linear-gradient(135deg, #2a5a3a, #4a8a5a)",
    title: "Fresh Air, Fresh Ideas",
    desc: "Our rooftop garden is where team bonds are forged and stress melts away.",
  },
  {
    id: 8,
    emoji: "🎮",
    label: "Game Room",
    bg: "linear-gradient(135deg, #1a3a5a, #3a5a8a)",
    title: "Play Hard, Work Harder",
    desc: "Table tennis, PS5, board games — we believe play fuels the best kind of productivity.",
  },
];

export default function AboutUsSection() {
  const [activeId, setActiveId] = useState(null);
  const trackRef = useRef(null);

  const handleItemClick = useCallback((id) => {
    setActiveId((prev) => (prev === id ? null : id));
  }, []);

  const isPaused = activeId !== null;

  return (
    <div className="aboutus-page">
      {/* ===== HERO: Mafia Section ===== */}
      <section className="aboutus-hero">
        {/* Large decorative "O" on left */}
        <div className="aboutus-hero-deco-o" aria-hidden="true">O</div>

        <div className="site-container aboutus-hero-inner">
          {/* Left: Text content */}
          <div className="aboutus-hero-text">
            <div className="aboutus-hero-badge">
              <span className="badge-crown" aria-hidden="true">👑</span>
              <span className="badge-number">#1</span>
            </div>
            <h1 className="aboutus-hero-title">Mafia</h1>
            <p className="aboutus-hero-phonetic">/mæfiə/</p>
            <p className="aboutus-hero-definition">
              The quintessential villain who brings out the best in the hero and is the sole
              reason for his existence – the Joker to Batman, the Gabbar Singh to Thakur,
              the Darth Vader to Luke Skywalker. These are the guys and girls whose
              punchlines and schemes are remembered forever.
            </p>
          </div>

          {/* Right: People holding signs image placeholder */}
          <div className="aboutus-hero-image">
            <div className="signs-grid">
              <div className="sign-person">
                <div className="sign-card">
                  <span>WE</span>
                </div>
              </div>
              <div className="sign-person">
                <div className="sign-card">
                  <span>ARE</span>
                </div>
              </div>
              <div className="sign-person">
                <div className="sign-card">
                  <span>MARKETING</span>
                </div>
              </div>
              <div className="sign-person">
                <div className="sign-card">
                  <span>MAFIAS</span>
                </div>
              </div>
            </div>
            <div className="signs-hashtags">
              <span className="hashtag-item">#पंगा</span>
              <span className="hashtag-item">माफिया</span>
              <span className="hashtag-item">माफिया</span>
              <span className="hashtag-item">#पंगा</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Plan, Create and Connect Section ===== */}
      <section className="aboutus-plan-section">
        <div className="site-container aboutus-plan-inner">
          <h2 className="aboutus-plan-title">Plan, Create and Connect.</h2>
          <p className="aboutus-plan-text">
            We are an award-winning creative marketing and advertising agency. We ideate, curate and
            execute marketing strategies to engage with our clients' intended audience, all while integrating
            their brand with the digital world.
          </p>
          <p className="aboutus-plan-text">
            We take thoughts for ideas and create remarkable moments. We are always well prepared – with a
            bunch of crazy people, endless cups of chai and beautiful hideouts in Bengaluru, Delhi and Mumbai.
          </p>
          <div className="aboutus-play-btn" aria-label="Play video">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
              <circle cx="27" cy="27" r="26" stroke="#111" strokeWidth="2"/>
              <polygon points="22,17 22,37 38,27" fill="#111"/>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== Image Gallery Carousel ===== */}
      <section className="aboutus-gallery">
        <div
          className={`aboutus-carousel-track${isPaused ? " paused" : ""}`}
          ref={trackRef}
        >
          {/* Render items twice for seamless infinite loop */}
          {[...galleryItems, ...galleryItems].map((item, idx) => {
            const isActive = activeId === `${item.id}-${idx}`;
            return (
              <div
                key={`${item.id}-${idx}`}
                className={`carousel-slide${isActive ? " active" : ""}`}
                onClick={() => handleItemClick(`${item.id}-${idx}`)}
              >
                <div
                  className="carousel-slide-bg"
                  style={{ background: item.bg }}
                >
                  <span className="carousel-slide-emoji">{item.emoji}</span>
                  <span className="carousel-slide-label">{item.label}</span>
                </div>

                {/* Text overlay on click */}
                <div className={`carousel-overlay${isActive ? " visible" : ""}`}>
                  <h4 className="carousel-overlay-title">{item.title}</h4>
                  <p className="carousel-overlay-desc">{item.desc}</p>
                  <span className="carousel-overlay-hint">Click to close</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Customer Delight Section ===== */}
      <section className="aboutus-delight-section">
        <div className="site-container aboutus-delight-inner">
          <h2 className="aboutus-delight-title">Customer Delight</h2>
          <p className="aboutus-delight-subtitle">
            We make the customers orgasm when we lay out our ideas and
            creatives in front of them.
          </p>
          <p className="aboutus-delight-text">
            At Social Panga, we are driven by a strong private desire to delight the customer to an
            extent that they want to give us virtual hugs.
          </p>
          <p className="aboutus-delight-text">
            BTW, we live for occasional fatty foods, intoxicating liquids, and jalebi (yes, we're a
            bunch of nice kids!)
          </p>

          {/* 4 Feature Cards */}
          <div className="aboutus-delight-cards">
            <div className="delight-card">
              <div className="delight-card-icon">
                <span className="delight-emoji">🤝</span>
              </div>
              <p className="delight-card-text">
                We help you share your ideas with the world.
              </p>
            </div>
            <div className="delight-card">
              <div className="delight-card-icon">
                <span className="delight-emoji">💼</span>
              </div>
              <p className="delight-card-text">
                We give you the resources best suited for your brand.
              </p>
            </div>
            <div className="delight-card">
              <div className="delight-card-icon">
                <span className="delight-emoji">🎯</span>
              </div>
              <p className="delight-card-text">
                We anticipate your needs better than you can.
              </p>
            </div>
            <div className="delight-card">
              <div className="delight-card-icon">
                <span className="delight-emoji">☕</span>
              </div>
              <p className="delight-card-text">
                We make a mean cup of tea and our coffee is "mwah!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Redefining Rules Section ===== */}
      <section className="aboutus-redefining-section">
        <div className="site-container aboutus-redefining-inner">
          <h2 className="aboutus-redefining-title">
            Redefining Rules,<br />
            without breaking them.
          </h2>
        </div>
      </section>
    </div>
  );
}
