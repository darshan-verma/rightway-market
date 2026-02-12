import React from "react";

export default function Footer() {
  return (
    <footer className="footer-yellow">
      <div className="site-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div style={{ maxWidth: 420 }}>
          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 96,
                height: 140,
                background: "#fff",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  background: "#ff3b30",
                  color: "#fff",
                  padding: "6px 8px",
                  borderRadius: 999,
                  fontWeight: 800,
                  fontSize: 12,
                }}
              >
                Say Hi!
              </div>
              <div style={{ width: 56, height: 90, background: "#f6f6f6", borderRadius: 6 }} />
            </div>

            <div>
              <h4 style={{ margin: 0, fontWeight: 800 }}>Congratulations for traveling from start to the end of this page!</h4>
              <p style={{ marginTop: 8, color: "#222" }}>
                We'll add 10,000 steps to your fitness tracker!
              </p>
            </div>
          </div>
        </div>

        <nav className="hidden sm:block">
          <div className="grid grid-cols-2 gap-6">
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="font-bold mb-2">About Us</li>
              <li>Services</li>
              <li>Our Work</li>
              <li>Clients</li>
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              <li className="font-bold mb-2">Awards</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </nav>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 12, marginBottom: 12 }}>
            <a href="#" aria-label="Instagram" style={{ width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: 6 }}>IG</a>
            <a href="#" aria-label="Twitter" style={{ width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: 6 }}>X</a>
            <a href="#" aria-label="Facebook" style={{ width: 36, height: 36, display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", borderRadius: 6 }}>f</a>
          </div>

          <div style={{ textAlign: "right", maxWidth: 260 }}>
            <p style={{ margin: 0, fontWeight: 700 }}>Social Panga</p>
            <p style={{ marginTop: 6, color: "#222", fontSize: 13 }}>
              An award winning full stack digital marketing agency in India offering creative and innovative solutions for brands looking to grow their businesses online.
            </p>
          </div>
        </div>
      </div>

      <div className="site-container" style={{ marginTop: 18 }}>
        <p style={{ margin: 0, fontSize: 13, color: "#222" }}>
          If you are reading this, then you're on the right site to onboard one of the best creative marketing agencies in India.
        </p>
      </div>
    </footer>
  );
}

