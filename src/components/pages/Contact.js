import React from "react";
import LittleBox from "../LittleBox";

const styles = {
    contact:{
      color: "#81b29a",
      textAlign: "center",
      marginTop: "40px"
    }
};

const Contact = () => {
  return (
    <div>
      <LittleBox title="Contact"
      number="(316) 708-6747"
      email="mayaatstucky@gmail.com"
      gitHubLinkTitle="GitHub"
      githubUser="https://github.com/mayastucky"
      linkedInUser="https://www.linkedin.com/in/maya-stucky-4453b0181/"
      linkedInLinkTitle="LinkedIn"
      contactStyle={styles.contact}
      >
      </LittleBox>
    </div>
  );
};

export default Contact;
