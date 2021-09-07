import React, { useState } from 'react'
import logo from "../assets/images/logo.png"

function Navbar() {
    const [show, setShow] = useState(false)
    return (

        <div className="navbar-container" >
            <nav className="navbar">
                <img className="navbar__logo" src={logo} alt="Logo" />

                <ul className={show ? "navigation active" : "navigation"}>
                    <li className="navigation__item"><a className="navigation__link" href="#">Home</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">About</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Portfolio</a></li>
                    <li className="navigation__item"><a className="navigation__link" href="#">Contact Me</a></li>
                </ul>

                {/* Desktop */}
                <a className="navbar__Desktop-btn btn-small" href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b"
                    target="_blank">Get
                    Started</a>
                {/* Mobile btn */}
                <button className="nav-btn" onClick={() => setShow(!show)}></button>
            </nav>
        </div>
    )
}

export default Navbar