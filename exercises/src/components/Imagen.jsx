import React from 'react';

const Imagen = ({ URL }) => {
    return (
        <div>
            <h3>Esta es Delia Derbyshire, pionera en la música electrónica</h3>
            <img 
            src={URL} 
            alt="Delia Derbyshire" 
            style={{ 
                width: "300px", 
                borderRadius: "10px" 
                }} />
        </div>
    );
}

export default Imagen;
