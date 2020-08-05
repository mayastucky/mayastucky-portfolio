import React from "react";

const AboutMeCard = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" id="whiteborder">
            <div className="row">
              <div className="col">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                {/* <img className="maya" src="mayasmall.jpg" alt="maya stucky" /> */}
                <p>
                  Hi all! I'm Maya! Welcome to my page. I am enjoying the
                  Georgia Tech Web Development Bootcamp and honing my developer
                  skills each and every day. I adore all the new friends I am
                  making and all the creative choices that come along with web
                  development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
