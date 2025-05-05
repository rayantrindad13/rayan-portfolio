import React from "react";
import logoPython from "../assests/python-brands-solid.svg";
import logoJs from "../assests/js-brands-solid.svg";
import logoReact from "../assests/react-brands-solid.svg";
import logoCss from "../assests/css-brands-solid.svg";
import logoVite from "../assests/vite_logo_icon_249258.svg";
import logoDatabase from "../assests/database_39555.png";

const Expertises = () => {
  return (
    <div className="expertises">
      <h2 className="expertises__titulo">Linguagens & Frameworks</h2>
      <div className="expertises__content">
        <div className="expertises__content--ling">
          <img
            className="expertises__content--img"
            src={logoPython}
            alt=" Python"
          />
          <span className="expertises__content--leg">Python</span>
        </div>
        <div className="expertises__content--ling">
          <img
            className="expertises__content--img"
            src={logoJs}
            alt=" JavaScript"
          />
          <span className="expertises__content--leg">JavaScript</span>
        </div>
        <div className="expertises__content--ling">
          <img
            className="expertises__content--img"
            src={logoReact}
            alt="React"
          />
          <span className="expertises__content--leg">React</span>
        </div>
        <div className="expertises__content--ling">
          <img className="expertises__content--img" src={logoCss} alt="CSS" />
          <span className="expertises__content--leg">CSS</span>
        </div>
        <div className="expertises__content--ling">
          <img
            className="expertises__content--img1"
            src={logoVite}
            alt="Vite"
          />
          <span className="expertises__content--leg">Vite</span>
        </div>
        <div className="expertises__content--ling">
          <img
            className="expertises__content--img1"
            src={logoDatabase}
            alt="Database"
          />
          <span className="expertises__content--leg">Database</span>
        </div>
      </div>
    </div>
  );
};

export default Expertises;
