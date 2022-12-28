import { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db, auth } from "../firebase/firebase-config";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
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
  const [loading, setLoading] = useState(true);
  const [imprimiendo, setImprimiendo] = useState(false);
  const [tickets, setTickets] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const [cargandoTickets, setCargandoTickets] = useState(false);

  const ticketsCollectionRef = collection(
    db,
    `${fechaHoy.getDate()}-${fechaHoy.getMonth() + 1}-${fechaHoy.getFullYear()}`
  );

  const navigate = useNavigate();

  const agregarSelecionados = (selecionado) => {
    /* let target = selecionados.filter(
      (item) => item.numero === selecionado.numero
    );

    if (target.length === 0) {
      let newSeleccionados = [...selecionados];
      newSeleccionados.push(selecionado);
      setSelecionados(newSeleccionados);
    } */
    setSelecionados([selecionado]);
  };

  const removerSelecionados = (numero) => {
    /* let index = selecionados.map((item) => item.numero).indexOf(numero);
    if (index !== -1) {
      let newSeleccionados = [...selecionados];
      let borrado = newSeleccionados.splice(index, 1);
      setSelecionados(newSeleccionados);
      console.log(borrado); */
    setSelecionados([]);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        setLogeado(true);
        navigate("/");
      })
      .catch((error) => {
        setErrorLogin(error.message);
        setTimeout(() => {
          setErrorLogin(false);
        }, 2000);
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
        newTickets.push({ ...doc.data(), id: doc.id });
      });
      setTickets(newTickets);
      setCargandoTickets(false);
    });
  };

  const onGetTickets = (callback) => {
    onSnapshot(ticketsCollectionRef, callback);
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
    let newTicket = {
      numero: Date.now(),
      total: calcularTotal(jubilados, menores, regular, paleontologos),
      cantidades: {
        jubilados: parseInt(jubilados),
        menores: parseInt(menores),
        regulares: parseInt(regular),
        paleontologos: parseInt(paleontologos),
      },
      fecha: moment(new Date()).format("DD/MM/YYYY"),
    };

    await addDoc(ticketsCollectionRef, newTicket).then((res) => {
      setEnviando(false);
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
        setSelecionados([newTicket]);
        navigate("/imprimir");
      }, 2500);
    });
  };

  const borrarTicket = async (id) => {
    await deleteDoc(
      doc(
        db,
        `${fechaHoy.getDate()}-${
          fechaHoy.getMonth() + 1
        }-${fechaHoy.getFullYear()}`,
        id
      )
    );
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
      onGetTickets(getTickets);
    });
  }, []);

  useEffect(() => {
    getTickets();
  }, [fechaHoy]);

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
        setFechaHoy,
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
        agregarSelecionados,
        selecionados,
        removerSelecionados,
        setImprimiendo,
        imprimiendo,
        setSelecionados,
        borrarTicket,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Provider;
