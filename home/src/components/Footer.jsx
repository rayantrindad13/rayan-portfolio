import React from "react";
import logoInsta from "../assests/square-instagram-brands-solid.svg";
import logoLinkdIn from "../assests/linkedin-brands-solid.svg";
import logoFace from "../assests/facebook-brands-solid.svg";
import logoGitHub from "../assests/square-github-brands-solid.svg";

const Footer = () => {
  return (
    <div className="footer__social-links">
      <a
        className="header__contato--text"
        href="https://www.instagram.com/rayantrindad13/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__contato--img" src={logoInsta} alt="Instagram" />
        Instagram
      </a>
      <a
        className="header__contato--text"
        href="https://www.linkedin.com/in/rayan-trindade-a52128238/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="header__contato--img"
          src={logoLinkdIn}
          alt="LinkedIn"
        />
        LinkedIn
      </a>
      <a
        className="header__contato--text"
        href="https://www.facebook.com/rayan.trindade"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__contato--img" src={logoFace} alt="Facebook" />
        Facebook
      </a>
      <a
        className="header__contato--text"
        href="https://github.com/rayantrindad13"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="header__contato--img" src={logoGitHub} alt="GitHub" />
        GitHub
      </a>
    </div>
  );
};

export default Footer;
