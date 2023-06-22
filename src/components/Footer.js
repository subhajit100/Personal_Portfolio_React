import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "../css/FooterStyles.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left-footer">
          <div className="location">
            <FaHome className="icon footer-icon" size={30} />
            <div>
              <p>KR Garden, Murugeshpallya</p>
              <p>Bengaluru</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone className="icon footer-icon" />
              9999900000
            </h4>
          </div>
          <div className="email">
            <h4>
              <NavLink to="mailto:asubhajit35@gmail.com" target="_blank">
                <FaMailBulk className="icon footer-icon" />
              </NavLink>
              asubhajit35@gmail.com
            </h4>
          </div>
        </div>
        <div className="right-footer">
          <h4>About the Company</h4>
          <p>
            I am Subhajit Adhikary, CEO and Founder of FrontEndWithSubhajit. I
            enjoy working on clean and responsive designs
          </p>
          <div className="social">
            <NavLink
              to="https://www.facebook.com/subhajit.adhikary.5458"
              target="_blank"
            >
              <FaFacebook className="icon social-icon" size={25} />
            </NavLink>

            <NavLink
              to="https://www.instagram.com/subhajit__adhikary/"
              target="_blank"
            >
            <FaInstagram className="icon social-icon" size={25} />
            </NavLink>

            <NavLink
              to="https://www.linkedin.com/in/subhajit-adhikary/"
              target="_blank"
            >
              <FaLinkedin className="icon social-icon" size={25} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
