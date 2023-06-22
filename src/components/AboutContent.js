import { Link } from "react-router-dom";
import "../css/AboutContentStyles.css";
import ReactImg1 from '../assets/react-img-1.jpeg';
import ReactImg2 from '../assets/react-img-2.png';

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left-about">
        <h1>Who Am I?</h1>
        <p>
          I'm a React Front-End Developer. I love creating responsive secure
          websites for my clients
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right-about">
        <div className="img-container">
          <div className="img-stack top">
            <img src={ReactImg1} alt="react-img1" />
          </div>
          <div className="img-stack bottom">
            <img src={ReactImg2} alt="react-img2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
