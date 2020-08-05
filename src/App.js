import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Footer from "./components/Footer";



function App() {
  // const styles = {
  // };
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/mayastucky-portfolio" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
