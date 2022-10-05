import React, { useContext, useEffect, useState } from "react";
import Ticket from "../components/Ticket";
import { AppContext } from "../context/Provider";

const Lista = () => {
  const context = useContext(AppContext);
  const { tickets, fechaHoy, getTickets, setCargandoTickets, cargandoTickets } =
    context;

  useEffect(() => {
    if (tickets.length < 0) {
      setCargandoTickets(true);
    }
    getTickets();
  }, []);

  const calcularTotal = () => {
    console.log(tickets);
    let totalSum = tickets.reduce((sum, ticket) => {
      return sum + ticket.total;
    }, 0);
    return totalSum;
  };

  return (
    <div className="overflow-y-scroll my-3">
      <h1 className="text-3xl text-center my-5 text-primary font-bold">
        Lista de tickets
      </h1>
      <div className="w-8/12 m-auto grid gap-4">
        <div className="bg-base-200 rounded-box text-center text-xl h-32">
          <h3 className="p-1 font-bold">
            {fechaHoy.toLocaleDateString("en-GB")}
          </h3>
          <h3 className=" w-1/2  m-auto p-1 bg-white rounded">
            Total de tickets:{" "}
            <span className="text-blue-800 font-bold"> {tickets.length}</span>
          </h3>
          <h3 className=" w-1/2  m-auto p-1 bg-white rounded">
            Total del dia:{" "}
            <span className="text-green-500 font-bold">
              $ {calcularTotal()}
            </span>
          </h3>
        </div>
        {cargandoTickets && (
          <div className="bg-base-200 text-center text-3xl p-5 font-bold">
            Cargando tickets...
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 ">
          {tickets?.map((ticket) => (
            <Ticket
              key={ticket.id}
              numero={ticket.id}
              total={ticket.total}
              cantidades={ticket.cantidades}
              fecha={ticket.fecha}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lista;
