import React from "react";
import trophyImg from "../assets/Awards-image7-987f5809-b935-48cc-9c19-4dfecccb206b.png";
import pencilImg from "../assets/Untitled_design__7_-cd33ea16-20ca-4a5e-9e04-2a96e3e735fc.png";
import mascotImg from "../assets/Untitled_design__8_-1911174a-2633-45dc-adad-b04259a016bf.png";

const awards = [
  { id: "ab23", title: "Abby 23, GOLD", subtitle: "Guardians of the heart", link: "manipalhospitals" },
  { id: "ab23s", title: "Abby 23, SILVER", subtitle: "Guardians of the heart", link: "manipalhospitals" },
  { id: "ab23o", title: "Abby 23, SILVER", subtitle: "Other Consumer Products & Services", link: "manipalhospitals" },
  { id: "ab23e", title: "Abby 23, SILVER", subtitle: "Events & Experiential", link: "manipalhospitals" },
  { id: "ab23x", title: "Abby 23, SILVER", subtitle: "Guardians of the heart", link: "manipalhospitals" },
  { id: "ab23b", title: "Abby 23, BRONZE", subtitle: "Guardians of the heart", link: "manipalhospitals" },
];

export default function AwardsSection() {
  return (
    <section className="awards-feature" aria-label="Awards and highlights">
      <div className="site-container awards-inner">
        <div className="awards-frame">
          <div className="frame-left-orn"> </div>
          <div className="frame-content">
            <h2 className="awards-title">Not too<br/>Sh-abby, eh?</h2>
            <div className="awards-list">
              {awards.map((a) => (
                <div key={a.id} className="award-item">
                  <strong className="award-name">{a.title}</strong>
                  <div className="award-sub">{a.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="frame-right-orn"> </div>
        </div>

        <div className="awards-art">
          <div className="award-illustration">
            <img src={trophyImg} alt="trophies" />
          </div>
          <img src={pencilImg} alt="pencil" className="orn-pencil" />
          <img src={mascotImg} alt="mascot" className="orn-mascot" />
        </div>
      </div>
    </section>
  );
}

