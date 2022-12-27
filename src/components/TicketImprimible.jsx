import { useContext } from "react";
import { AppContext } from "../context/Provider";
import logoChocon from "../assets/logo-chocon.png";
const TicketImprimible = ({ numero, cantidades, total, fecha }) => {
  const context = useContext(AppContext);

  const { precios } = context;

  return (
    <div className=" w-full flex flex-col p-4">
      <div className="w-full flex items-center justify-center my-4">
        <img className="w-[80px]" src={logoChocon} alt="" srcset="" />
        Museo Municipal Ernesto Bachmann
      </div>
      <div className="flex justify-between flex-col">
        <div>
          <h2 className="flex justify-between items-center">
            Numero <p className="font-bold"># {numero}</p>{" "}
          </h2>
        </div>
        <h2 className="my-2 flex w-full justify-between items-center">
          Fecha <p>{fecha}</p>
        </h2>
      </div>
      <table>
        <thead className="border-b border-black">
          <tr>
            <th class="quantity">Cantidad</th>
            <th class="description">Tipo</th>
            <th class="price">$</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr className="border-b border-black">
            <td class="quantity">{cantidades.jubilados}</td>
            <td class="description">ABONO JUBILADOS</td>
            <td class="price">${+cantidades.jubilados * precios.jubilado}</td>
          </tr>
          <tr className="border-b border-black">
            <td class="quantity">{cantidades.menores}</td>
            <td class="description">ABONO MENORES</td>
            <td class="price">${+cantidades.menores * precios.menor}</td>
          </tr>
          <tr className="border-b border-black">
            <td class="quantity">{cantidades.regulares}</td>
            <td class="description">ABONO REGULAR</td>
            <td class="price">${+cantidades.regulares * precios.regular}</td>
          </tr>
          <tr className="border-b border-black">
            <td class="quantity">{cantidades.paleontologos}</td>
            <td class="description">ABONO PALEO</td>
            <td class="price">${+cantidades.paleontologos * precios.paleo}</td>
          </tr>
          {/*  <tr>
            <td class="quantity"></td>
            <td class="description">TOTAL</td>
            <td class="price">${total}</td>
          </tr> */}
        </tbody>
      </table>
      {/* <ul className="text-xl">
        <li>Jubilados x {cantidades.jubilados}</li>
        <li>Menores x {cantidades.menores}</li>
        <li>Regular x {cantidades.regulares}</li>
        <li>Paleontologo x {cantidades.paleontologos}</li>
      </ul> */}
      <h2 className="text-right text-lg my-5">
        Total: <strong className="text-4xl inline">$ {total}</strong>
      </h2>
    </div>
  );
};

export default TicketImprimible;
