import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Himanshu Arora",
    role: "Co-Founder",
    bio: "Every badass group of mafias needs a leader, and Himanshu Arora is Social Panga's resident Optimus Prime. Going by the time he spends on the phone or on mails, if \"selling\" were a woman, then these two would be in a happily-ever-after relationship.",
    image: "/assets/team/himanshu.jpg",
  },
  {
    id: 2,
    name: "Gaurav Arora",
    role: "Co-Founder",
    bio: "He dons so many hats through the day that it's a little surprising when you find that he doesn't have 10 heads and 20 arms. He is the energy centre of the office who curates the most insane ideas and pushes everybody to unleash their potential.",
    image: "/assets/team/gaurav.jpg",
  },
  {
    id: 3,
    name: "Sunitha Natarajan",
    role: "Director - Digital Strategy",
    bio: "The CCO (Chief Cat Officer) who is always ready for Pav Bhaji and Pitches. The omnipresent Radhika Apte of Panga — you will find her in almost every project, campaign strategy, pitches, plans, and sometimes correcting the alignment and structure of decks.",
    image: "/assets/team/sunitha.jpg",
  },
  {
    id: 4,
    name: "Rahul Mehta",
    role: "Creative Director",
    bio: "The wizard behind every viral campaign. With a mind that never stops creating, Rahul transforms ideas into visual masterpieces that leave audiences in awe. When he's not designing, you'll find him sketching on napkins.",
    image: "/assets/team/rahul.jpg",
  },
  {
    id: 5,
    name: "Priya Sharma",
    role: "Head of Content",
    bio: "Words are her weapons, and she wields them with precision. Priya crafts stories that make brands come alive and audiences click 'follow'. She believes that a good pun is worth a thousand likes.",
    image: "/assets/team/priya.jpg",
  },
  {
    id: 6,
    name: "Arjun Kapoor",
    role: "Performance Marketing Lead",
    bio: "The man who speaks the language of algorithms. Arjun turns data into decisions and clicks into conversions. He lives by one rule — if it can't be measured, it can't be improved.",
    image: "/assets/team/arjun.jpg",
  },
];

function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false);
  const initials = member.name.split(" ").map((n) => n[0]).join("");

  return (
    <div className="team-card-wrap">
      <div className="team-card-photo">
        <div className="team-photo-circle">
          <img
            src={member.image}
            alt={member.name}
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.nextSibling.style.display = "flex";
            }}
          />
          <div className="team-photo-fallback" style={{ display: "none" }}>
            {initials}
          </div>
        </div>
      </div>
      <div className="team-card-info">
        <h3 className="team-card-name">{member.name}</h3>
        <span className="team-card-role">{member.role}</span>
        <p className="team-card-bio">{member.bio}</p>
      </div>
      <button
        className="team-card-next"
        onClick={() => setFlipped(!flipped)}
        aria-label={`More about ${member.name}`}
      >
        next
      </button>
    </div>
  );
}

export default function OurTeamSection() {
  return (
    <section className="ourteam-section" aria-label="Our Team">
      <div className="site-container">
        {/* Header */}
        <div className="ourteam-header">
          <div className="ourteam-title-block">
            <span className="ourteam-count">400+</span>
            <h1 className="ourteam-heading">
              Our Sharp
              <br />
              Shooters
            </h1>
          </div>
          <p className="ourteam-intro">
            Meet the Mafias – the crazy ones, the misfits, the rebels, the
            square pegs in round holes, the ones who have set out on the
            journey to change the world.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
