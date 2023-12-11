import React from "react";
import cw from "../assets/images/cw.png";

function Schedule() {
  return (
    <footer className="schedule">
      <img className="schedule__logo" src={cw} alt="" />
      <div className="schedule__content">
        <h2>Book Your Meeting: Reserve 30-Minute Slot</h2>
        <a
          href="https://calendly.com/muhammaddanish/30min?back=1&month=2023-12"
          target="_blank"
          rel="noopener"
        >
          <button className="content__btn content__btn--schedule btn">
            Go to calendly
          </button>
        </a>
      </div>
    </footer>
  );
}
export default Schedule;
