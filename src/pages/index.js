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
import favicon from '../assets/images/favicon/favicon.ico'
import favicon1 from '../assets/images/favicon/apple-icon-57x57.png'
import favicon2 from '../assets/images/favicon/apple-icon-60x60.png'
import favicon3 from '../assets/images/favicon/apple-icon-72x72.png'
import favicon4 from '../assets/images/favicon/apple-icon-76x76.png'
import favicon5 from '../assets/images/favicon/apple-icon-114x114.png'
import favicon6 from '../assets/images/favicon/apple-icon-120x120.png'
import favicon7 from '../assets/images/favicon/apple-icon-144x144.png'
import favicon8 from '../assets/images/favicon/apple-icon-152x152.png'
import favicon9 from '../assets/images/favicon/apple-icon-180x180.png'
import favicon10 from '../assets/images/favicon/android-icon-192x192.png'
import favicon11 from '../assets/images/favicon/favicon-32x32.png'
import favicon12 from '../assets/images/favicon/favicon-96x96.png'
import favicon13 from '../assets/images/favicon/favicon-16x16.png'

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
        <link rel="icon" href={favicon} />,
        <link rel="apple-touch-icon" sizes="57x57" href={favicon1} />,
        <link rel="apple-touch-icon" sizes="60x60" href={favicon2} />,
        <link rel="apple-touch-icon" sizes="72x72" href={favicon3} />,
        <link rel="apple-touch-icon" sizes="76x76" href={favicon4} />,
        <link rel="apple-touch-icon" sizes="114x114" href={favicon5} />,
        <link rel="apple-touch-icon" sizes="120x120" href={favicon6} />,
        <link rel="apple-touch-icon" sizes="144x144" href={favicon7} />,
        <link rel="apple-touch-icon" sizes="152x152" href={favicon8} />,
        <link rel="apple-touch-icon" sizes="180x180" href={favicon9} />,
        <link rel="icon" type="image/png" sizes="192x192" href={favicon10} />,
        <link rel="icon" type="image/png" sizes="32x32" href={favicon11} />,
        <link rel="icon" type="image/png" sizes="96x96" href={favicon12} />,
        <link rel="icon" type="image/png" sizes="16x16" href={favicon13} />,
        <meta name="msapplication-TileColor" content="#ffffff" />,
        <meta name="msapplication-TileImage" content="../assets/images/favicon/ms-icon-144x144.png" />,
        <meta name="theme-color" content="#ffffff" />,
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
