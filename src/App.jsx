import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import ShowcaseSection from "./components/ShowcaseSection";
import InfoCards from "./components/InfoCards";
import AwardsSection from "./components/AwardsSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ShowcaseSection />
        <InfoCards />
        <AwardsSection />

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

        <Footer />
      </main>
    </div>
  );
}

