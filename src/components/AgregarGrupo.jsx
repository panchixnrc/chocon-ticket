import { useState, useContext, useEffect } from "react";

import { AppContext } from "../context/Provider";

const AgregarGrupo = () => {
  const [regular, setRegular] = useState(0);
  const [menores, setMenores] = useState(0);
  const [jubilados, setJubilados] = useState(0);
  const [paleontologos, setPaleontologos] = useState(0);
  const [errorVacios, setErrorVacios] = useState(false);

  const context = useContext(AppContext);
  const {
    precios,
    calcularTotal,
    agregarTicket,
    enviado,
    enviando,
    setEnviando,
    setFechaHoy,
  } = context;

  useEffect(() => {
    setFechaHoy(new Date());
  }, []);

  const checkVacios = () => {
    let sum =
      Number(regular) +
      Number(menores) +
      Number(jubilados) +
      Number(paleontologos);
    if (sum === 0) {
      return true;
    } else return false;
  };

  return (
    <div className="grid grid-rows-3 grid-cols-2 place-content-center w-4/12 m-auto gap-6 ">
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className="bg-primary text-white">Regular</span>
          <input
            min={0}
            onChange={(e) => {
              setRegular(e.target.value);
            }}
            type="number"
            className="input input-bordered"
            value={regular}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className="bg-primary text-white">Menores</span>
          <input
            min={0}
            onChange={(e) => {
              setMenores(e.target.value);
            }}
            type="number"
            className="input input-bordered"
            value={menores}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className="bg-primary text-white">
            Jubilados - Instituciones
          </span>
          <input
            min={0}
            onChange={(e) => {
              setJubilados(e.target.value);
            }}
            type="number"
            className="input input-bordered"
            value={jubilados}
          />
        </label>
      </div>
      <div className="form-control">
        <label className="input-group input-group-vertical">
          <span className="bg-primary text-white">Paleontologo por un dia</span>
          <input
            min={0}
            onChange={(e) => {
              setPaleontologos(e.target.value);
            }}
            type="number"
            className="input input-bordered"
            value={paleontologos}
          />
        </label>
      </div>
      <div className="w-full grid grid-cols-2 col-span-2 place-items-center bg-slate-200 text-2xl rounded">
        <p>Total:</p>{" "}
        <p className="font-bold text-success">
          ${calcularTotal(jubilados, menores, regular, paleontologos)}
        </p>
      </div>
      <button
        disabled={enviando}
        onClick={() => {
          if (!checkVacios()) {
            setEnviando(true);
            agregarTicket(jubilados, menores, regular, paleontologos);

            setJubilados(0);
            setMenores(0);
            setRegular(0);
            setPaleontologos(0);
          } else {
            setErrorVacios(true);
            setTimeout(() => {
              setErrorVacios(false);
            }, 2500);
          }
        }}
        className="btn btn-primary bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 col-span-2 w-1/2 m-auto text-white"
      >
        {enviando ? "Enviando..." : "Agregar"}
      </button>
      {errorVacios && (
        <div className="toast">
          <div className="alert alert-success bg-yellow-600 text-white mb-10">
            <div>
              <span>No se pueden agregar tickets vacios.</span>
            </div>
          </div>
        </div>
      )}
      {enviado && (
        <div className="toast">
          <div className="alert alert-success bg-green-600 text-white mb-10">
            <div>
              <span>Ticket agregado correctamente</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgregarGrupo;
