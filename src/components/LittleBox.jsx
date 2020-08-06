import React from "react";

const LittleBox = (props) => {
  const styles = {
    box: {
      paddingTop: "20px",
      backgroundColor: "#DDC8C4",
      margin: "auto",
      borderRadius: "20px",
      paddingBottom: "30px",
      maxHeight: "1000px",
      minHeight: "550px",
    },
    title: {
      color: "#420217",
    },
  };

  function changeBackground(e) {
    e.target.style.color = "#262A10";
    e.target.style.fontSize = "120%"
  }

  function revertBackground(e) {
    e.target.style.color = "#420217";
    e.target.style.fontSize = "100%"
  }


  return (
    <div>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6" style={styles.box}>
            <div className="row">
              <div className="col">
                <h2 style={styles.title}>
                  {props.title}
                </h2>
              </div>
            </div>

            <h5 style={props.contactStyle}>{props.number}</h5>
            <h5 style={props.contactStyle}>
              <a
                style={props.contactStyle}
                href="mailto:mayaatstucky@gmail.com"
                onMouseOver={changeBackground}
                onMouseLeave={revertBackground}
              >
                {props.email}
              </a>
            </h5>
            <h5 style={props.contactStyle}>
              <a style={props.contactStyle} onMouseOver={changeBackground} onMouseLeave={revertBackground} href={props.githubUser}>
                {props.gitHubLinkTitle}
          
              </a>
            </h5>
            <h5 style={props.contactStyle}>
              <a style={props.contactStyle}  onMouseOver={changeBackground} onMouseLeave={revertBackground} href={props.linkedInUser}>
                {props.linkedInLinkTitle}{" "}
              </a>
            </h5>

            <div className="col-md-12">
              <img src={props.src} alt={props.alt} style={props.style} />
              <p>{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleBox;
