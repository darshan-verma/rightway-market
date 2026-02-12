import React, { useState } from "react";

export default function Hero() {
  const [panel, setPanel] = useState("default"); // default | marketing | better | bigger

  const containerClass = `hero-landing panel-${panel}`;

  return (
    <section
      className={containerClass}
      role="region"
      aria-label="Hero"
      onMouseLeave={() => setPanel("default")}
    >
      {/* Background layers — images can be replaced later in CSS or with inline style */}
      <div className="hero-bg bg-default" aria-hidden="true" />
      <div className="hero-bg bg-marketing" aria-hidden="true" />
      <div className="hero-bg bg-better" aria-hidden="true" />
      <div className="hero-bg bg-bigger" aria-hidden="true" />

      <div className="site-container hero-inner">
        <div>
          <h1 className="hero-title">
            We Are{" "}
            <span
              className="interactive-word"
              onMouseEnter={() => setPanel("marketing")}
              onFocus={() => setPanel("marketing")}
              tabIndex={0}
              aria-controls="marketing-panel"
              style={{cursor: "pointer"}}
            >
              <strong style={{fontWeight: 900}}>Marketing Mafias</strong>
            </span>
          </h1>

          <p className="hero-sub">
            Skilled enough to know{" "}
            <span
              className="interactive-word"
              onMouseEnter={() => setPanel("better")}
              onFocus={() => setPanel("better")}
              tabIndex={0}
              aria-controls="better-panel"
              style={{cursor: "pointer"}}
            >
              <strong>better</strong>
            </span>
            <br />
            Wild enough to think{" "}
            <span
              className="interactive-word"
              onMouseEnter={() => setPanel("bigger")}
              onFocus={() => setPanel("bigger")}
              tabIndex={0}
              aria-controls="bigger-panel"
              style={{cursor: "pointer"}}
            >
              <strong>bigger!</strong>
            </span>
          </p>
        </div>

        <div className="hero-illustration" aria-hidden="true">
          {/* Illustration placeholder — replace with the provided hero image by placing it at /public/assets/hero.png */}
          <div
            style={{
              width: 420,
              height: 320,
              borderRadius: 180,
              background:
                "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.6), rgba(255,255,255,0.15))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
            }}
          >
            <div
              style={{
                width: 200,
                height: 220,
                background: "#fff",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#333",
                fontWeight: 700,
              }}
            >
              Illustration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

