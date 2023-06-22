import "../css/WorkCardStyles.css";
import React from "react";
import projectWorkCardData from "../jsonData/WorkCardData";
import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        {projectWorkCardData.map((element, index) => {
          return (
            <WorkCard
              key = {index}
              imgSrc={element.imgSrc}
              title={element.title}
              text={element.text}
              projectLink={element.projectLink}
              srcLink={element.srcLink}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
