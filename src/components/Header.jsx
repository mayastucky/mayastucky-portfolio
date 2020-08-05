import React from "react";
import { Link, useLocation } from "react-router-dom";



const Header = () => {
  const styles = {
    navbar: {
      //i want to make the navbar a different color 
      // color: "#D5896F !important",
      color: "#D5896F"
    }
  }

  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className ="navbar-brand" to="/" style={styles.navbar}>
          Maya Stucky
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                style={styles.navbar}
                className={
                  location.pathname === "/contact"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            <Link
                to="/portfolio"
                style={styles.navbar}
                className={
                  location.pathname === "/portfolio" ? "nav-link active" : "nav-link"
                }
              >
                Portfolio
              </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
