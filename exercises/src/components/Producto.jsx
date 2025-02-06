import React from 'react';
import "./Producto.jsx"; // Importamos el archivo de estilos

const Producto = ({ nombre, precio, descripcion }) => {
    return (
        <div className="card">
            <h3 className="title">✨ {nombre} ✨</h3>
            <p className="price">💰 Precio: <strong>${precio}</strong></p>
            <p className="description">{descripcion}</p>
            <button className="button">Añadir al carrito 🛒</button>
        </div>
    );
};

export default Producto;
