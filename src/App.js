import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header"
import Home from "./components/pages/Home"
import Contact from "./components/pages/Contact"
import Portfolio from "./components/pages/Portfolio"

// const styles = {
//   card: {
//     backgroundColor: "black",
//     textAlign: "center"
//   },
// };


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/blog" component={Blog} /> */}
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio}/>
      </Router>
      
      

    </div>
  );
}

export default App;
