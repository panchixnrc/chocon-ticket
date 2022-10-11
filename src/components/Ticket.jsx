import { useState, useContext } from "react";
import { TbPrinter } from "react-icons/tb";
import { RiDeleteBin2Line } from "react-icons/ri";

import { AppContext } from "../context/Provider";

const Ticket = ({ id, numero, cantidades, total, fecha, disableCollapse }) => {
  const context = useContext(AppContext);
  const { agregarSelecionados, removerSelecionados, borrarTicket, fechaHoy } =
    context;
  const [select, setSelect] = useState(false);
  const [fechaActual, setFechaActual] = useState(new Date());

  const manejarFechas = () => {
    fechaActual.setHours(0, 0, 0, 0);
    fechaHoy.setHours(0, 0, 0, 0);

    if (fechaActual.getTime() === fechaHoy.getTime()) {
      return true;
    }
    return false;
  };

  const handleDelete = () => {
    if (window.confirm("Quiere eliminar este ticket?")) {
      borrarTicket(id);
    }
  };

  const handleSelect = () => {
    if (!select) {
      let newSeleccionado = {
        numero: numero,
        cantidades: cantidades,
        total: total,
        fecha: fecha,
      };
      agregarSelecionados(newSeleccionado);
    } else {
      removerSelecionados(numero);
    }
    setSelect(!select);
  };

  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex">
        {manejarFechas() && (
          <button
            onClick={() => {
              handleDelete();
            }}
            className={`bg-red-600 border-red-600 mr-2 border p-1 rounded-box`}
          >
            <RiDeleteBin2Line className="text-white " size={"1.5rem"} />
          </button>
        )}
        <button
          onClick={() => {
            handleSelect();
          }}
          className={`${
            select ? "bg-primary-content" : ""
          } mr-2 border border-black p-1 rounded-box`}
        >
          {select ? (
            <TbPrinter className="text-white" size={"1.6rem"} />
          ) : (
            <TbPrinter size={"1.6rem"} />
          )}
        </button>
      </div>
      <div className="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow min-h-fit w-full">
        {!disableCollapse && <input type="checkbox" className="peer" />}
        <div className="collapse-title text-xl font-medium">
          <div className="flex justify-around">
            <h2>{fecha.toDate().toLocaleString("en-GB")}</h2>
            <div>
              <h2>
                Numero <strong># {numero}</strong>{" "}
              </h2>
            </div>
            <h2 className="text-right text-lg">
              Total: <strong className="text-xl">$ {total}</strong>
            </h2>
          </div>
        </div>
        <div className="collapse-content">
          <div className="border border-black grid grid-cols-2s p-4 w-full rounded-box">
            <div className="flex justify-between">
              <h2 className="font-bold mb-4">Cantidades</h2>
              <div>
                <h2>
                  Numero <strong># {numero}</strong>{" "}
                </h2>
              </div>
            </div>
            <ul className="text-xl">
              <li>Jubilados x {cantidades.jubilados}</li>
              <li>Menores x {cantidades.menores}</li>
              <li>Regular x {cantidades.regulares}</li>
              <li>Paleontologo x {cantidades.paleontologos}</li>
            </ul>
            <h2 className="text-right text-lg">
              Total: <strong className="text-4xl">$ {total}</strong>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
