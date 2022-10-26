import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-auto px-2 absolute bg-primary-focus grid grid-rows-3 print:hidden">
      <div></div>

      <div>
        <ul className="grid grid-rows-3 gap-4 place-content-center">
          <Link
            className="btn btn-primary bg-primary-focus hover:bg-primary border-primary-focus p-0 text-white"
            to={"/agregar"}
          >
            Agregar
          </Link>
          <Link
            className="btn btn-primary bg-primary-focus hover:bg-primary border-primary-focus p-0 text-white"
            to={"/lista"}
          >
            Ver lista
          </Link>
          <Link
            className="btn btn-primary bg-primary-focus hover:bg-primary border-primary-focus p-0 text-white"
            to={"/precios"}
          >
            Ver Precios
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
