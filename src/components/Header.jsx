import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a class="navbar-brand" href="/">
          Maya Stucky
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {/* <li class="nav-item active">
              <a class="nav-link" href="index.html">
                About<span class="sr-only">(current)</span>
              </a>
            </li> */}
            <li class="nav-item">
              <Link
                to="/"
                className={
                  location.pathname === "/" ? "nav-link active" : "nav-link"
                }
              >
                About
              </Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="portfolio.html">
                Portfolio
              </a> */}
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact" ? "nav-link active" : "nav-link"
                }
              >
                Contact
              </Link>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="revisedresume.pdf">
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
