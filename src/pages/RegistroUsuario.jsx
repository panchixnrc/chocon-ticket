import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import { MdDangerous } from "react-icons/md";
import { auth } from "../firebase/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegistroUsuario = () => {
  const [verPass, setVerPass] = useState(false);
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(false);
  const [creado, setCreado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);

    createUserWithEmailAndPassword(auth, email, contraseña)
      .then((userCredential) => {
        setEnviando(false);

        setCreado(true);
        setContraseña("");
        setEmail("");
        setTimeout(() => {
          setCreado(false);
        }, 2500);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => {
          setError(false);
        }, 2500);
      });
  };
  return (
    <div className="h-full bg-base-200 grid grid-rows-4 place-items-center">
      <h1 className="text-4xl font-bold text-primary">Registrar usuario</h1>
      <div className="w-6/12 m-auto p-8 bg-base-100 rounded-box row-span-3">
        <div className="form-control">
          <label className="label">
            <span className="label-text italic text-lg">
              Email del nuevo usuario.
            </span>
          </label>
          <label className="input-group input-group-vertical my-4">
            <span className="bg-primary text-white">Email</span>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required={true}
              type="email"
              placeholder="unmail@mail.com"
              className="input input-bordered"
            />
          </label>
          <label className="label">
            <span className="label-text italic text-lg">
              Contraseña del nuevo usuario.
            </span>
          </label>
          <label className="input-group input-group-vertical h-auto my-4">
            <span className="bg-primary text-white">Contraseña</span>
            <div className="indicator w-full">
              <span
                onClick={() => {
                  setVerPass(!verPass);
                }}
                className="indicator-item indicator-bottom badge badge-primary cursor-pointer mr-10 h-auto p-1"
              >
                {verPass ? (
                  <AiOutlineEye className="text-white" size={"1.3rem"} />
                ) : (
                  <AiOutlineEyeInvisible
                    className="text-white"
                    size={"1.3rem"}
                  />
                )}
              </span>
              <input
                onChange={(e) => {
                  setContraseña(e.target.value);
                }}
                value={contraseña}
                required={true}
                type={`${verPass ? "text" : "password"}`}
                placeholder="info@site.com"
                className="input input-bordered w-full"
              />
            </div>
          </label>
          <button
            disabled={enviando}
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="btn btn-primary text-white my-4"
          >
            {enviando ? "Enviando..." : "Registrar"}
          </button>
          {creado && (
            <div className="toast">
              <div className="alert alert-info bg-green-500 text-white font-bold mb-8">
                <div>
                  <span className="flex items-center">
                    <FaUserCheck className="mr-2" size={"1.3rem"} />
                    Nuevo usuario registrado con exito.
                  </span>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="toast">
              <div className="alert alert-info bg-red-500 text-white font-bold mb-8">
                <div>
                  <span className="flex items-center">
                    <MdDangerous className="mr-2" size={"1.3rem"} />
                    {error}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistroUsuario;
