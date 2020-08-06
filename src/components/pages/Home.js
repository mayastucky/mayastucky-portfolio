import React from "react";
import LittleBox from "../LittleBox";
// import Profile from "../maya.png"
// import Profile from "./maya.png"
import Profile from "../maya.png"


const styles = {
  maya: {
    height: "auto",
    width: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "30%",
    marginBottom: "10px",
  },
};

const Home = () => {
  return (
    <div style={styles.card}>
      <LittleBox
        title="About Me"
        style={styles.maya}
        src={Profile}
        alt="Maya Stucky"
        text="Hi all! I'm Maya! Welcome to my page. I am enjoying the
            Georgia Tech Web Development Bootcamp and honing my developer
            skills each and every day. I adore all the new friends I am
            making and all the creative choices that come along with web
            development."
      ></LittleBox>
    </div>
  );
};

export default Home;
