import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Project() {
  return (
    <div>
      <Hero
        imageSrc=""
        title="These are my projects"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida eget odio a sodales."
      />
      <Projects />
    </div>
  );
}
