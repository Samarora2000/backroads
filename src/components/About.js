import React from "react";
import Title from "./Title";
function About() {
  return (
    <div>
      <section className="section" id="about">
        <Title title="about " subtitle="us" />

        <div className="section-center about-center">
          <div className="about-img">
            <img
              src="/images/about.jpeg"
              className="about-photo"
              alt="about"
            />
          </div>
          <article className="about-info">
            <h3>explore the differnce</h3>
            <p>
              “Travel is the main thing you purchase that makes you more
              extravagant”. We, at ‘BackRoad’, swear by this and put stock in
              satisfying travel dreams that make you perpetually rich
              constantly. We have been moving excellent encounters for a
              considerable length of time through our cutting-edge planned
              occasion bundles and other fundamental travel administrations. We
              rouse our clients to carry on with a rich life, brimming with
              extraordinary travel encounters.
            </p>
            <p>
              Through our exceptionally curated occasion bundles, we need to
              take you on an adventure where you personally enjoy the stunning
              magnificence of America and far-off terrains. We need you to
              observe sensational scenes that are a long way past your creative
              ability.
            </p>
            <a href="#about" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

export default About;
