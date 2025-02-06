import React from 'react';

const Fecha = ({ fecha }) => {
    const formatearFecha = (fecha) => {
        const [day, month, year] = fecha.split("-");
        return `${day}/${month}/${year}`;
    };

    return <p>📅 Fecha: <strong>{formatearFecha(fecha)}</strong></p>;
};

export default Fecha;
