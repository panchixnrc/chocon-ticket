import { useContext, useState } from "react";
import { AppContext } from "../context/Provider";

const CambiarPrecio = () => {
  const context = useContext(AppContext);
  const { precios, handleCambioPrecios } = context;

  return (
    <div className="w-9/12 bg-slate-300 h-[300px] min-h-[200px] m-auto grid grid-cols-2 grid-rows-3 place-items-center rounded">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Regular</span>
        </label>
        <label className="input-group">
          <span className="bg-primary text-white">$</span>
          <input
            onChange={(e) => {
              handleCambioPrecios("regular", e.target.value);
            }}
            value={precios.regular}
            type="number"
            placeholder="100"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Menor</span>
        </label>
        <label className="input-group">
          <span className="bg-primary text-white">$</span>
          <input
            onChange={(e) => {
              handleCambioPrecios("menor", e.target.value);
            }}
            value={precios.menor}
            type="number"
            placeholder="100"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Jubilados / Instituciones</span>
        </label>
        <label className="input-group">
          <span className="bg-primary text-white">$</span>
          <input
            onChange={(e) => {
              handleCambioPrecios("mayor", e.target.value);
            }}
            value={precios.jubilado}
            type="number"
            placeholder="100"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Paleontologos por un dia</span>
        </label>
        <label className="input-group">
          <span className="bg-primary text-white">$</span>
          <input
            onChange={(e) => {
              handleCambioPrecios("grupo", e.target.value);
            }}
            value={precios.paleo}
            type="number"
            placeholder="100"
            className="input input-bordered"
          />
        </label>
      </div>
      <div className="bg-slate-100 h-auto my-5 p-3 rounded italic col-span-2">
        Para modificar los precios cambiar el valor de la correspondiente
        casilla.
      </div>
    </div>
  );
};

export default CambiarPrecio;
