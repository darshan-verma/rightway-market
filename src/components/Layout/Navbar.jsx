import React, { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";

  const navLinks = [
    { href: "/", label: "ABOUT US" },
    { href: "/services", label: "SERVICES" },
    { href: "/our-work", label: "OUR WORK" },
    { href: "/#awards", label: "AWARDS" },
    { href: "/#clients", label: "CLIENTS" },
    { href: "/our-team", label: "OUR TEAM" },
    { href: "/careers", label: "CAREERS" },
    { href: "/contact-us", label: "CONTACT US" },
  ];

  const isActive = (href) => {
    if (href.startsWith("/#")) return false;
    return currentPath === href;
  };

  return (
    <header className="site-header">
      <div className="site-container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <a href="/" className="font-extrabold text-lg" style={{letterSpacing: '-0.02em', textDecoration: 'none', color: '#000'}}>
            social<span style={{fontWeight: 900}}>panga</span>
          </a>
          <nav className="hidden md:flex gap-5 text-xs text-gray-700" style={{fontWeight: 600, letterSpacing: '0.04em'}}>
            {navLinks.map((link) => (
              <a
                key={link.href}
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
            ))}
          </nav>
        </div>

        {/* Panga mascot / icon */}
        <div className="hidden md:flex items-center gap-3">
          <span style={{ fontSize: 24 }} aria-hidden="true">🔥</span>
        </div>

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

