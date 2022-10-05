import { useContext } from "react";
import { AppContext } from "../context/Provider";
import { Navigate } from "react-router-dom";

const RutaProtegida = ({ children }) => {
  const context = useContext(AppContext);
  const { user, loading } = context;

  if (loading)
    return <h1 className="text-4xl text-center m-auto">Cargando...</h1>;
  if (!user) return <Navigate to="/login" />;
  return <>{children}</>;
};

export default RutaProtegida;
