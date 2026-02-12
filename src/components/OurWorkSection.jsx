import React, { useState } from "react";

const CATEGORIES = [
  "ALL",
  "BRANDING",
  "CASE STUDIES",
  "CREATIVE HUB",
  "PERFORMANCE MARKETING",
  "PRODUCTION",
  "UI/UX",
];

const PROJECTS = [
  {
    id: 1,
    title: "Guardians of the Heart",
    client: "Manipal Hospitals",
    category: "BRANDING",
    bg: "#e23b56",
    accent: "#c0223a",
    logo: "manipal hospitals",
    tagline: "One Scan Can Save A Life",
  },
  {
    id: 2,
    title: "Make A Heart Promise",
    client: "Manipal Hospitals",
    category: "CREATIVE HUB",
    bg: "#1a3aad",
    accent: "#0e2580",
    logo: "manipal hospitals",
    tagline: "Pledge to learn CPR and save lives",
  },
  {
    id: 3,
    title: "Paanklub Furniture",
    client: "Paanklub",
    category: "BRANDING",
    bg: "#f5a44c",
    accent: "#e8932f",
    logo: "PAANKLUB",
    tagline: "Modern Living Reimagined",
  },
  {
    id: 4,
    title: "Titan Brand Campaign",
    client: "Titan",
    category: "UI/UX",
    bg: "#7ec8a7",
    accent: "#5bb890",
    logo: "TITAN",
    tagline: "Time for Something New",
  },
  {
    id: 5,
    title: "Himalaya Ayurveda",
    client: "Himalaya",
    category: "BRANDING",
    bg: "#e8e0d4",
    accent: "#d6ccbe",
    logo: "himalaya",
    tagline: "Since 1930 — Ayurveda Wellness",
  },
  {
    id: 6,
    title: "KitKat Break Campaign",
    client: "KitKat",
    category: "CREATIVE HUB",
    bg: "#ffffff",
    accent: "#f0f0f0",
    logo: "KitKat",
    tagline: "Have a Break, Have a KitKat",
  },
  {
    id: 7,
    title: "Strength of Love",
    client: "Mother's Natural",
    category: "PRODUCTION",
    bg: "#5ca0d3",
    accent: "#4590c5",
    logo: "Mother's Natural",
    tagline: "Celebrating mother's natural strength of love",
  },
  {
    id: 8,
    title: "Every Vote Counts",
    client: "Manipal Hospitals",
    category: "CASE STUDIES",
    bg: "#f47e3e",
    accent: "#e06b2a",
    logo: "manipal hospitals",
    tagline: "Every VOTE Counts",
  },
  {
    id: 9,
    title: "Digital Growth Strategy",
    client: "Cleartrip",
    category: "PERFORMANCE MARKETING",
    bg: "#2d2d7b",
    accent: "#1e1e60",
    logo: "Cleartrip",
    tagline: "Performance Marketing that Delivers",
  },
  {
    id: 10,
    title: "Social Media Overhaul",
    client: "Swiggy",
    category: "CREATIVE HUB",
    bg: "#fc8019",
    accent: "#e07015",
    logo: "Swiggy",
    tagline: "Fresh Feeds, Fresh Ideas",
  },
  {
    id: 11,
    title: "Campus Connect",
    client: "Manipal University",
    category: "UI/UX",
    bg: "#9b59b6",
    accent: "#8344a0",
    logo: "Manipal University",
    tagline: "Connecting Minds Digitally",
  },
  {
    id: 12,
    title: "Brand Refresh",
    client: "Prestige Group",
    category: "BRANDING",
    bg: "#2ecc71",
    accent: "#27ae60",
    logo: "Prestige",
    tagline: "Building Trust, Building Brands",
  },
];

/* decorative shapes drawn inline */
function DecoShape({ type, color }) {
  if (type === "heart")
    return (
      <svg viewBox="0 0 64 64" width="48" height="48" fill={color}>
        <path d="M32 56S4 36 4 20a14 14 0 0 1 28 0 14 14 0 0 1 28 0C60 36 32 56 32 56z" />
      </svg>
    );
  if (type === "star")
    return (
      <svg viewBox="0 0 64 64" width="44" height="44" fill={color}>
        <path d="M32 2l8 20h20l-16 12 6 20-18-13-18 13 6-20L4 22h20z" />
      </svg>
    );
  if (type === "circle")
    return (
      <svg viewBox="0 0 64 64" width="40" height="40" fill="none" stroke={color} strokeWidth="4">
        <circle cx="32" cy="32" r="28" />
      </svg>
    );
  return (
    <svg viewBox="0 0 64 64" width="44" height="44" fill={color}>
      <rect x="8" y="8" width="48" height="48" rx="8" />
    </svg>
  );
}

const decoTypes = ["heart", "star", "circle", "rect"];

export default function OurWorkSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="ourwork-section">
      <div className="site-container">
        {/* ── Header ── */}
        <div className="ourwork-header">
          <h1 className="ourwork-heading">
            Our Brand
            <br />
            Raids
          </h1>
          <p className="ourwork-intro">
            The Mafias love to talk about their conquests over a freshly brewed
            pitcher of beer. Client satisfaction is significant to them, as they
            strive for nothing short of creative excellence. Here are a few smart
            goals that were set and smashed successfully.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="ourwork-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`ourwork-tab${activeCategory === cat ? " active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Project Grid ── */}
        <div className="ourwork-grid">
          {filteredProjects.map((project, idx) => (
            <a
              key={project.id}
              href="#"
              className="ourwork-card"
              style={{ "--card-bg": project.bg, "--card-accent": project.accent }}
            >
              {/* decorative background shape */}
              <div className="card-deco">
                <DecoShape
                  type={decoTypes[idx % decoTypes.length]}
                  color={project.accent}
                />
              </div>

              {/* client logo placeholder */}
              <span className="card-logo">{project.logo}</span>

              {/* main visual area */}
              <div className="card-visual">
                <span className="card-tagline">{project.tagline}</span>
              </div>

              {/* hover overlay */}
              <div className="card-overlay">
                <span className="card-overlay-title">{project.title}</span>
                <span className="card-overlay-client">{project.client}</span>
                <span className="card-overlay-cat">{project.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
