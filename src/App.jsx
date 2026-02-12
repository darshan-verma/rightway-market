import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import InfoCards from "./components/InfoCards";
import AwardsSection from "./components/AwardsSection";
import OurWorkSection from "./components/OurWorkSection";
import OurTeamSection from "./components/OurTeamSection";
import ContactUsSection from "./components/ContactUsSection";
import AboutUsSection from "./components/AboutUsSection";
import Footer from "./components/Footer";

export default function App() {
  const path = typeof window !== "undefined" ? window.location.pathname : "/";

  const isServicesPage = path === "/services";
  const isOurWorkPage = path === "/our-work";
  const isOurTeamPage = path === "/our-team";
  const isContactUsPage = path === "/contact-us";
  const isAboutUsPage = path === "/about-us";

  const renderPage = () => {
    if (isAboutUsPage) {
      return (
        <>
          <AboutUsSection />
          <Footer />
        </>
      );
    }
    if (isOurTeamPage) {
      return (
        <>
          <OurTeamSection />
          <Footer />
        </>
      );
    }
    if (isContactUsPage) {
      return (
        <>
          <ContactUsSection />
          <Footer />
        </>
      );
    }
    if (isOurWorkPage) {
      return (
        <>
          <OurWorkSection />
          <Footer />
        </>
      );
    }
    if (isServicesPage) {
      return (
        <>
          <ServicesSection />
          <Footer />
        </>
      );
    }
    return (
      <>
        <Hero />
        <ShowcaseSection />
        <InfoCards />
        <AwardsSection />
        <Footer />
      </>
    );
  };

  return (
    <div className="min-h-screen text-gray-900">
      <Navbar />
      <main>{renderPage()}</main>
    </div>
  );
}

