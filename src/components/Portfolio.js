import React from 'react'
import Project from './Project'
import zan1 from "../assets/images/Project images/zan1.jpg"
import maqawal from "../assets/images/Project images/maqawal.jpg"
import boiler from "../assets/images/Project images/boiler.jpg"
import home from "../assets/images/Project images/home1.jpg"

function Portfolio() {
    return (
        <section className="portfolio-section section" id="Portfolio">
            <h2 className="portfolio-section__title">Portfolio</h2>
            <div className="portfolio-grid">
                <Project
                    key={1}
                    url="https://maqawal.com/"
                    githubUrl="https://github.com/Danish0159/SPP"
                    imgSrc={maqawal}
                    name="MAQAWAL"
                    description="Build 50+ Screens using HTML, Styled Components, React JS, and Material UI, Integrated 24+ Node Backend API's for service providing platform, Managed state using reduxjs/toolkit."
                >
                    He wants you to make a white label solution.
                    A site that can be esily replicateable etc.
                </Project>
                <Project
                    key={2}
                    url="https://www.zanmedia.net/"
                    githubUrl="https://github.com/Danish0159/zanmedia"
                    imgSrc={zan1}
                    name="ZAN MEDIA"
                    description="Build the company website and funnel. Helped the company increase revenue by having an online presence. Managed content, hosting and DNS. Made using HTML, CSS, JavaScript"
                >
                </Project>
                <Project
                    key={3}
                    url="https://local.londonboilerservices.com/"
                    githubUrl="https://github.com/Danish0159/lbs-v2"
                    imgSrc={boiler}
                    name="LONDON BOILER"
                    description="Developed a white label solution for a business, A site that can be easily replicable for different cities. Developed different versions for different cities, Made using Bootstrap and JavaScript."
                >
                </Project>
                <Project
                    key={4}
                    url="https://smarthomesafe1.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Smart-Home-Safe"
                    imgSrc={home}
                    name="SMART HOME SAFE"
                    description="Worked with a team as a Front Developer, added auth0, collected data through forms, added chat, cookies and calendly widgets. Made using HTML, CSS and Gatsby/React."
                >
                </Project>
            </div>
        </section>
    )
}
export default Portfolio