import Provider from "./context/Provider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Layout from "./components/Layout";
import Ingreso from "./pages/Ingreso";
import Lista from "./pages/Lista";
import Precios from "./pages/Precios";
import RegistroUsuario from "./pages/RegistroUsuario";
import Login from "./pages/Login";
import RutaProtegida from "./pages/RutaProtegida";
import Recuperar from "./pages/Recuperar";
import Imprimir from "./pages/Imprimir";

function App() {
  return (
    <Router>
      <Provider>
        <Layout>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/imprimir" element={<Imprimir />} />
            <Route path="/recuperar" element={<Recuperar />} />
            <Route
              path="/registro-usuario"
              element={
                <RutaProtegida>
                  <RegistroUsuario />
                </RutaProtegida>
              }
            />
            <Route
              path="/precios"
              element={
                <RutaProtegida>
                  <Precios />
                </RutaProtegida>
              }
            />
            <Route
              path="/lista"
              element={
                <RutaProtegida>
                  <Lista />
                </RutaProtegida>
              }
            />
            <Route
              path="/agregar"
              element={
                <RutaProtegida>
                  <Ingreso />
                </RutaProtegida>
              }
            />
            <Route
              path="/"
              element={
                <RutaProtegida>
                  <Inicio />
                </RutaProtegida>
              }
            />
          </Routes>
        </Layout>
      </Provider>
    </Router>
  );
}

export default App;
