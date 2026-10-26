
"use client";

import "./globals.css";

export default function Home() {
  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">BOLINAO</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#activities">Activities</a>
          <a href="#gallery">Gallery</a>
          <a href="#location">Location</a>
        </div>

        <a href="#location" className="nav-button">
          PLAN A TRIP
        </a>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <div className="hero-label">
            <span></span>
            PANGASINAN, PHILIPPINES
          </div>

          <h1>BOLINAO</h1>

          <p className="hero-subtitle">
            COASTAL BEAUTY
            <br />
            NATURAL WONDERS
          </p>

          <div className="hero-description">
            <p>
              Where dramatic coastlines, refreshing waterfalls,
              limestone landscapes, and quiet beaches come together.
            </p>

            <a href="#about" className="hero-button">
              EXPLORE BOLINAO
              <span>↓</span>
            </a>
          </div>
        </div>

        <div className="hero-side-text">DISCOVER THE COAST</div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about section">
        <div className="section-number">01</div>

        <div className="about-title">
          <p className="small-title">ABOUT THE DESTINATION</p>

          <h2>
            A place shaped
            <br />
            by <em>sea &amp; stone.</em>
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-content">
            <p className="lead">
              Bolinao is one of Pangasinan&apos;s most captivating
              coastal destinations, filled with natural beauty
              and unforgettable landscapes.
            </p>

            <p>
              From its beautiful beaches and dramatic limestone
              formations to its refreshing waterfalls and
              historic landmarks, Bolinao offers a variety of
              experiences for every kind of traveler.
            </p>

            <p>
              Whether you&apos;re looking for adventure, relaxation,
              photography, or a peaceful escape, the town&apos;s
              natural scenery provides plenty of opportunities
              to explore.
            </p>

            <a href="#activities" className="text-button">
              DISCOVER EXPERIENCES
              <span>→</span>
            </a>
          </div>

          <div className="about-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv2y67oJZlXbMWMGtp-gu9nlNbIpWDBZBZN-3G7bbwPg&s=10"
              alt="Beautiful beach in Bolinao"
            />

            <div className="image-caption">
              <span>01</span>
              BOLINAO COASTLINE
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITIES */}
      <section id="activities" className="activities section">
        <div className="activities-header">
          <div>
            <p className="small-title">02 — EXPERIENCES</p>

            <h2>
              Find your
              <br />
              <em>own adventure.</em>
            </h2>
          </div>

          <p>
            Explore beaches, waterfalls, landscapes, and
            other natural attractions around Bolinao.
          </p>
        </div>

        <div className="cards">
          {/* CARD 1 */}
          <article className="card">
            <div className="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomt1gAfBHvg5CX4ck2Lb0uQWlFfYwiISEcG9e7SvG7g&s=10"
                alt="Bolinao beach"
              />

              <span>01</span>
            </div>

            <div className="card-content">
              <p className="card-label">COASTAL ESCAPE</p>

              <h3>Beach Adventure</h3>

              <p>
                Feel the sea breeze, enjoy the coastline,
                and relax beside the beautiful waters of Bolinao.
              </p>

              <a href="#gallery">
                EXPLORE
                <span>→</span>
              </a>
            </div>
          </article>

          {/* CARD 2 */}
          <article className="card card-middle">
            <div className="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjKJO5peb4kPJI4yz5LqB_ueAZxBsKigw2KhwO4aP5tg&s=10"
                alt="Waterfall in Bolinao"
              />

              <span>02</span>
            </div>

            <div className="card-content">
              <p className="card-label">NATURAL RETREAT</p>

              <h3>Waterfall Escape</h3>

              <p>
                Discover refreshing waterfalls surrounded
                by greenery and peaceful natural scenery.
              </p>

              <a href="#gallery">
                DISCOVER
                <span>→</span>
              </a>
            </div>
          </article>

          {/* CARD 3 */}
          <article className="card">
            <div className="card-image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKJMO1JtrMZI4bdR22G4IhgScfMRN7UAqSAxL0r6ThWw&s=10"
                alt="Bolinao landscape"
              />

              <span>03</span>
            </div>

            <div className="card-content">
              <p className="card-label">SCENIC JOURNEY</p>

              <h3>Nature Exploration</h3>

              <p>
                Take in the scenery, explore natural formations,
                and discover the landscapes around Bolinao.
              </p>

              <a href="#location">
                PLAN YOUR VISIT
                <span>→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="gallery section">
        <div className="gallery-top">
          <div>
            <p className="small-title">03 — VISUAL JOURNEY</p>

            <h2>
              See Bolinao
              <br />
              <em>through our eyes.</em>
            </h2>
          </div>

          <p>
            From the shoreline to the forest, every corner
            tells a story of nature and discovery.
          </p>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item gallery-large">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8R29Rw1HJ7zUXpIH9zlBO1-6Fi-QGjGMSv890RVotyA&s=10"
              alt="Bolinao beach"
            />

            <div className="gallery-overlay">BEACH</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKWEnFHZV35Idkv2S463_c_Dvurynpq0-cfsPu_XN1Pw&s=10"
              alt="Bolinao waterfall"
            />

            <div className="gallery-overlay">WATERFALL</div>
          </div>

          <div className="gallery-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4EjvAf7T9jjFFS271P63n2w5cV-uwo1Et0iuroavdGg&s=10"
              alt="Bolinao nature"
            />

            <div className="gallery-overlay">LANDSCAPE</div>
          </div>

          <div className="gallery-item gallery-wide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXf4KoDitRNwZ0E8koGJRH03NGSkCDLdS0RO4IqONoYQ&s=10"
              alt="Bolinao tropical coast"
            />

            <div className="gallery-overlay">COASTLINE</div>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="location section">
        <div className="location-background"></div>

        <div className="location-content">
          <p className="small-title">04 — PLAN YOUR TRIP</p>

          <h2>
            Bolinao is
            <br />
            <em>waiting for you.</em>
          </h2>

          <p className="location-description">
            Pack your bags and discover the beaches, waterfalls,
            natural landscapes, and unforgettable experiences
            waiting in Bolinao, Pangasinan.
          </p>

          <div className="location-details">
            <div className="detail">
              <span>DESTINATION</span>
              <strong>Bolinao</strong>
            </div>

            <div className="detail">
              <span>PROVINCE</span>
              <strong>Pangasinan</strong>
            </div>

            <div className="detail">
              <span>COUNTRY</span>
              <strong>Philippines</strong>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/Bolinao+Pangasinan"
            target="_blank"
            rel="noopener noreferrer"
            className="location-button"
          >
            OPEN GOOGLE MAPS
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-top">
          <div className="footer-logo">BOLINAO</div>

          <p>
            Explore the coast.
            <br />
            Discover something beautiful.
          </p>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Bolinao Tourism</span>

          <div className="footer-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#gallery">GALLERY</a>
            <a href="#location">LOCATION</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
