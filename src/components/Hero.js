import React from "react";

const Hero = ({ imageSrc, text, title }) => {
  return (
    <div className="hero">
      {/* <img className="hero-image" src={imageSrc} alt="Hero" /> */}
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-text">{text}</p>
      </div>
    </div>
  );
};

export default Hero;
