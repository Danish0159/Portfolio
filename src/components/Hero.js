import React from "react";
import hero from "../assets/images/illiatration 1.png";
import big from "../assets/images/smill.png";
import ellipse1 from "../assets/images/Ellipse 7.png";
import ellipse2 from "../assets/images/Ellipse 8.png";

function Hero() {
  return (
    <>
      <section className="hero section">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__name">
              <span className="hero__name-first">MUHAMMAD</span> DANISH
            </p>
            <h1 className="hero__tagline">
              INSPRING <br></br> THE WORLD
            </h1>
            <p className="hero__dev">AS A SOFTWARE ENGINEER</p>
            <a
              href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b"
              target="_blank"
              rel="noopener"
            >
              <button className="content__btn content__btn--hero btn">
                Get Started
              </button>
            </a>
          </div>
          <figure className="hero__imgContainer">
            <img className="hero__img1" src={ellipse1} alt="Motivatation IMG" />
            <img className="hero__img2" src={big} alt="Motivatation IMG" />
            <img className="hero__img3" src={ellipse2} alt="Motivatation IMG" />
          </figure>
        </div>
      </section>

      <div className="hero__img-section">
        <figure>
          <img className="hero__img" src={hero} alt="Lets talk" />
        </figure>
      </div>
    </>
  );
}

export default Hero;
