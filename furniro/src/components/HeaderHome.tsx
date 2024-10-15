import React from "react";
import BackgroundImg from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png";
import './styles.css'; 

const HeaderHome = () => {
  return (
    <div className="header-home">
      <img src={BackgroundImg} alt="living room" className="background-img" />
      <div className="overlay-box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        ratione rem sunt quibusdam tenetur tempora eius.
      </div>
    </div>
  );
};

export default HeaderHome;
