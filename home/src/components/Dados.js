// dados.js

// Adicionar novo projeto
/*
  {
    id: Ultimo +1,
    titulo: "Nome do projeto",
    imagem: "Caminho imagem no projeto",
    texto: "Descricao do projeto",
    link: "Link repositorio GitHub",
  },

*/

//Import para renderização das imagens no React
import img1 from "../assests/imgItemProj.png";

const projetos = [
  {
    id: 1,
    titulo: "Landing Page",
    imagem: img1,
    texto: "Landing page criada com JavaScript, React, CSS, Database e Vite.",
    link: "https://github.com/seu-repo",
  },
  {
    id: 2,
    titulo: "Desenvolvendo",
    imagem: "",
    texto: "Descrição do projeto em desenvolvimento",
    link: "",
  },
];

export default projetos;
