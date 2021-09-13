import React from 'react'
import logo from "../assets/images/logoUpwork.png"


function Upwork() {
    return (
        <footer className="upwork">
            <img className="upwork__logo" src={logo} alt="" />
            <div className="upwrok__content">
                <h2>WEB DEVELOPMENT</h2>
                <a href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b" target="_blank" rel="noopener" rel="noreferrer"><button
                    className="content__btn btn">Get
                    Started</button></a>
            </div>
        </footer>
    )
}

export default Upwork
