import { Link, useLocation } from "react-router-dom";
import "../css/NavbarStyles.css";
import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // handle navlist should be visible or not based on icon click at top right
  const [navListVisible, setNavListVisible] = useState(false);

  const toggleNavListVisibility = () => {
    setNavListVisible((currNavListVisibility) => !currNavListVisibility);
  };

  // check the location to bold the selected item in navbar
  const location = useLocation();

  // handle the color of navbar based on scroll
  const [navColor, setNavColor] = useState(false);

  const handleNavColor = () => {
    if (window.scrollY >= 1) {
      setNavColor(true);
    } else {
      setNavColor(false);
    }
  };

  window.addEventListener("scroll", () => {
    handleNavColor();
  });

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={navColor ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>

      <ul className={navListVisible ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "active-navbar-link"
                : "inactive-navbar-link"
            }
            onClick={scrolltoTop}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/project"
            className={
              location.pathname === "/project"
                ? "active-navbar-link"
                : "inactive-navbar-link"
            }
            onClick={scrolltoTop}
          >
            Project
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "active-navbar-link"
                : "inactive-navbar-link"
            }
            onClick={scrolltoTop}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "active-navbar-link"
                : "inactive-navbar-link"
            }
            onClick={scrolltoTop}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="hamburger" onClick={toggleNavListVisibility}>
        {navListVisible ? (
          <FaTimes className="icon" />
        ) : (
          <FaBars className="icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
