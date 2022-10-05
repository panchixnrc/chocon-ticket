import { useState, useContext, useEffect } from "react";

import { AppContext } from "../context/Provider";

const Ticket = ({ numero, cantidades, total, fecha }) => {
  const context = useContext(AppContext);
  const { precios, calcularTotal } = context;

  return (
    <div className="collapse border border-base-300 bg-base-100 rounded-box collapse-arrow min-h-fit">
      <input type="checkbox" />
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
  );
};

export default Ticket;
