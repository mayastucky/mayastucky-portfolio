import React from "react";

const AboutMeCard = () => {

  const styles = {
    maya: {
      height: "auto",
      width: "50%",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      borderRadius: "50%",
      marginBottom: "10px"
  },
  box: {
    paddingTop: "20px",
    backgroundColor: "#f4f1de",
    margin: "auto",
    borderRadius: "30px",
    paddingBottom: "30px",
    maxHeight: "1000px",
    minHeight: "550px"
  }
}
  return (
    <div>
      <div className="container">
        <br/>
        <br/>
        <div className="row">
          <div className="col-sm-6" style = {styles.box}>
            <div className="row">
              <div className="col">
                <h2>About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img
                  style={styles.maya}
                  src="https://github.com/mayastucky/homework2-bootstrap-css/blob/master/mayasmall.jpg?raw=true"
                  alt="maya stucky"
                />
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
