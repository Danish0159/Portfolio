import React from 'react'
import Project from './Project'
import eco from "../assets/images/Project images/econimicoo.jpeg"
import hotelelite from "../assets/images/Project images/hotelelite.jpg"
import zan1 from "../assets/images/Project images/zan1.jpg"
import backroads from "../assets/images/Project images/backroads.jpeg"
import omnifood from "../assets/images/Project images/omnifood.jpg"
import movie from "../assets/images/Project images/movie.jpg"
import home from "../assets/images/Project images/home1.jpg"



function Portfolio() {
    return (
        <section className="portfolio-section section" id="portfolio">
            <h2 className="portfolio-section__title">Portfolio</h2>
            <div className="portfolio-grid">

                <Project
                    key={1}
                    url="https://smarthomesafe.netlify.app/"
                    githubUrl="https://smarthomesafe.netlify.app/"
                    imgSrc={home}
                    name="SMART HOME SAFE"
                    description="Worked with a team, added auth0, collected data through forms, converted html to gatsby, added chat and calendly widgets. Made using Gatsby/React."
                >
                </Project>
                <Project
                    key={2}
                    url="https://moviecloud1.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Movie-Cloud"
                    imgSrc={movie}
                    name="MOVIE CLOUD"
                    description="Browse your favourite movies on movie cloud, spot there tagline, box office, original release etc. Made using React JS and Tmdb api."
                >
                </Project>
                <Project
                    key={5}
                    url="https://www.zanmedia.net/"
                    githubUrl="https://github.com/Danish0159/zanmedia"
                    imgSrc={zan1}
                    name="ZAN MEDIA"
                    description="Marketing Agency who drives traffic to businesses by designing the instagram templates. Made using HTML, SASS, JavaScript etc"
                >
                </Project>
                <Project
                    key={4}
                    url="https://backroadss.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Back-Roads"
                    imgSrc={backroads}
                    name="BACKROADS"
                    description="Stay up to date with the latest info about trips with space available. Made using HTML, SASS, JavaScript etc"
                >
                </Project>
                <Project
                    key={6}
                    url="https://hotel-elite.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Hotel-Elite"
                    imgSrc={hotelelite}
                    name="HOTEL ELITE"
                    description="Hotel elite front end part of a fictional hotel with rental, tours and flight options. Made using HTML, SASS, FLEXBOX etc"
                >
                </Project>
                <Project
                    key={3}
                    url="https://danish-dinarestaurant.netlify.app/"
                    githubUrl="https://github.com/Danish0159/DINA-Restaurant"
                    imgSrc={omnifood}
                    name="DINA RESTAURANT"
                    description="Fully featured restaurant website with gallery, testimonills, features and form validation. Made using HTML, SASS, JavaScript etc"
                >
                </Project>
            </div>
        </section>
    )
}

export default Portfolio
