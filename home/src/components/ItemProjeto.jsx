import React from "react";

const ItemProjeto = ({ titulo, imagem, texto, link }) => {
  return (
    <div className="itemProjeto">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3 className="itemProjeto__titulo">{titulo}</h3>
        <div className="itemProjeto__content">
          <img className="itemProjeto__content--img" src={imagem} alt="" />
          <p className="itemProjeto__content--texto">{texto}</p>
        </div>
      </a>
    </div>
  );
};

export default ItemProjeto;
