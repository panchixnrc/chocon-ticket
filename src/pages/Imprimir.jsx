import { useContext, useEffect, useState } from "react";
import TicketImprimible from "../components/TicketImprimible";
import { AppContext } from "../context/Provider";

const Imprimir = () => {
  const context = useContext(AppContext);
  const { selecionados, setImprimiendo, dialog } = context;

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(selecionados);
    setImprimiendo(true);
    if (!dialog) {
      setTimeout(() => {
        window.print();
      }, 1000);
    }
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 w-full mx-auto my-2 p-2">
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
  );
};

export default Imprimir;
