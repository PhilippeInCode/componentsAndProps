import React from 'react';

const Estado = ({ estado }) => {
    const estilo = {
        color: estado === "activo" ? "green" : "gray",
        fontWeight: "bold",
        fontSize: "18px"
    };

    return <p style={estilo}>El estado es {estado}</p>;
};

export default Estado;
