import React from "react";
import AgregarGrupo from "../components/AgregarGrupo";
import Lista from "./Lista";
const Inicio = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-primary text-center">Ingreso</h1>
      <div>
        <AgregarGrupo />
      </div>
    </>
  );
};

export default Inicio;
