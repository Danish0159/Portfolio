import React from 'react'
import hero from "../assets/images/illiatration 1.png"
import big from "../assets/images/smill.png"
import ellipse1 from "../assets/images/Ellipse 7.png"
import ellipse2 from "../assets/images/Ellipse 8.png"



function Hero() {
    return (
        <>
            <section class="hero section">
                <div class="hero__grid">
                    <div class="hero__content">
                        <p class="hero__name"><span className="hero__name-first">MUHAMMAD</span>  DANISH</p>
                        <h1 class="hero__tagline">Let your   <br></br> brand talk.</h1>
                        <p class="hero__dev">BY BRINGING THE ART TO THE CART.</p>

                        <a class="btn-project btn-small btn-hero" href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b"
                            target="_blank">Get
                            Started</a>
                    </div>
                    <figure class="hero__imgContainer">
                        <img class="hero__img1" src={ellipse1} alt="Motivatation IMG" />
                        <img class="hero__img2" src={big} alt="Motivatation IMG" />
                        <img class="hero__img3" src={ellipse2} alt="Motivatation IMG" />
                    </figure>
                </div>
            </section>
            <div className="hero__img-section">
                <figure>
                    <img class="hero__img" src={hero} alt="Lets talk" />
                </figure>
            </div>
        </>
    )
}

export default Hero
