import React from "react";
import fotoRay from "../assests/RAYAN_SELFIE-removebg-preview.png";

const Sobre = () => {
  return (
    <>
      <div className="sobreMim">
        <div className="sobreMim__content">
          <h2>Sobre mim:</h2>
          <p className="sobreMim__content--texto">
            Jornalista formado, com MBA em Marketing & Comunicação Estratégica e
            estudante de Ciência da Computação. Apaixonado por tecnologia,
            inovação e estratégias de comunicação.
          </p>
        </div>
        <img className="sobre__img" src={fotoRay} alt="Foto do Rayan" />
      </div>
    </>
  );
};

export default Sobre;
