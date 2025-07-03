import React, { useContext } from "react";
import "../styles/Hero.css";
import heroImage from "../assets/img2.png";
import { Context } from "../main";

const Hero = () => {
  const { user } = useContext(Context);
  return (
    <>
      <div className="hero-section">
        <img src={heroImage} alt="hero-image" />
        <h4>Hello, {user ? user.name : "Developer"}</h4>
        <h1>Welcome to AuthFolio</h1>
        <p>
          Crafted for identity, built for trust.
        </p>
      </div>
    </>
  );
};

export default Hero;
