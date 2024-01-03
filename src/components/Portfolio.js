import React from "react";
import Project from "./Project";
import zan1 from "../assets/images/Project images/zan1.jpg";
import maqawal from "../assets/images/Project images/maqawal.jpg";
import boiler from "../assets/images/Project images/boiler.jpg";
import home from "../assets/images/Project images/home1.jpg";
import bb from "../assets/images/Project images/bb.jpg";

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
          description="Developed 55+ Screens using HTML, CSS/MUI, ReactJS, Developed and Integrated 27+ Node API's for construction specialist platform, Managed state using reduxjs/toolkit."
        >
          He wants you to make a white label solution. A site that can be esily
          replicateable etc.
        </Project>
        <Project
          key={2}
          url="https://www.zanmedia.net/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/nn4vgm9hcn"
          imgSrc={zan1}
          name="ZAN MEDIA"
          description="Build the company website and funnel. Helped the company increase revenue by having an online presence. Managed content, hosting and DNS. Made using HTML, CSS, JavaScript"
        ></Project>
        <Project
          key={3}
          url="https://clientbookingbea.netlify.app/"
          githubUrl="https://muhammaddanish0159.wistia.com/medias/e3iynhvdk0"
          // imgSrc={bb}
          imgSrc={
            "https://upwork-usw2-prod-agora-file-storage.s3.us-west-2.amazonaws.com/profile/portfolio/thumbnail/b03bd22ea39da5c717a64484154e79f4?response-content-disposition=inline;+filename=%22image_large%22;+filename*=utf-8%27%27image_large&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT//////////wEaCXVzLXdlc3QtMiJHMEUCIGE%2BXeAhl8Xgfb8l6kRF/avicfQxyd0xAXxce2ycLXLqAiEA9ItKeccBDy7ii9y%2BxwSrBmTFy6n/y0vPhfcaCnrNY1gqzQQIXRAAGgw3Mzk5MzkxNzM4MTkiDG8HV5EtXW9U08OyfSqqBEFKCPOaZKl8/AdCkI/aCEmEQpqIriTOW62%2BRIDyPEkPO4z7Vjmlugw5fjgbDkLU4Z2KxVbsUUsRj46Pl2mPnLrte6ypWXkFhZtUfaqn44ATRf6kqQKuxlmnzPRh3UIM%2BVlYk0cXJqqRzkfmNUza%2BVUMNq1iPpqdnQZ7hSZaS0Robyrs%2BqUgnUvuZQIQG3TNASc6UaCvFFMLC3sQZtzsH4miBfjlDYifqpnUURithrWMl5uQ47wjrt1/%2B93eF%2B/oTwgs88Cp4T7gqIcU76CLCKRl5q36M8B0oWDhqfFeS9SYEnkYOpiHCB29dzJSORjVlESE1GDZWwg%2BGeIr3NFGehD2iyxjpe54magKg3E1caaOT3esE%2BmHhYb5IB6ndTl9c4p2iEquGl9WSXmK0CDLdKHChU/gnTKwWG60oHYjNxpCSFHzqwLIqR4cJu/fusJaf7xMx3QcPTHGeWVSBHHuo1rlgx2IeeFhTD2U3foulE80Zyp0hVufwMMGdWXVOCaWPN50hSu3qUxZKtd9Xf%2BU2r3sp9owiRJ71UrMV9BByKEdFZ5CYMPTj2J8spf4Nz/SaP2xzLqwRzVRa3Sc6UTGipoSDK5D15wzAuIsldqnKaWzK3E%2BWZYpNqGfnjNCOeM7fuJ5b1rAOKqFncGqTw64K/CJvNeUpv5Dbna2r3fcjNYU6/7B%2BT0z5EweXr/TNxFAHl3wrBi9kUpPqEDXgGnVDibo6eUjkePYLlyYMNCX1awGOqcBdzWr1SySOe0VQ0WCwKVbKacrIbJx1iJsNiN7bsILqgJo2padDbyDXxqxZN5JGZdw4TBhxsKNfCEAnHiyIdAv0T/HmeBCcYfZMtIyTSsHeaJQ5dO8sUJa5GNB0bTRrloXZYg5mjjqK1jhbfjANGgoyiNrkToNGSydXPx1jwvmrhgQbU33PR/eUxctqP%2BFYdYOuJXDYR86SCYJ92XXOpuHnl4%2BDcfukMA=&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240103T121500Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Credential=ASIA2YR6PYW5SW3OCXRM/20240103/us-west-2/s3/aws4_request&X-Amz-Signature=d1142d51984caf6fd646c5ad91a0fbb971514fcffba558db932a95143c41aa58"
          }
          name="BOOKING BEA"
          description="Worked as a MERN Stack Developer, Built screens 
           for both clients and admin in React, implemented desired 
           searching and filtering,
           Developed Multiple API's for Hotels, Rooms, Users."
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
