import { useState, useContext, useEffect } from "react";
import { AppContext } from "../context/Provider";

const AgregarIndividuo = () => {
  const context = useContext(AppContext);
  const { precios } = context;

  const [cantidadPersonas, setCantidadPersonas] = useState(1);
  const [menor, setMenor] = useState(false);
  const [mayor, setMayor] = useState(false);
  const [grupo, setGrupo] = useState(false);
  const [precio, setPrecio] = useState(precios.regular);

  useEffect(() => {
    console.log("actualiza");
  }, [precios]);

  const handlePrecio = (tipo) => {
    switch (tipo) {
      case "menor":
        if (menor) {
          setPrecio(precios.regular);
          setMenor(!menor);
        } else {
          setMenor(!menor);
          setMayor(false);
          setGrupo(false);
          setPrecio(precios.menor);
        }
        break;

      case "mayor":
        if (mayor) {
          setPrecio(precios.regular);
          setMayor(!mayor);
        } else {
          setMenor(false);
          setMayor(!mayor);
          setGrupo(false);
          setPrecio(precios.mayor);
        }
        break;

      case "grupo":
        if (grupo) {
          setPrecio(precios.regular);
          setGrupo(!grupo);
        } else {
          setMenor(false);
          setMayor(false);
          setGrupo(!grupo);
          setPrecio(precios.grupo);
        }
        break;
    }
  };
  return (
    <div className="grid grid-cols-1 grid-rows-1 place-items-center">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Cantidad de individuos</span>
        </label>
        <label className="input-group">
          <input
            value={cantidadPersonas}
            onChange={(e) => {
              setCantidadPersonas(e.target.value);
            }}
            type="number"
            placeholder="1"
            className="input input-bordered"
          />
          <span className="bg-primary text-white">Personas</span>
        </label>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Adulto mayor (+60 años)</span>
            <input
              type="checkbox"
              onClick={() => {
                handlePrecio("mayor");
              }}
              checked={mayor}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Menor de edad (-6 años)</span>
            <input
              type="checkbox"
              onClick={() => handlePrecio("menor")}
              checked={menor}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Grupo / Delegacion / Contingente</span>
            <input
              type="checkbox"
              onClick={() => handlePrecio("grupo")}
              checked={grupo}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
        <div className="w-auto rounded text-center bg-info text-white">
          Total: ${" "}
          <span className="font-bold">{cantidadPersonas * precio}</span>{" "}
        </div>
        <button className="btn btn-success bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 my-4 text-white">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default AgregarIndividuo;
