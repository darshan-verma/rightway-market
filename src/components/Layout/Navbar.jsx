import React, { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const navLinks = [
    { href: "/about-us", label: "ABOUT US", icon: "/navbar images/about-icon.svg" },
    { href: "/services", label: "SERVICES", icon: "/navbar images/services-icon.svg" },
    { href: "/our-work", label: "OUR WORK", icon: "/navbar images/projects-icon.svg" },
    { href: "/our-team", label: "OUR TEAM", icon: "/navbar images/team-icon.svg" },
    { href: "/contact-us", label: "CONTACT US", icon: "/navbar images/contact-icon.svg" },
  ];

  const isActive = (href) => {
    if (href.startsWith("/#")) return false;
    return currentPath === href;
  };

  return (
    <header className="site-header">
      <div className="site-container navbar-inner">
        <a href="/" className="navbar-logo navbar-logo-text">
          Rightway Market
        </a>
        <nav className="navbar-links hidden md:flex">
          {navLinks.map((link) => (
            <div
              key={link.href}
              className="nav-link-wrap"
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {/* Icon that appears above the text */}
              <div className={`nav-icon-bubble${hoveredLink === link.href ? " show" : ""}`}>
                <img src={link.icon} alt="" className="nav-icon-img" />
              </div>
              <a
                href={link.href}
                className="nav-link-item"
                style={{
                  textDecoration: 'none',
                  color: isActive(link.href) ? '#111' : '#555',
                  fontWeight: isActive(link.href) ? 700 : 600,
                  borderBottom: isActive(link.href) ? '2px solid #111' : '2px solid transparent',
                  paddingBottom: 2,
                  transition: 'color 180ms ease, border-color 180ms ease',
                }}
              >
                {link.label}
              </a>
            </div>
          ))}
        </nav>
        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer' }}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)', padding: '16px 24px' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: isActive(link.href) ? '#111' : '#555',
                  fontWeight: isActive(link.href) ? 700 : 600,
                  fontSize: 13,
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

