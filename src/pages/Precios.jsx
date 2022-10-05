import React from "react";
import CambiarPrecio from "../components/CambiarPrecio";

const Precios = () => {
  return (
    <>
      <h1 className="text-5xl text-center font-bold text-primary">
        Modificar Precios
      </h1>
      <div className="">
        <CambiarPrecio />
      </div>
    </>
  );
};

export default Precios;
