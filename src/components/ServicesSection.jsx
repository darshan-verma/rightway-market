import React, { useState } from "react";

const services = [
  {
    id: "creative",
    title: "Social Media\nCreative Strategy",
    desc: "We marinate strategies that best suit your business objectives by sprinkling the perfect salts of creativity and research. Our social media experts craft thumb-stopping content that drives engagement and builds lasting brand loyalty.",
    img: "/services/01-service-social-media-creative-srtategy.png",
    gif: "/services/01-service-gif-social-media-creative-srtategy.gif",
  },
  {
    id: "media",
    title: "Media Planning\n& Buying",
    desc: "We help you profitably define your marketing goals with our expertise in media planning and buying. From strategic placements to optimized budgets, we ensure every rupee delivers maximum impact.",
    img: "/services/02-service-media-planning-buying.png",
    gif: "/services/02-service-gif-media-planning-buying.gif",
  },
  {
    id: "analytics",
    title: "Analytics\n& SEO",
    desc: "The P in Panga stands for performance and our SEO and Analytics team delivers it with appropriate insights that have the ability to transform your business. We turn data into actionable growth strategies.",
    img: "/services/03-service-analytics-seo.png",
    gif: "/services/03-service-gif-analytics-seo.gif",
  },
  {
    id: "branding",
    title: "Branding & Marketing\nCommunications",
    desc: "When we say we give your brand a VOICE we mean — V: Versatile, O: Omnipotent, I: Impressional, C: Captivating, E: Empowered way of branding and communicating your business.",
    img: "/services/04-service-branding-marketing-communications.png",
    gif: "/services/04-service-gif-branding-marketing-communications.gif",
  },
  {
    id: "mobile",
    title: "Mobile & Website\nUI/UX",
    desc: "From the essential to the ornate, everything is taken care of completely, to offer a user-friendly interface and experience to your consumers. We design digital experiences that convert visitors into customers.",
    img: "/services/05-service-mobile-website-ui-ux.png",
    gif: "/services/05-service-gif-mobile-website-ui-ux.gif",
  },
  {
    id: "influencer",
    title: "Influencer\nManagement",
    desc: "We bridge the gap between brands and the right voices. Our influencer management team curates authentic partnerships that amplify your brand message and reach the audiences that matter most.",
    img: "/services/06-service-influencer-management.png",
    gif: "/services/06-service-gif-influencer-management.gif",
  },
  {
    id: "video",
    title: "Video\nProduction",
    desc: "From concept to final cut, our video production team creates compelling visual stories that captivate audiences. We bring your brand narrative to life with cinematic quality and creative flair.",
    img: "/services/07-service-videio-production.png",
    gif: "/services/07-service-gif-videio-production.gif",
  },
  {
    id: "consulting",
    title: "Consulting\nServices",
    desc: "Our seasoned consultants provide strategic guidance to help you navigate the ever-evolving marketing landscape. We offer tailored solutions that align with your business objectives and drive measurable results.",
    img: "/services/08-service-consulting-services.png",
    gif: "/services/08-service-gif-consulting-services.gif",
  },
  {
    id: "technology",
    title: "Technology\nSolutions",
    desc: "We leverage cutting-edge technology to power your digital transformation. From custom platforms to automation tools, our tech solutions streamline operations and unlock new avenues for growth.",
    img: "/services/09-service-technology.png",
    gif: "/services/09-service-gif-technology.gif",
  },
];

function ServiceImage({ img, gif, title }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="service-art"
      aria-hidden="true"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="service-img-wrap">
        <img
          src={img}
          alt={title}
          className={`service-img-static ${hovered ? "hidden" : ""}`}
        />
        <img
          src={gif}
          alt=""
          className={`service-img-gif ${hovered ? "visible" : ""}`}
        />
      </div>
    </div>
  );
}

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
                <span className="service-number">
                  {String(idx + 1).padStart(2, "0")}
                </span>
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
              <ServiceImage img={s.img} gif={s.gif} title={s.title} />
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
