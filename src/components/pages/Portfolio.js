import React from "react";
import PortfolioBlock from "../PortfolioBlock";

const Portfolio = () => {
  const styles = {
    imageSize: {
      width: "400px",
      height: "300px",
    },
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Portfolio</h2>
      </div>
      <div className="row">
        <PortfolioBlock
          src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
          alt="Maestro Application"
          name="Maestro"
          githubLink="https://github.com/mayastucky/gt-project-2"
          deployedLink="https://secure-shelf-55938.herokuapp.com/"
        ></PortfolioBlock>
        <PortfolioBlock
          src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
          alt="Maestro Application"
          name="Maestro"
          githubLink="https://github.com/mayastucky/gt-project-2"
          deployedLink="https://secure-shelf-55938.herokuapp.com/"
        ></PortfolioBlock>
        <PortfolioBlock
          src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
          alt="Maestro Application"
          name="Maestro"
          githubLink="https://github.com/mayastucky/gt-project-2"
          deployedLink="https://secure-shelf-55938.herokuapp.com/"
        ></PortfolioBlock>
      </div>
      <div className="row">
        <PortfolioBlock
          src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
          alt="Maestro Application"
          name="Maestro"
          githubLink="https://github.com/mayastucky/gt-project-2"
          deployedLink="https://secure-shelf-55938.herokuapp.com/"
        ></PortfolioBlock>
                <PortfolioBlock
          src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
          alt="Maestro Application"
          name="Maestro"
          githubLink="https://github.com/mayastucky/gt-project-2"
          deployedLink="https://secure-shelf-55938.herokuapp.com/"
        ></PortfolioBlock>
                <PortfolioBlock
          src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png"
          alt="Maestro Application"
          name="Maestro"
          githubLink="https://github.com/mayastucky/gt-project-2"
          deployedLink="https://secure-shelf-55938.herokuapp.com/"
        ></PortfolioBlock>
      </div>
      <div className="col-sm">
        <figure className="figure">
          <img
            src="https://github.com/mayastucky/gt-project-1/raw/master/assets/images/EntertainMeMain.png"
            className="figure-img img-fluid rounded"
            alt="entertain me"
            style={styles.imageSize}
          />
          <figcaption
            className="figure-caption"
            style={{ marginBottom: "30px" }}
          >
            Entertain Me{" "}
            <a href="https://mayastucky.github.io/gt-project-1/">Site</a>
            <a href="https://github.com/mayastucky/gt-project-1">GitHub</a>
          </figcaption>
        </figure>
      </div>
      <div className="col-sm">
        <figure className="figure" style={{ marginBottom: "30px" }}>
          <img
            src="https://github.com/mayastucky/gt-hw3-password-generator/raw/master/app.png"
            className="figure-img img-fluid rounded"
            alt="random password generator"
            style={styles.imageSize}
          />
          <figcaption className="figure-caption">
            Password Generator
            <a href="https://mayastucky.github.io/gt-hw3-password-generator/">
              Site
            </a>
            <a href="https://github.com/mayastucky/gt-hw3-password-generator">
              GitHub
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
    // </div>
    // </div>
  );
};

export default Portfolio;
