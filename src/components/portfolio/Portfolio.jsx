import React from "react";
import "./Portfolio.css";

function portfolio() {
  return (
    <section id="Portfolio">
      <h2>My Noteworthy Projects</h2>
      <div className="porfolio">
        <article className="folio-items">
          <div className="portfolio-image">
            <img src="./assets/Restaurant1.png" alt="kagan" />
          </div>
          <div className="title">Restaurant Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001/Rhino-Hill-Restaurant.git"
              className="btn-a"
              target="blank"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="https://web-project-34f5b.web.app/"
              className="btn-a"
              target="blank"
            >
              {" "}
              <button className="btn-a">Live Demo</button>
            </a>
          </div>
        </article>
        <article className="folio-items">
          <div className="portfolio-image">
            <img src="./assets/Real.png" alt="kagan" />
          </div>
          <div className="title">Real-Estate Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001/Real-Estate-website.git"
              className="btn-a"
              target="blank"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="https://real-estate-610fa.web.app/"
              className="btn-a"
              target="blank"
            >
              {" "}
              <button className="btn-a">Live Demo</button>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;