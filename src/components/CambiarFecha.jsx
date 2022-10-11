import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CambiarFecha = () => {
  const [fecha, setFecha] = useState(new Date());

  const handlePick = () => {
    console.log(fecha);
  };

  return (
    <div className="w-full h-72 bg-base-300">
      <DatePicker
        className="border border-black"
        selected={fecha}
        onChange={(date) => setFecha(date)}
        dateFormat="dd/MM/yyyy"
        onCalendarClose={handlePick}
      />
    </div>
  );
};

export default CambiarFecha;
