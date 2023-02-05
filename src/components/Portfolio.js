import React from "react";
import Project from "./Project";
import zan1 from "../assets/images/Project images/zan1.jpg";
import maqawal from "../assets/images/Project images/maqawal.jpg";
import boiler from "../assets/images/Project images/boiler.jpg";
import home from "../assets/images/Project images/home1.jpg";
import booking from "../assets/images/Project images/BookingBea.jpg";

function Portfolio() {
  return (
    <section className="portfolio-section section" id="Portfolio">
      <h2 className="portfolio-section__title">Portfolio</h2>
      <div className="portfolio-grid">
        <Project
          key={1}
          url="https://mahnty.com/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/i5cu0xahi5"
          imgSrc={maqawal}
          name="MAHNTY"
          description="Build 50+ Screens using HTML, Styled Components, React JS, and Material UI, Integrated 24+ Node Backend API's for service providing platform, Managed state using reduxjs/toolkit."
        >
          He wants you to make a white label solution. A site that can be esily
          replicateable etc.
        </Project>
        <Project
          key={3}
          url="https://clientbookingbea.netlify.app/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/e3iynhvdk0"
          imgSrc={booking}
          name="BOOKING BEA"
          description="Working as a MERN Stack Developer, Built screens 
           for both clients and admin in React, implemented desired 
           searching and filtering,
           Developed Multiple API's for Hotels, Rooms, Users."
        ></Project>
        <Project
          key={2}
          url="https://www.zanmedia.net/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/nn4vgm9hcn"
          imgSrc={zan1}
          name="ZAN MEDIA"
          description="Build the company website and funnel. Helped the company increase revenue by having an online presence. Managed content, hosting and DNS. Made using HTML, CSS, JavaScript"
        ></Project>
        <Project
          key={4}
          url="https://smarthomesafe1.netlify.app/"
          githubUrl="https://danish01132.wistia.com/medias/p2lgvxfloh"
          imgSrc={home}
          name="SMART HOME SAFE"
          description="Worked with a team as a Front Developer, added auth0, collected data through forms, added chat, cookies and calendly widgets. Made using HTML, CSS and Gatsby/React."
        ></Project>
      </div>
    </section>
  );
}
export default Portfolio;
