import React from 'react';


const Footer = () => {

const styles = {
    footer: {
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        // backgroundColor: "#C9B1BD",
        color: "black",
        textAlign: "center",
        height: "40px"
    }
}
    return (
        <footer style={styles.footer}>
            <p>Made with <span role="img" aria-label="heart emoji">💞</span></p>
        </footer>
    );
}

export default Footer;
