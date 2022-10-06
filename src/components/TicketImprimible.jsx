import React from "react";

const TicketImprimible = ({ numero, cantidades, total, fecha }) => {
  return (
    <div className="border border-black grid grid-cols-2s p-4 w-full rounded-box ">
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
  );
};

export default TicketImprimible;
