import React from "react";

const LittleBox = (props) => {
  const styles = {
    box: {
      paddingTop: "20px",
      backgroundColor: "#f4f1de",
      margin: "auto",
      borderRadius: "30px",
      paddingBottom: "30px",
      maxHeight: "1000px",
      minHeight: "550px",
    },
  };
  return (
    <div>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <div className="col-sm-6" style={styles.box}>
            <div className="row">
              <div className="col">
                <h2>{props.title}</h2>
              </div>
            </div>

            <h5 style={props.contactStyle}>{props.number}</h5>
            <h5 style={props.contactStyle}> 
              <a style={props.contactStyle} href="mailto:mayaatstucky@gmail.com">{props.email}</a>
            </h5>
            <h5 style={props.contactStyle}>
              <a style={props.contactStyle} href={props.githubUser}>{props.gitHubLinkTitle}</a>
            </h5>
            <h5 style={props.contactStyle}>
              <a style={props.contactStyle} href={props.linkedInUser}>{props.linkedInLinkTitle} </a>
            </h5>

            <div className="col-md-12">
              <img src={props.src} alt={props.alt} style={props.style} />
              <p>{props.text}</p>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LittleBox;
