import { useContext } from "react";
import { AppContext } from "../context/Provider";
import { useNavigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const context = useContext(AppContext);
  const { user, loading } = context;
  const navigate = useNavigate();

  if (loading) {
    return <h1 className="text-4xl text-center m-auto">Cargando...</h1>;
  }
  if (!user) return <div>{navigate("/login")}</div>;
  return <>{children}</>;
};

export default RutaProtegida;
