import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"




function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route path="/contact" component={Contact} />
      </Router>
      
      

    </div>
  );
}

export default App;
