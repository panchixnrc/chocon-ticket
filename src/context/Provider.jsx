import { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
export const useMyContext = () => useContext(AppContext);

const Provider = ({ children }) => {
  const [precios, setPrecios] = useState({
    menor: 0,
    jubilado: 150,
    regular: 300,
    paleo: 100,
  });
  const [user, setUser] = useState(null);
  const [fechaHoy, setFechaHoy] = useState(new Date());
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [logeado, setLogeado] = useState(false);
  const [errorLogin, setErrorLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [cargandoTickets, setCargandoTickets] = useState(false);
  const ticketsCollectionRef = collection(
    db,
    `${fechaHoy.getDate()}-${fechaHoy.getMonth() + 1}-${fechaHoy.getFullYear()}`
  );

  const navigate = useNavigate();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setLogeado(true);
        navigate("/");
      })
      .catch((error) => {
        setErrorLogin(error.message);
      });
  };

  const logout = () => {
    signOut(auth);
    navigate("/login");
  };

  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  const q = query(ticketsCollectionRef, orderBy("fecha", "desc"));

  const getTickets = () => {
    setCargandoTickets(true);
    getDocs(q).then((snapshot) => {
      let newTickets = [];
      snapshot.docs.forEach((doc) => {
        newTickets.push(doc.data());
      });
      setTickets(newTickets);
      setCargandoTickets(false);
    });
  };

  const calcularTotal = (jubilados, menores, regulares, paleo) => {
    let total =
      jubilados * precios.jubilado +
      menores * precios.menor +
      regulares * precios.regular +
      paleo * precios.paleo;
    return total;
  };

  const agregarTicket = async (jubilados, menores, regular, paleontologos) => {
    console.log(jubilados, menores, regular, paleontologos);
    let newTicket = {
      id: Date.now(),
      total: calcularTotal(jubilados, menores, regular, paleontologos),
      cantidades: {
        jubilados: parseInt(jubilados),
        menores: parseInt(menores),
        regulares: parseInt(regular),
        paleontologos: parseInt(paleontologos),
      },
      fecha: new Date(),
    };

    await addDoc(ticketsCollectionRef, newTicket).then((res) => {
      setEnviando(false);
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
      }, 2500);
    });
  };

  const handleCambioPrecios = (tipo, precio) => {
    precio = parseInt(precio);
    switch (tipo) {
      case "menor":
        setPrecios({ ...precios, [tipo]: precio });

        break;
      case "mayor":
        setPrecios({ ...precios, [tipo]: precio });

        break;
      case "regular":
        setPrecios({ ...precios, [tipo]: precio });

        break;
      case "grupo":
        setPrecios({ ...precios, [tipo]: precio });

        break;
    }
  };
  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <AppContext.Provider
      value={{
        tickets,
        calcularTotal,
        precios,
        setPrecios,
        handleCambioPrecios,
        agregarTicket,
        fechaHoy,
        getTickets,
        enviado,
        setEnviando,
        enviando,
        cargandoTickets,
        logeado,
        login,
        errorLogin,
        user,
        logout,
        loading,
        resetPassword,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
