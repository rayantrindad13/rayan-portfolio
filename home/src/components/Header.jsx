import React from "react";
import fotoRay from "../assests/rayanSelfie.jpeg";
import logoTelefone from "../assests/square-phone-light.svg";
import logoMail from "../assests/envelope-solid.svg";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__img-container">
          <img className="header__img" src={fotoRay} alt="Foto do Rayan" />
        </div>
        <a className="header__link" href="/">
          <h1>Rayan Alcantara</h1>
        </a>

        <p className="header__contato--text">
          <img
            className="header__contato--img"
            src={logoTelefone}
            alt="Telefone:"
          />
          (21)99646-7752
        </p>
        <p className="header__contato--text">
          <img className="header__contato--img" src={logoMail} alt="E-mail" />
          rayanats.contato@gmail.com
        </p>
      </div>
    </>
  );
};

export default Header;
