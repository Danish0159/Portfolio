import React, { useState } from 'react'
import logo from "../assets/images/logo.png"

function Navbar() {
    const [show, setShow] = useState(false)
    return (

        <div div className="navbar-container" >
            <nav className="navbar">
                <img class="navbar__logo" src={logo} alt="Logo" />

                <ul className={show ? "navigation active" : "navigation"}>
                    <li class="navigation__item"><a class="navigation__link" href="#">Home</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#">About</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#">Portfolio</a></li>
                    <li class="navigation__item"><a class="navigation__link" href="#">Contact Me</a></li>
                </ul>

                <a class="navbar__btn btn-small" href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b"
                    target="_blank">Get
                    Started</a>
                <button class="nav-btn" onClick={() => setShow(!show)}></button>
            </nav>
        </div>
    )
}

export default Navbar