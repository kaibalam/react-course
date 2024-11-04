import React, { useState } from 'react';

const RequestComponent = () => {
    const [controller, setController] = useState(null);

    const handleRequest = () => {
        const newController = new AbortController();
        setController(newController);

        fetch('https://api.example.com/data', { signal: newController.signal })
            .then(response => response.json())
            .then(data => {
                // Procesa la respuesta del request completado
                console.log(data);
            })
            .catch(error => {
                // Maneja los errores o la cancelación del request
                if (error.name === 'AbortError') {
                    console.log('Request cancelado:', error.message);
                } else {
                    console.log('Error en el request:', error.message);
                }
            });
    };

    const cancelRequest = () => {
        if (controller) {
            controller.abort();
            setController(null);
        }
    };

    return (
        <div>
            <button onClick={handleRequest}>Realizar Request</button>
            <button onClick={cancelRequest}>Cancelar Request</button>
        </div>
    );
};

export default RequestComponent;
