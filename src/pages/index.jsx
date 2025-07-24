import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Head section replacement for Vite */}
      <head>
        <title>Welcome to Ujjain Yatra</title>
        <meta
          name="description"
          content="Plan your spiritual journey to Ujjain"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>

      {/* Header with Animation */}
      <header className={`header ${scrollPosition > 50 ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo">
            <span>🕉</span>
            <h1>Ujjain Yatra</h1>
          </div>

          <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#temples">Temples</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <button
            className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Ujjain Yatra</h1>
          <p className="hero-subtitle">Start Your Spiritual Journey</p>
          <div className="hero-buttons">
            <button className="primary-button">Book Now</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        {/* Temple Map Section */}
        <section className="section temple-map">
          <h2 className="section-title">Temple Map</h2>
          <div className="section-grid">
            <div className="card">
              <h3>Chat Rules</h3>
              <p>Guidelines for temple visits</p>
            </div>
            <div className="card">
              <h3>Book Ticket</h3>
              <p>Reserve your darshan</p>
            </div>
            <div className="card">
              <h3>Live Darshan</h3>
              <p>View online streaming</p>
            </div>
          </div>
        </section>

        {/* Notice Board Section */}
        <section className="section notice-board">
          <h2 className="section-title">Notice Board</h2>
          <div className="section-grid">
            <div className="card">
              <h3>Lost & Found</h3>
              <p>Report missing items</p>
            </div>
            <div className="card">
              <h3>Smart Parking</h3>
              <p>Find parking spaces</p>
            </div>
            <div className="card">
              <h3>Emergency Help</h3>
              <p>Immediate assistance</p>
            </div>
          </div>
        </section>

        {/* Notice Section */}
        <section className="section notice">
          <h2 className="section-title">Notice</h2>
          <div className="notice-content">
            <p>Starts...wrongguidini.com/photon-curious</p>
          </div>
        </section>
      </main>

      {/* Footer with Animation */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#temples">Temples</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: info@ujjainyatra.com</p>
            <p>Phone: +91 1234567890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#">
                <span>FB</span>
              </a>
              <a href="#">
                <span>TW</span>
              </a>
              <a href="#">
                <span>IG</span>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Ujjain Yatra. All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        /* Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Arial", sans-serif;
        }

        body {
          background-color: #f8f8f8;
          color: #333;
          line-height: 1.6;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        ul {
          list-style: none;
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.9);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background-color: rgba(255, 255, 255, 0.98);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          font-weight: bold;
          color: #4a2c82;
        }

        .logo span {
          font-size: 2rem;
        }

        .nav ul {
          display: flex;
          gap: 2rem;
        }

        .nav a {
          font-weight: 500;
          transition: color 0.3s ease;
          position: relative;
        }

        .nav a:hover {
          color: #4a2c82;
        }

        .nav a::after {
          content: "";
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #4a2c82;
          transition: width 0.3s ease;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
        }

        .menu-toggle span {
          display: block;
          width: 100%;
          height: 3px;
          background-color: #4a2c82;
          border-radius: 3px;
          transition: all 0.3s ease;
        }

        .menu-toggle.open span:nth-child(1) {
          transform: translateY(9px) rotate(45deg);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-9px) rotate(-45deg);
        }

        /* Hero Section */
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          background: url("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")
            no-repeat center center;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
          padding: 0 2rem;
          margin-top: 80px;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.7)
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          animation: fadeInUp 1s ease-out;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .primary-button,
        .secondary-button {
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .primary-button {
          background-color: #4a2c82;
          color: white;
          border: 2px solid #4a2c82;
        }

        .primary-button:hover {
          background-color: #3a2168;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .secondary-button {
          background-color: transparent;
          color: white;
          border: 2px solid white;
        }

        .secondary-button:hover {
          background-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        /* Main Content Sections */
        .main-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .section {
          margin-bottom: 4rem;
          animation: fadeIn 1s ease-out;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: #4a2c82;
          position: relative;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 80px;
          height: 4px;
          background: #4a2c82;
          margin: 10px auto;
          border-radius: 2px;
        }

        .section-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .card {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          text-align: center;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }

        .card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #4a2c82;
        }

        .card p {
          color: #666;
        }

        .notice-content {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-size: 1.2rem;
        }

        /* Footer Styles */
        .footer {
          background: #4a2c82;
          color: white;
          padding: 4rem 0 0;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-section h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          position: relative;
        }

        .footer-section h3::after {
          content: "";
          display: block;
          width: 50px;
          height: 3px;
          background: white;
          margin-top: 10px;
        }

        .footer-section ul li {
          margin-bottom: 0.8rem;
        }

        .footer-section ul li a:hover {
          color: #ddd;
        }

        .social-icons {
          display: flex;
          gap: 1rem;
        }

        .social-icons a {
          display: inline-block;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-icons a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }

        .footer-bottom {
          text-align: center;
          padding: 1.5rem;
          margin-top: 2rem;
          background: rgba(0, 0, 0, 0.1);
          font-size: 0.9rem;
        }

        /* Animations */
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .header-container {
            padding: 1rem;
          }

          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background: white;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: right 0.3s ease;
          }

          .nav.open {
            right: 0;
          }

          .nav ul {
            flex-direction: column;
            gap: 2rem;
          }

          .menu-toggle {
            display: flex;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 1rem;
          }

          .section-title {
            font-size: 2rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default HomePage;
