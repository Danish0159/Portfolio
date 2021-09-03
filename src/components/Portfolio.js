import React from 'react'
import Project from './Project'
import eco from "../assets/images/Project images/econimicoo.jpeg"



function Portfolio() {
    return (
        <section class="portfolio-section section" id="portfolio">
            <h2 class="portfolio-section__title">Portfolio</h2>
            <div class="portfolio-grid">
                <Project imgSrc={eco} name="ECONOMICO"></Project>
                <Project imgSrc={eco} name="ZAN MEDIA"></Project>
                <Project imgSrc={eco} name="ECONOMICO"></Project>
                <Project imgSrc={eco} name="ZAN MEDIA"></Project>
                <Project imgSrc={eco} name="ECONOMICO"></Project>
                <Project imgSrc={eco} name="ZAN MEDIA"></Project>
            </div>
        </section>
    )
}

export default Portfolio
