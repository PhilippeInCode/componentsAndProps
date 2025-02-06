import React from 'react';

const Perfil = ({ nombre, edad, profesion}) => {
    return (
        <div>
            <h3>
                Soy {nombre}, tengo {edad} y soy {profesion}
            </h3>
        </div>
    )
}

export default Perfil;