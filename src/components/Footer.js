import React from 'react'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaPhoneSquareAlt } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">M DANISH</h2>
            <div className="footer__icon-div">
                <a href="mailto:danish01132@gmail.com"><FaEnvelope className="footer__icon" /></a>
                <a href="https://github.com/danish0159" target="_blank"><FaGithub className="footer__icon" /></a>
                <a href="https://www.linkedin.com/in/muhammad-danish-a4a2631b2/" target="_blank"><FaLinkedinIn className="footer__icon" /></a>
                <a href="tel:92-336-734-1920"><FaPhoneSquareAlt className="footer__icon" /></a>
            </div>
            <p className="footer__privacy"> ©M Danish 2021. All rights reserved. </p>
        </footer>
    )
}

export default Footer