import React from "react";

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="site-container flex items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <div className="font-extrabold text-lg" style={{letterSpacing: '-0.02em'}}>
            Social<span style={{color:'#000'}}>Panga</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-700">
            <a href="#about" className="hover:underline">ABOUT US</a>
            <a href="#services" className="hover:underline">SERVICES</a>
            <a href="#work" className="hover:underline">OUR WORK</a>
            <a href="#awards" className="hover:underline">AWARDS</a>
            <a href="#clients" className="hover:underline">CLIENTS</a>
          </nav>
        </div>
        <div className="hidden md:block">
          <a href="#contact" className="inline-block px-4 py-2 border rounded text-sm" style={{borderColor:'rgba(0,0,0,0.08)'}}>CONTACT US</a>
        </div>
      </div>
    </header>
  );
}

