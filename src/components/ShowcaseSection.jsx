import React, { useState } from "react";

export default function ShowcaseSection() {
  const works = [
    {
      id: "kitkat",
      title: "KITKAT",
      caption: "Influencers Catch A Break",
      // recommended: place the screenshot in public/assets and adjust the path below
      image: "/assets/Screenshot_2026-02-12_at_5.41.02_PM-65166be5-ffd8-44b3-b6e4-a9331dd88918.png",
    },
    {
      id: "pepperfry",
      title: "PEPPERFRY",
      caption: "Product Campaigns & Social",
      image: "/assets/placeholder-product.jpg",
    },
    {
      id: "tata",
      title: "TATA HEALTH",
      caption: "Healthcare Awareness Content",
      image: "/assets/placeholder-health.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="showcase-section" aria-label="Our Work">
      <div className="site-container showcase-inner">
        {/* Left big panel */}
        <div
          className="left-panel"
          role="tablist"
          aria-label="Work categories"
          onMouseLeave={() => {}}
        >
          <div className="left-top">
            <div className="left-title">KITKAT</div>
          </div>
          <ul className="client-list" aria-label="Clients">
            {["MANIPAL HOSPITALS","LIFESTYLE","BENGALURU AIRPORT","MAMAEARTH","TATA HEALTH","PEPPERFRY","CUREFIT"].map((name, idx) => {
              const matchIndex = works.findIndex(w => w.title.toLowerCase().includes(name.toLowerCase().split(' ')[0]));
              return (
                <li
                  key={name}
                  role="button"
                  tabIndex={0}
                  onClick={() => matchIndex >= 0 && setActiveIndex(matchIndex)}
                  onKeyDown={(e) => { if(e.key === 'Enter' && matchIndex>=0) setActiveIndex(matchIndex); }}
                  aria-current={matchIndex === activeIndex ? "true" : "false"}
                  className={`client-item client-${idx} ${matchIndex === activeIndex ? 'active' : ''}`}
                >
                  {name}
                </li>
              );
            })}
          </ul>
          <div className="left-hashtag" aria-hidden="true">
            #catchabreak
          </div>
        </div>

        {/* Right small panel with content that changes */}
        <div className="right-panel">
          <div className="right-inner">
            <div className="right-header">KITKAT</div>
            <div className="work-card">
              <img
                src={works[activeIndex].image}
                alt={works[activeIndex].title}
                className="work-image"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='520'><rect width='100%' height='100%' fill='%23fff'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23888' font-size='16'>Image unavailable</text></svg>";
                }}
              />
            </div>
            <div className="work-caption">{works[activeIndex].caption}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

