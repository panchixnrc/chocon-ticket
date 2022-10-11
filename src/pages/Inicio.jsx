import { useContext } from "react";
import { AppContext } from "../context/Provider";
const Inicio = () => {
  const context = useContext(AppContext);
  const { user } = context;

  return (
    <>
      <h1 className="text-5xl my-4 text-center text-primary font-bold">
        Control de Ingreso Chocon
      </h1>
      <div className="w-10/12 m-auto">
        <div className="bg-base-200 h-72 p-5 rounded-box">
          <p className="text-2xl text-center text-primary font-bold">
            Bienvenido! {user.email}
          </p>
          <ul className="text-accent-content grid gap-4">
            <li>
              Para agregar tickets ve a la pestaña de{" "}
              <span className="italic font-bold">Agregar</span>
            </li>
            <li>
              Para ver la lista y el total diario ingrese en{" "}
              <span className="italic font-bold">Ver lista</span>{" "}
            </li>
            <li>
              Para modificar un precio ingrese en la pestaña{" "}
              <span className="italic font-bold">Ver precios</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Inicio;
