import "../css/HeroImgStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import IntroImg from "../assets/intro-laptop-bg.jpeg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="intro-frontend-img" className="intro-img" />
      </div>
      <div className="content">
        <p>I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            projects
          </Link>
          <Link to="/contact" className="btn-light btn">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
