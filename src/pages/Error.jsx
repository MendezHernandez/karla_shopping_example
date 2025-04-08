import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h2>🌸 Página no encontrada</h2>
        <p style={{ fontSize: "larger" }}>
          La fragancia que buscas parece haberse desvanecido en el aire. Puede
          que el enlace esté roto o la página haya sido retirada de nuestra
          colección. Te invitamos a regresar al inicio y descubrir nuestras
          esencias más exclusivas.
        </p>
        <a href="/">Volver al inicio</a>
      </div>
    </>
  );
};

export default Error;
