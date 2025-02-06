import React from "react";

const Saludo = ({ hora }) => {
  let mensaje = "Buenas noches"; 

  if (hora < 12) {
    mensaje = "Buenos días";
  } else if (hora < 18) {
    mensaje = "Buenas tardes";
  }

  return <h2>{mensaje}</h2>;
};

export default Saludo;
