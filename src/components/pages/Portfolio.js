import React from "react";

const Portfolio = () => {
  return (
    <div className = "container">
      <div className="row">
        <h2>Portfolio</h2>
      </div>
      <div className="row">
      <div className="col-sm">
        <figure classNameName="figure">
          <img src="https://github.com/mayastucky/gt-project-2/raw/master/public/img/maestro-screenshot.png" className="figure-img img-fluid rounded" alt="Mestro App Screen Shot" />
          <figcaption className="figure-caption" >Maestro <a href = "https://secure-shelf-55938.herokuapp.com/">Site</a><a href= "https://github.com/mayastucky/gt-project-2">GitHub</a></figcaption>
        </figure>
      </div>
      <div className="col-sm">
        <figure className="figure">
          <img src="https://github.com/mayastucky/13-gt-burger/raw/master/app.png" className="figure-img img-fluid rounded" alt="Burger App Screen Shot" />
          <figcaption className="figure-caption">Eat The Burger<a href = "https://vast-badlands-50775.herokuapp.com/burgers">Site</a><a href = "https://github.com/mayastucky/13-gt-burger">GitHub</a></figcaption>
        </figure>
      </div>
      <div className="col-sm">
        <figure className="figure">
          <img src="https://github.com/mayastucky/gt-11-note-taker-final/raw/master/notetaker.png" className="figure-img img-fluid rounded" alt="random password generator" />
          <figcaption className="figure-caption" >Note Taker<a href = "https://enigmatic-retreat-96846.herokuapp.com/">Site</a><a href= "https://github.com/mayastucky/gt-11-note-taker-final">GitHub</a></figcaption>
        </figure>
      </div>
      <div className="row">
      <div className="col-sm">
        <figure className="figure">
          <img src="https://github.com/mayastucky/gt-hw-5-daily-planner/raw/master/screenshot.png" className="figure-img img-fluid rounded" alt="daily planner"/>
          <figcaption className="figure-caption">Daily Planner <a href = "https://mayastucky.github.io/gt-hw-5-daily-planner/">Site</a><a href= "https://github.com/mayastucky/gt-hw-5-daily-planner">GitHub</a></figcaption>
        </figure>
      </div>
      <div className="col-sm">
        <figure className="figure">
          <img src="https://github.com/mayastucky/gt-project-1/raw/master/assets/images/EntertainMeMain.png" className="figure-img img-fluid rounded" alt="entertain me"/>
          <figcaption className="figure-caption" >Entertain Me <a href = "https://mayastucky.github.io/gt-project-1/">Site</a><a href = "https://github.com/mayastucky/gt-project-1">GitHub</a></figcaption>
        </figure>
      </div>
      <div className="col-sm">
        <figure className="figure">
          <img src="https://github.com/mayastucky/gt-hw3-password-generator/raw/master/app.png" className="figure-img img-fluid rounded" alt="random password generator" />
          <figcaption className="figure-caption" >Password Generator<a href = "https://mayastucky.github.io/gt-hw3-password-generator/">Site</a><a href= "https://github.com/mayastucky/gt-hw3-password-generator">GitHub</a></figcaption>
        </figure>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Portfolio;
