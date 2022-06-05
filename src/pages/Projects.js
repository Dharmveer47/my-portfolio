import React from "react";
import "../Style/Project.css";
import obj from "../components/Obj";
import CardProjec from "../components/CardProjec";
const Projects = () => {
  return (
    <div data-aos="fade-up" data-aos-duration="300">
      <div className="aboutme">
        <h1>Awsome Projects</h1>
      </div>
      {obj.map((ProInfo) => (
        <CardProjec key={ProInfo.id} ProInfo={ProInfo} />
      ))}
    </div>
  );
};

export default Projects;
