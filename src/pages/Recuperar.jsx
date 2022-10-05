import { useState, useContext } from "react";
import { AppContext } from "../context/Provider";
import { Link } from "react-router-dom";

const Recuperar = () => {
  const context = useContext(AppContext);
  const { resetPassword } = context;

  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2500);
    } else {
      resetPassword(email);
      setEnviado(true);
      setTimeout(() => {
        setEnviado(false);
      }, 2500);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <Link
        to={"/"}
        className="absolute btn btn-primary top-5 left-5 text-white"
      >
        Regresar
      </Link>
      <h1 className="text-4xl my-4 text-primary font-bold">Recuperar cuenta</h1>
      <div className="w-6/12 h-72 bg-base-200 flex flex-col items-center justify-center rounded-box">
        <div className="flex my-4">
          <div className="form-control">
            <label className="input-group ">
              <span className="bg-primary text-white">Email</span>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                type="email"
                placeholder="email@email.com.ar"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <button
            onClick={(e) => handleSubmit(e)}
            className="btn btn-primary text-white ml-2"
          >
            Enviar
          </button>
        </div>

        <div className="bg-base-100 p-2 italic w-8/12 rounded-box">
          Se enviara un mensaje a tu email registrado para restablecer la
          contraseña.{" "}
          <strong>No olvide revisar el correo SPAM / No deseado.</strong>
        </div>
      </div>
      {error && (
        <div className="toast">
          <div className="alert alert-success bg-red-500 text-white mb-8">
            <div>
              <span>Porfavor ingrese su email.</span>
            </div>
          </div>
        </div>
      )}
      {enviado && (
        <div className="toast">
          <div className="alert alert-success bg-green-500 text-white mb-8">
            <div>
              <span>Se ha enviado un mensaje a su correo.</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recuperar;
