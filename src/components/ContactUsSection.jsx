import React, { useState } from "react";

export default function ContactUsSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setForm({ name: "", email: "", phone: "", location: "", message: "" });
  };

  return (
    <section className="contactus-section" aria-label="Contact Us">
      {/* Map background */}
      <div className="contactus-map-bg">
        <iframe
          title="Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.585721366428!2d77.6309395!3d12.9352273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145997b0c9a1%3A0xa05cc1a3cba2cf08!2sSocial%20Panga!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Content overlay */}
      <div className="contactus-overlay">
        <div className="site-container contactus-inner">
          {/* Left: address + form */}
          <div className="contactus-form-panel">
            <div className="contactus-form-header">
              <h1 className="contactus-title">
                Aapke Ek Ek Sawal
                <br />
                Humaare Do Do Jawab
              </h1>
              <p className="contactus-company">Hija Digital Pvt. Ltd.</p>
              <p className="contactus-desc">
                One of the leading digital marketing agency in Bangalore. Write to us about any doubts. We would be glad to discuss your business targets and how we can achieve them. If you are looking for a digital marketing services in Bangalore, call us or mail us.
              </p>
            </div>

            <form className="contactus-form" onSubmit={handleSubmit}>
              <div className="contactus-form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="contactus-input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="contactus-input"
                />
              </div>
              <div className="contactus-form-row">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number*"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  className="contactus-input"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  value={form.location}
                  onChange={handleChange}
                  className="contactus-input"
                />
              </div>
              <div className="contactus-form-row contactus-form-row--full">
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="contactus-textarea"
                />
                <button type="submit" className="contactus-send-btn" aria-label="Send message">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="contactus-emails">
              <div className="contactus-email-block">
                <strong>Business Enquiries</strong>
                <a href="mailto:hello@socialpanga.com">hello@socialpanga.com</a>
              </div>
              <div className="contactus-email-block">
                <strong>Career Opportunities</strong>
                <a href="mailto:coffee@socialpanga.com">coffee@socialpanga.com</a>
              </div>
            </div>
          </div>

          {/* Right: map info card */}
          <div className="contactus-map-card">
            <div className="contactus-address-card">
              <p>
                <strong>No 5, 102 ft. Road, 7th A Main Road, 2nd & 3rd floor, above Nature's Basket, 5th Block,
                Koramangala, Bengaluru, Karnataka 560095</strong>
              </p>
            </div>
            <div className="contactus-city-markers">
              <span className="city-marker">BLR</span>
              <span className="city-marker">BOM</span>
              <span className="city-marker">DEL</span>
              <span className="city-marker">Dubai</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
