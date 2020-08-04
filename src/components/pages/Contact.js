import React from "react";
import ContactInfo from "../ContactInfo"


const styles = {
    card: {
      backgroundColor: "black",
      textAlign: "center"
    },
  };

const Contact = () => {
  return (
    <div>
        <ContactInfo style={styles.card}/>
    </div>
  );
};

export default Contact;
