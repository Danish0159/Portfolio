import React from "react";

function About() {
  return (
    <section className="about-container section" id="About">
      <div className="about">
        <h2 style={{ textTransform: "lowercase" }} className="about__title">
          {" "}
          Hi there
        </h2>
        <p className="about__study">
          Hey! Are you looking for a Web developer, React developer or
          JavaScript Developer?
        </p>
        <p className="about__study">
          I’m Danish, I'm a passionate Developer using web technologies to build
          amazing products and working to make your development faster, reliable
          and efficient.
        </p>
        <p className="about__description">
          I’m always down for hearing about new projects, so feel free to drop
          me a line.
        </p>
      </div>
    </section>
  );
}

export default About;
