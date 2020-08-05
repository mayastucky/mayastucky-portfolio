import React from "react";

const PortfolioBlock = (props) => {
  const styles = {
    imageSize: {
      width: "400px",
      height: "300px",
    },
  };

  return (
    <div className="col-sm">
      <figure className="figure">
        <img
          src={props.src}
          className="figure-img img-fluid rounded"
          alt={props.alt}
          style={styles.imageSize}
        />
        <figcaption className="figure-caption" style={{ marginBottom: "30px", textAlign:"center" }}>
          {props.name}
          <a href={props.deployedLink}> Site </a>
          <a href={props.githubLink}> GitHub </a>
        </figcaption>
      </figure>
    </div>
  );
};

export default PortfolioBlock;
