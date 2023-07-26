import React, { useState } from "react";
import projectsData from "../data";

export default function Projects() {
  const [selectedType, setSetselectedType] = useState("react");
  return (
    <div className="projects">
      <h1>Projects</h1>

      <div className="buttons">
        <button
          className={`${selectedType == "react" ? "active" : ""}`}
          onClick={() => setSetselectedType("react")}
        >
          React
        </button>
        <button
          className={`${selectedType == "anguler" ? "active" : ""}`}
          onClick={() => setSetselectedType("anguler")}
        >
          Anguler
        </button>
        <button
          className={`${selectedType == "css" ? "active" : ""}`}
          onClick={() => setSetselectedType("css")}
        >
          CSS
        </button>
      </div>

      <div>
        {projectsData
          .filter((el) => el.category == selectedType)
          .map((el) => (
            <div>
              <h1>{el.name}</h1>
              <p>{el.category}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
