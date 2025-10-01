import React from 'react';

const RandomComponent = () => {
  const messages = [
    '¡Hola! Bienvenido a Bugster.',
    '¡Descubre ofertas increíbles!',
    '¡Tu carrito te espera!',
    '¡Compra ahora y ahorra!'
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  return (
    <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-2">Mensaje Aleatorio</h2>
      <p className="text-lg">{randomMessage}</p>
    </div>
  );
};

export default RandomComponent;