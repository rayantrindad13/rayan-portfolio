import React from "react";
import Sobre from "./Sobre";
import Expertises from "./Expertises";
import Projetos from "./Projetos";

const Main = () => {
  return (
    <>
      <div className="main">
        <Sobre />
        <Expertises />
        <Projetos />
      </div>
    </>
  );
};

export default Main;
