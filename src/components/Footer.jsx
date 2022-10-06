import React from "react";
import copade from "../assets/copade-logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-primary h-12 z-10 flex justify-end items-center text-white pr-10">
      Desarrollado por{" "}
      <a
        href="https://fsepulveda.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-right italic flex items-center "
      >
        <span className="underline mx-1"> Francisco Sepulveda</span>
      </a>
      para{" "}
      <a
        href="https://www.copade.gob.ar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={copade} alt="" className="w-10 p-1" />
      </a>
      - 2022
    </div>
  );
};

export default Footer;
