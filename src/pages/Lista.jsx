import React, { useContext, useEffect, useState, forwardRef } from "react";
import Ticket from "../components/Ticket";
import { AppContext } from "../context/Provider";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineEditCalendar } from "react-icons/md";

const Lista = () => {
  const [fecha, setFecha] = useState(new Date());
  const [disableCollapse, setDisableCollapse] = useState(false);
  const handleOpenDatePicker = () => {
    setDisableCollapse(true);
  };
  const handleCloseDatePicker = () => {
    setDisableCollapse(false);
  };
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button
      className="bg-primary flex m-auto w-1/4 p-1 justify-around items-center font-bold rounded border-primary-focus"
      onClick={onClick}
      ref={ref}
    >
      {value}
      <MdOutlineEditCalendar className="ml-2 text-white " />
    </button>
  ));

  const context = useContext(AppContext);
  const {
    tickets,
    fechaHoy,
    getTickets,
    setCargandoTickets,
    cargandoTickets,
    selecionados,
    setImprimiendo,
    setSelecionados,
    setFechaHoy,
  } = context;

  useEffect(() => {
    if (tickets.length < 0) {
      setCargandoTickets(true);
    }
    setImprimiendo(false);
    setSelecionados([]);
  }, []);

  const calcularTotal = () => {
    let totalSum = tickets.reduce((sum, ticket) => {
      return sum + ticket.total;
    }, 0);
    return totalSum;
  };

  return (
    <div className="overflow-y-scroll my-3 grid grid-flow-row h-screen">
      <div className="w-8/12 m-auto grid gap-4 h-fit row-span-1">
        <h1 className="text-3xl text-center my-5 text-primary font-bold">
          Lista de tickets
        </h1>
        <div className="bg-base-200 rounded-box text-center text-xl h-auto p-2">
          <div className="flex justify-center my-4">
            <DatePicker
              className="border border-black text-center rounded font-bold z-20"
              selected={fechaHoy}
              onChange={(date) => setFechaHoy(date)}
              dateFormat="dd/MM/yyyy"
              onCalendarClose={handleCloseDatePicker}
              onCalendarOpen={handleOpenDatePicker}
              customInput={<ExampleCustomInput />}
              calendarClassName="z-10"
              maxDate={new Date()}
            />
          </div>
          <div className="bg-white rounded w-1/2 m-auto my-4">
            <h3 className="">
              Total de tickets:{" "}
              <span className="text-blue-800 font-bold"> {tickets.length}</span>
            </h3>
            <h3 className="">
              Total recaudacion del dia:{" "}
              <span className="text-green-500 font-bold">
                $ {calcularTotal()}
              </span>
            </h3>
          </div>
        </div>
      </div>
      <div className="w-8/12 m-auto grid gap-4 row-span-3 mt-4">
        {tickets.length < 1 && (
          <div className="bg-base-200 text-center text-3xl p-5 font-bold">
            No hay tickets en el dia seleccionado.
          </div>
        )}
        {cargandoTickets ? (
          <div className="bg-base-200 text-center text-3xl p-5 font-bold">
            Cargando tickets...
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 ">
            {tickets.map((ticket) => (
              <Ticket
                id={ticket.id}
                key={ticket.id}
                numero={ticket.numero}
                total={ticket.total}
                cantidades={ticket.cantidades}
                fecha={ticket.fecha}
                disableCollapse={disableCollapse}
              />
            ))}
          </div>
        )}
        {selecionados.length > 0 && (
          <div className="toast toast-end mb-8 mr-2">
            <div className="alert bg-primary-focus">
              <div className="flex flex-col text-white">
                <Link
                  onClick={() => {
                    setImprimiendo(true);
                  }}
                  to={"/imprimir"}
                  className="font-bold btn btn-info bg-white hover:bg-primary-content hover:border-primary-content hover:text-white"
                >
                  Imprimir
                </Link>
                <span>{`${selecionados.length} tickets selecionados`}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lista;
