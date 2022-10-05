import { useState } from "react";
import AgregarGrupo from "./AgregarGrupo";
import AgregarIndividuo from "./AgregarIndividuo";

const Agregar = () => {
  const [individuo, setIndividuo] = useState(false);
  const [grupo, setGrupo] = useState(false);

  return (
    <div className="w-9/12 bg-slate-300 h-auto min-h-[200px] m-auto flex flex-col items-center rounded">
      {/*  <div className="flex ">
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Grupo</span>
            <input
              onClick={() => {
                setIndividuo(false);
                setGrupo(!grupo);
              }}
              type="checkbox"
              className="toggle toggle-primary"
              checked={grupo}
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text mr-2">Individuo</span>
            <input
              onClick={() => {
                setGrupo(false);
                setIndividuo(!individuo);
              }}
              type="checkbox"
              className="toggle toggle-primary"
              checked={individuo}
            />
          </label>
        </div>
      </div> */}
      <div className="h-full row-span-3 my-10">
        {/*    {grupo && <AgregarGrupo />} */}
        <AgregarIndividuo />
      </div>
    </div>
  );
};

export default Agregar;
