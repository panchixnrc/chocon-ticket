import { useContext } from "react";
import { Link } from "react-router-dom";
import userFoto from "../assets/user.svg";
import { AppContext } from "../context/Provider";

const Navbar = () => {
  const context = useContext(AppContext);
  const { user, logout } = context;

  const handleLogOut = async () => {
    await logout();
  };

  return (
    <div className="w-full min-h-16  bg-primary text-white grid grid-cols-3 place-items-center z-10">
      <Link className="" to={"/"}>
        <h1 className="text-center text-2xl ml-4 h-full">Control de Ingreso</h1>
      </Link>

      <div className="grid grid-cols-3 place-items-center ">
        <Link className="btn btn-primary text-white" to={"/"}>
          Inicio
        </Link>
        <Link className="btn btn-primary text-white" to={"/registro-usuario"}>
          Registrar usuario
        </Link>
        <button onClick={handleLogOut} className="btn btn-primary text-white">
          Cerrar sesion
        </button>
      </div>
      <div className="flex items-center">
        {user && (
          <>
            <img
              className="h-10 m-auto mask-circle mask border-blue-700 drop-shadow-xl"
              src={userFoto}
              alt="user"
            />
            <p className="pl-2">{user.email}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
