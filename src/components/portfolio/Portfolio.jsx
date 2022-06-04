import React from "react";
import "./Portfolio.css";

function portfolio() {
  return (
    <section id="Portfolio" className="container-fluid">
      <div className="row">
        <h2>My Noteworthy Projects</h2>
      </div>

      <div className="porfolio row">
        <article className="container-fluid folio-items co1-md-4">
          <div className="portfolio-image">
            <img
              className="img-fluid"
              src="./assets/Restaurant1.png"
              alt="kagan"
            />
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
        <article className=" container-fluid folio-items col-md-4">
          <div className="portfolio-image">
            <img src="./assets/Real.png" alt="kagan" className="img-fluid" />
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
        <article className=" container-fluid folio-items col-md-4">
          <div className="portfolio-image">
            <img
              src="./assets/logistics.png"
              alt="kagan"
              className="img-fluid"
            />
          </div>
          <div className="title">Real-Estate Website</div>
          <div className="icons">
            <a
              href="https://github.com/Roche001/Logistics-company.git"
              className="btn-a"
              target="blank"
            >
              {" "}
              <button className="btn-a">Github</button>
            </a>
            <a
              href="https://andelleslogistics.netlify.app/"
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
