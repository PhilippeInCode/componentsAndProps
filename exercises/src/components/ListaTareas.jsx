import React from "react";

const ListaTareas = ({ tareas }) => {
  return (
    <div>
      <h3>Lista de Tareas</h3>
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>{tarea}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
