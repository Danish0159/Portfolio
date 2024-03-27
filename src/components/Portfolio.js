import React from "react";
import Project from "./Project";
import mahnty from "../assets/images/Project images/join1.jpg";
import zan from "../assets/images/Project images/zan2.jpeg";
import boiler from "../assets/images/Project images/boiler.jpg";


function Portfolio() {
  return (
    <section className="portfolio-section section" id="Portfolio">
      <h2 className="portfolio-section__title">Portfolio</h2>
      <div className="portfolio-grid">
        <Project
          key={1}
          url="https://mahnty.com/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/i5cu0xahi5"
          imgSrc={mahnty}
          name="MAHNTY"
          description="Developed 55+ Screens using HTML, CSS/MUI, ReactJS, Developed and Integrated 27+ Node API's for construction specialist platform, Managed state using reduxjs/toolkit."
        >
          He wants you to make a white label solution. A site that can be esily
          replicateable etc.
        </Project>
        <Project
          key={2}
          url="https://www.zanmedia.net/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/nn4vgm9hcn"
          imgSrc={zan}
          name="ZAN MEDIA"
          description="Developed a dynamic website and funnel for a leading Social Media Marketing (SMM) Agency. Helped the company increase revenue by having an online presence. Made using HTML, CSS, JavaScript."
        // description="Build the SMM Agency site and funnel. Helped the company increase revenue by having an online presence. Managed content, hosting and DNS. Made using HTML, CSS, JavaScript"
        ></Project>
        <Project
          key={3}
          url="https://clientbookingbea.netlify.app/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/e3iynhvdk0"
          imgSrc="https://images.unsplash.com/photo-1608370617993-a5c9ee904646?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="Indus Guides Pvt."
          description="
          Developed booking platform akin to the functionality of booking.com for a local company,
          Implemented  Multiple Hotels, Rooms, Users API's for platform.          
          Made using MERN Stack.
             "
        ></Project>
        <Project
          key={7}
          url="https://londonboilerservices.com/"
          githubUrl="https://londonboilerservices.com/"
          imgSrc={boiler}
          name="LONDON BOILER SERVICES"
          description="Developed a white label solution for a business, A site that can be easily replicable for different cities of United Kingdom. Developed different versions for different cities."
        ></Project>

        <Project
          key={4}
          url="https://smarthomesafe1.netlify.app/"
          githubUrl="https://danish01132.wistia.com/medias/p2lgvxfloh"
          // imgSrc={ts}
          imgSrc="https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          name="SMART HOME SAFE"
          description="Worked with a team as a Front Developer, added auth0, collected data through forms, added widgets and screens in Gatsby. Made using HTML, CSS and Gatsby/React."
        ></Project>
      </div>
    </section>
  );
}
export default Portfolio;
