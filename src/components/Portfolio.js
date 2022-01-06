import React from 'react'
import Project from './Project'
// import eco from "../assets/images/Project images/econimicoo.jpeg"
// import omnifood from "../assets/images/Project images/omnifood.jpg"
import hotelelite from "../assets/images/Project images/hotelelite.jpg"
import zan1 from "../assets/images/Project images/zan1.jpg"
import backroads from "../assets/images/Project images/backroads.jpeg"
import boiler from "../assets/images/Project images/boiler.jpg"
import movie from "../assets/images/Project images/movie.jpg"
import home from "../assets/images/Project images/home1.jpg"

function Portfolio() {
    return (
        <section className="portfolio-section section" id="Portfolio">
            <h2 className="portfolio-section__title">Portfolio</h2>
            {/* 
Here Create a select menu with two options
1-  Professional Sites. 
*/}
            {/* 1-  Professional Sites. */}
            <div className="portfolio-grid">
                <Project
                    key={5}
                    url="https://www.zanmedia.net/"
                    githubUrl="https://github.com/Danish0159/zanmedia"
                    imgSrc={zan1}
                    name="ZAN MEDIA"
                    description="Build the company website and funnel. Helped the company increase revenue by having an online presence. Managed content, hosting and DNS. Made using HTML, CSS, JavaScript"
                >
                </Project>

                <Project
                    key={2}
                    url="https://local.londonboilerservices.com/"
                    githubUrl="https://github.com/Danish0159/lbs-v2"
                    imgSrc={boiler}
                    name="LONDON BOILER"
                    description="Developed a white label solution for a business, A site that can be easily replicable for different cities. Developed different versions for different cities, Made using Bootstrap and JavaScript."
                >
                </Project>

                <Project
                    key={1}
                    url="https://smarthomesafe1.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Smart-Home-Safe"
                    imgSrc={home}
                    name="SMART HOME SAFE"
                    description="Worked with a team as a Front Developer, added auth0, collected data through forms, added chat, cookies and calendly widgets. Made using HTML, CSS and Gatsby/React."
                >
                </Project>
                <Project
                    key={2}
                    url="https://moviecloud1.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Movie-Cloud"
                    imgSrc={movie}
                    name="MOVIE CLOUD"
                    description="Browse your favourite movies on movie cloud, spot there tagline, box office, original release etc. Made using React and Tmdb api."
                >

                    He wants you to make a white label solution.
                    A site that can be esily replicateable etc.
                </Project>

                {/* Blog Project */}
                <Project
                    key={6}
                    url="https://hotel-elite.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Hotel-Elite"
                    imgSrc={hotelelite}
                    name="HOTEL ELITE"
                    description="Hotel elite front end part of a fictional hotel with rental, tours and flight options. Made using HTML, SASS, FLEXBOX etc"
                >
                </Project>

                {/* Some Unique Project */}
                <Project
                    key={4}
                    url="https://backroadss.netlify.app/"
                    githubUrl="https://github.com/Danish0159/Back-Roads"
                    imgSrc={backroads}
                    name="BACKROADS"
                    description="Stay up to date with the latest info about trips with space available. Made using HTML, SASS, JavaScript etc"
                >
                </Project>
            </div>
        </section>
    )
}
export default Portfolio