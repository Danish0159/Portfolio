import React from "react";
import logo from "../assets/images/logoUpwork.png";

function Upwork() {
  return (
    <footer className="upwork">
      <img className="upwork__logo" src={logo} alt="" />
      <div className="upwrok__content">
        <h2>Enlist a Pro Web Developer from Upwork</h2>
        <a
          href="https://www.upwork.com/freelancers/~0116fd22bce4f6fe7b"
          target="_blank"
          rel="noopener"
        >
          <button className="content__btn btn">Go to upwork</button>
        </a>
      </div>
    </footer>
  );
}
export default Upwork;
