import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from "../assets/images/logo.png"

function Navbar() {
    const [show, setShow] = useState(false)
    return (

        <div className="navbar-container" id="Home">
            <nav className="navbar">
                <img className="navbar__logo" src={logo} alt="Logo" />

                <ul className={show ? "navigation active" : "navigation"}>
                    <li className="navigation__item"><a className="navigation__link" href="#Home">Home</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#About">About</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#Portfolio">Portfolio</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#Contact">Contact Me</a></li>
                </ul>

                {/* Desktop */}
                <a className="navbar__Desktop-btn btn-small" href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b"
                    target="_blank" rel="noopener" rel="noreferrer">Get
                    Started</a>
                {/* Mobile btn */}
                <button className="nav-btn" onClick={() => setShow(!show)}></button>
            </nav>
        </div>
    )
}

export default Navbar