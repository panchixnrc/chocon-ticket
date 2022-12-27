import TicketImprimible from "../components/TicketImprimible";

const Test = () => {
  return (
    <TicketImprimible
      key={211581454515}
      numero={515512512121}
      cantidades={{
        jubilados: 12,
        menores: 6,
        regulares: 3,
        paleontologos: 2,
      }}
      total={3400}
      fecha={"27/12/2022"}
    />
  );
};

export default Test;
