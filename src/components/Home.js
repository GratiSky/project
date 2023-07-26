import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
export default function Home() {
  return (
    <div>
      <Hero
        imageSrc="/intro-bg.jpg"
        title="Welcome to My Portfolio"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida eget odio a sodales."
      />
      <Projects />
    </div>
  );
}
