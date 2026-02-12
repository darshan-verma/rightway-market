import React from "react";

const cards = [
  {
    id: "request",
    color: "#c92a2a",
    title:
      "Looking to become the next big name everyone's talking about?",
    caption: "Request a proposal.",
    image: "/assets/infoxbox-ico1-b2da63eb-789f-4096-8e59-73790ae8f762.png",
    imgOffset: { left: 24, bottom: -28 },
  },
  {
    id: "careers",
    color: "#0b79c1",
    title: "Fear of missing out on the chance to do your life's greatest work?",
    caption: "Join our team of Mafias.",
    image: "/assets/infoxbox-ico2-e746de14-fa9a-42c6-b3f0-ec345790be2a.png",
    imgOffset: { left: "50%", bottom: -40, transform: "translateX(-50%)" },
  },
  {
    id: "newsletter",
    color: "#6a2ea6",
    title: "Excited about the wonderful world of digital storytelling?",
    caption: "Sign up for our newsletter.",
    image: "/assets/infoxbox-ico3-c9c922fc-19d6-4b3d-ab39-25449a399acb.png",
    imgOffset: { right: 24, bottom: -30 },
  },
];

export default function InfoCards() {
  return (
    <section className="info-cards-section" aria-label="Info cards">
      <div className="site-container">
        <div className="info-cards-row">
          {cards.map((c) => (
            <div className="info-card-wrap" key={c.id}>
              <div
                className="info-card"
                style={{ background: c.color }}
                role="article"
                aria-labelledby={`${c.id}-title`}
              >
                <h4 id={`${c.id}-title`} className="info-card-title">
                  {c.title}
                </h4>
                <p className="info-card-caption">{c.caption}</p>
              </div>

              <div
                className="info-card-art"
                style={{
                  ...c.imgOffset,
                }}
                aria-hidden="true"
              >
                <img
                  src={c.image}
                  alt=""
                  style={{ display: "block", width: 160, height: "auto" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

