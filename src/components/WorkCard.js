import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  const { imgSrc, title, text, projectLink, srcLink } = props;

  return (
    <div className="project-card">
      <img src={imgSrc} alt="web-app-img" />
      <h2 className="project-title">{title}</h2>
      <div className="project-details">
        <p>{text}</p>
        <div className="project-buttons">
          <NavLink to={projectLink} className="btn" target="_blank">
            Project
          </NavLink>
          <NavLink to={srcLink} className="btn" target="_blank">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
