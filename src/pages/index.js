import React from "react"
import "../assets/css/index.css"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Experience from "../components/Experience"
import Portfolio from "../components/Portfolio"
import Footer from "../components/Footer"
import Upwork from "../components/Upwork"


export default function Home() {
  return (
    <>
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
