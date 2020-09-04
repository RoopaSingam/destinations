import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import "./Navbar.css";
import Dropdown from "./Dropdown";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setbutton] = useState(true);
  const [dropdown, setDropdown] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false);
    } else {
      setbutton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Epic <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul
            className={click ? "nav-menu active" : "nav-menu"}
            style={{ float: "right" }}
          >
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/signup"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
          <div></div>
        </div>
      </nav>
    </>
  );
}
