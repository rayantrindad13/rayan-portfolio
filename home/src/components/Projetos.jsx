import React from "react";
import ItemProjeto from "./ItemProjeto";
import projetos from "./Dados";

const Projetos = () => {
  return (
    <div className="projetos">
      <h2 className="projetos__titulo">Meus Projetos</h2>
      <div className="projetos__content">
        {projetos.map((projeto) => (
          <ItemProjeto
            key={projeto.id}
            titulo={projeto.titulo}
            imagem={projeto.imagem}
            texto={projeto.texto}
            link={projeto.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
