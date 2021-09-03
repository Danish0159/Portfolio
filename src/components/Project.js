import React from 'react'

function Project({ imgSrc, name }) {

    return (
        <div class="project">
            <div class="project__imgdiv">
                <img class="project__img" src={imgSrc} alt="" />
            </div>
            <div class="projectC">
                <h3 class="projectC__title">{name}</h3>
                <div class="projectC__skills">
                    <p>A browser version of “Wheel of Success”, Where players will click letters from an
                        onscreen keyboard to try to guess a random phrase.
                        <strong>JavaScript</strong>
                    </p>
                </div>
                <div class="projectC__btn">
                    <a href="https://danish-wheel-of-success.netlify.app/" class="btn-small btn-project" target="_blank">
                        See Live
                    </a>
                    <a href="https://github.com/Danish0159/Game_Show_App" class="btn-small btn-project" target="_blank">
                        See Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project


