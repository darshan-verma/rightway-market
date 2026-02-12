import React from "react";

const services = [
  {
    id: "creative",
    title: "Creative &\nDigital Strategy",
    desc: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research.",
    img: "/assets/services/creative.png",
  },
  {
    id: "media",
    title: "Media Planning\n& Buying",
    desc: "We help you profitably define your marketing goals with our expertise in media planning and buying.",
    img: "/assets/services/media.png",
  },
  {
    id: "analytics",
    title: "Analytics & SEO",
    desc: "The P in Panga stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business.",
    img: "/assets/services/analytics.png",
  },
  {
    id: "branding",
    title: "Branding & Marketing\nCommunications",
    desc: "When we say we give your brand a VOICE we mean — V : Versatile, O : Omnipotent, I : Impressional, C : Captivating, E : Empowered way of branding and communicating your business.",
    img: "/assets/services/branding.png",
  },
  {
    id: "mobile",
    title: "Mobile & Website\nUI/UX",
    desc: "From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers.",
    img: "/assets/services/mobile.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section" id="services" aria-label="Our Services">
      <div className="site-container services-inner">
        {/* Top: heading left, intro text right */}
        <div className="services-header">
          <h2 className="services-heading">
            Our<br />Services
          </h2>
          <p className="services-intro">
            We help businesses reach their full potential by creating a brand
            identity that is authentic and reflective of them. We understand
            that every brand comes with its own unique challenges, and hence
            requires expertise. We join hands with you as your growth partners
            and focus on delivering a power-packed panga each time!
          </p>
        </div>

        {/* Service rows — alternating layout */}
        <div className="services-list">
          {services.map((s, idx) => {
            const isReversed = idx % 2 === 1;

            const textBlock = (
              <div className={`service-text ${isReversed ? "text-right" : ""}`}>
                <h3 className="service-title">
                  {s.title.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < s.title.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="service-desc">{s.desc}</p>
              </div>
            );

            const imageBlock = (
              <div className="service-art" aria-hidden="true">
                {/* Image placeholder — replace src with your illustration */}
                <img src={s.img} alt="" />
              </div>
            );

            return (
              <div className={`service-row ${isReversed ? "reverse" : ""}`} key={s.id}>
                {isReversed ? (
                  <>
                    {imageBlock}
                    {textBlock}
                  </>
                ) : (
                  <>
                    {textBlock}
                    {imageBlock}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
