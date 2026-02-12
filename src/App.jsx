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

        

        <Footer />
      </main>
    </div>
  );
}

