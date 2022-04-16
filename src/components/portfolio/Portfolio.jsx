import React from "react";
import "./Portfolio.css";

function portfolio() {
  return (
    <section id="Portfolio">
      <h2>My Noteworthy Projects</h2>
      <div className="porfolio">
        <article className="folio-items">
          <div className="portfolio-image">
            <img src="Restaurant1.png" alt="kagan" />
          </div>
          <div className="title">Restaurant Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001"
              className="btn-a"
              target="blank"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="file:///home/roche/Desktop/Coding/First%20Project/index.html#"
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
