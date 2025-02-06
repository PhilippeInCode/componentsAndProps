import React from 'react';

const RecuentoPalabras = ({ texto }) => {
    // Contar palabras dividiendo por espacios y filtrando vacíos
    const contarPalabras = (texto) => {
        return texto.trim().split(/\s+/).filter(palabra => palabra !== "").length;
    };

    return (
        <div>
            <p>Texto ingresado: <strong>{texto}</strong></p>
            <p>El texto tiene <strong>{contarPalabras(texto)}</strong> palabras.</p>
        </div>
    );
};

export default RecuentoPalabras;
