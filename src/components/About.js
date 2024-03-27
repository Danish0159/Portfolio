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
          Seeking a Full Stack Developer adept at resolving business-related tech challenges?
        </p>
        <p className="about__study">
          Experienced Full-Stack Developer focused on Web technologies HTML, CSS, JavaScript,
          React, Next, Node, Express, Redux-toolkit, Typescript. I appreciate clear and detailed documentation.
          {/* I’m Danish, I'm a passionate Developer using web technologies to build
          amazing products and working to make your development faster, reliable
          and efficient. */}
        </p>
        <p className="about__description">
          Open to discussing new projects—feel free to reach out anytime.
        </p>
      </div>
    </section>
  );
}

export default About;
