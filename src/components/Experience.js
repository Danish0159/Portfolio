import React from 'react'
import hero from "../assets/images/illistration 2.png"
import html from "../assets/images/skill logos/html.png"
import css from "../assets/images/skill logos/css.png"
import js from "../assets/images/skill logos/js.png"
import react from "../assets/images/skill logos/react.svg"
import git from "../assets/images/skill logos/git.png"
import gatsby from "../assets/images/skill logos/gatsby.svg"
import bootstrap from "../assets/images/skill logos/bootstrap-logo.svg"
import sass from "../assets/images/skill logos/sass.png"
import xd from "../assets/images/skill logos/xd.png"
import ps from "../assets/images/skill logos/ps.png"
import linux from "../assets/images/skill logos/linux.svg"
import wp from "../assets/images/skill logos/wp.png"



function Experience() {
    return (
        <>
            <section class="experience-container section">

                <div className="experience">
                    <h2 class="experience__title">Experience With</h2>
                    <div className="experience__img-container">
                        <figure>
                            <img class="experience__img" src={hero} alt="Lets talk" />
                        </figure>
                    </div>
                    <div class="skills">
                        <img class="skills__item" src={html} alt="HTML LOGO" />
                        <img class="skills__item" src={css} alt="CSS LOGO" />
                        <img class="skills__item" src={js} alt="JavaScript LOGO" />
                        <img class="skills__item" src={react} alt="JavaScript LOGO" />
                        <img class="skills__item" src={gatsby} alt="JavaScript LOGO" />
                        <img class="skills__item" src={sass} alt="JavaScript LOGO" />
                        {/* <img class="skills__item" src={sass} alt="JavaScript LOGO" /> */}
                        <img class="skills__item" id="bootstrap__icon" src={bootstrap} alt="JavaScript LOGO" />
                        <img class="skills__item" src={linux} alt="JavaScript LOGO" />
                        <img class="skills__item" src={git} alt="JavaScript LOGO" />
                        <img class="skills__item" src={xd} alt="JavaScript LOGO" />
                        <img class="skills__item" src={wp} alt="JavaScript LOGO" />
                        <img class="skills__item" src={ps} alt="JavaScript LOGO" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Experience
