import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <section className="awards-strip" id="awards">
          <div className="site-container">
            <h3 style={{fontWeight:800, marginBottom: '1rem'}}>Awards & Recognition</h3>
            <div style={{display:'flex',gap:24,overflowX:'auto', paddingBottom:8}}>
              {/* Simple award cards to approximate screenshot */}
              {[1,2,3,4,5].map((n)=>(
                <div key={n} style={{minWidth:160, padding:16, border:'1px solid rgba(0,0,0,0.04)', borderRadius:8}}>
                  <div style={{fontWeight:700}}>Abby 23, GOLD</div>
                  <div style={{fontSize:12, color:'#666'}}>Guardians of the heart</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="footer-yellow">
          <div className="site-container" style={{display:'flex', gap:24, alignItems:'flex-start', justifyContent:'space-between'}}>
            <div style={{maxWidth:420}}>
              <h4 style={{margin:0, fontWeight:800}}>Congratulations</h4>
              <p style={{marginTop:8, color:'#222'}}>Social Panga is an integrated social media and digital marketing agency in Bangalore, Mumbai, Delhi, and Dubai.</p>
            </div>
            <div>
              <ul style={{listStyle:'none', padding:0, margin:0}}>
                <li><strong>About Us</strong></li>
                <li>Services</li>
                <li>Our Work</li>
              </ul>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

