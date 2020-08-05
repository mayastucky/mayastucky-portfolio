import React from 'react';


const Footer = () => {

const styles = {
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        backgroundColor: "#F29CA3",
        color: "white",
        textAlign: "center"
    }
}
    return (
        <footer style={styles.footer}>
            <br></br>
            <p>Made with Love</p>
        </footer>
    );
}

export default Footer;
