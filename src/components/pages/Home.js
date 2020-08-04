import React from 'react';
// import AboutMeCard from './components/AboutMeCard';
// import Contact from './components/ContactInfo';
import AboutMeCard from "../AboutMeCard"

const styles = {
    card: {
        // backgroundColor: "blue",
        text: "center"
    }
}


const Home = () => {
    return (
        <div style={styles.card}>
            <AboutMeCard/>
        </div>
    );
}

export default Home;


