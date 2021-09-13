import React from "react"
import "../assets/css/index.css"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import Upwork from "../components/Upwork"
import { Helmet } from "react-helmet";


export default function Home() {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Muhammad Danish | A Website Developer</title>,
        <meta name="description" content="Web Dev | React JS | Gatsby | JavaScript | CSS | Bootstrap | Adobe XD." />
        <meta name="keywords" content="Front End Development, React Js Developer, Web Dev, React JS, Gatsby, JavaScript, HTML, CSS, Bootstrap, PhotoShop, Adobe XD, Upwork Web Development. " />

      </Helmet>

      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Portfolio></Portfolio>
      <Upwork></Upwork>
      <Footer></Footer>
    </>
  )
}
