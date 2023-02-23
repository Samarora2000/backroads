import React from "react";

function Hero() {
  return (
    <div>
      <section className="hero" id="home">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Life-changing travel must also be sustainable travel. By bringing
            together a growing community of people committed to traveling
            thoughtfully and considerately, we help shape the adventure and
            eco-tourism industry as it grows.
          </p>
          <a
            href="#tours"
            rel="noreferrer"
            target="_blank"
            className="btn hero-btn"
          >
            explore tours
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;
