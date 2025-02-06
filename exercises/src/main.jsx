import React from "react";
import ReactDOM from "react-dom/client";
import Bienvenida from "./components/Bienvenida";
import Saludo from "./components/Saludo";
import ListaTareas from "./components/ListaTareas";
import ContadorLikes from "./components/ContadorLikes";
import Perfil from "./components/Perfil";
import Imagen from "./components/Imagen";
import Producto from "./components/Producto";
import Fecha from "./components/Fecha";
import RecuentoPalabras from "./components/RecuentoPalabras";
import Estado from "./components/Estado";

const horaActual = new Date().getHours(); 
const tareas = ["Comprar pan", "Estudiar React", "Llamar a mamá"];
const URL = "https://ichef.bbci.co.uk/images/ic/1920x1080/p06vyw09.jpg";
const fecha = "01-01-2025"; 
const texto = "Hola, ¿cómo estás?";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Bienvenida nombre="Juan" />
    <Saludo hora={horaActual} />
    <ListaTareas tareas={tareas}></ListaTareas>
    <ContadorLikes likes={56}></ContadorLikes>
    <Perfil nombre="Ana" edad={25} profesion="desarrolladora"></Perfil>
    <Imagen URL = {URL}></Imagen>
    <Producto nombre= "Laptop" precio={1500} descripcion="Laptop con procesador i7"></Producto>
    <Fecha fecha={fecha} />
    <RecuentoPalabras texto={texto}></RecuentoPalabras>
    <Estado estado="activo"></Estado>
    <Estado estado="inactivo"></Estado>
  </React.StrictMode>
);
