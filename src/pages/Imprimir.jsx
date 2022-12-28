import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketImprimible from "../components/TicketImprimible";
import { AppContext } from "../context/Provider";
import { TbPrinter } from "react-icons/tb";

const Imprimir = () => {
  const context = useContext(AppContext);
  const { selecionados, setImprimiendo, dialog } = context;

  const [tickets, setTickets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setTickets(selecionados);
    setImprimiendo(true);
    if (!dialog) {
      setTimeout(() => {
        window.print();
        navigate("/lista");
      }, 1000);
    }
  }, []);

  return (
    <>
      <div className="no-imprimible w-full h-screen bg-white flex items-center justify-center">
        <h1 className="text-6xl text-black">IMPRIMIENDO...</h1>
        <TbPrinter className="text-6xl text-black animate-bounce" />
      </div>

      <div className="imprimible">
        {tickets?.map((ticket) => (
          <TicketImprimible
            key={ticket.numero}
            numero={ticket.numero}
            cantidades={ticket.cantidades}
            total={ticket.total}
            fecha={ticket.fecha}
          />
        ))}
      </div>
    </>
  );
};

export default Imprimir;
