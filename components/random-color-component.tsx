import React, { useState } from 'react';

const RandomColorComponent = () => {
  const colors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-teal-500'
  ];

  const [currentColor, setCurrentColor] = useState(colors[Math.floor(Math.random() * colors.length)]);

  const changeColor = () => {
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setCurrentColor(newColor);
  };

  return (
    <div className={`p-6 ${currentColor} text-white rounded-lg shadow-md text-center transition-colors duration-300`}>
      <h2 className="text-2xl font-bold mb-4">Color Aleatorio</h2>
      <p className="text-lg mb-4">Haz clic para cambiar el color de fondo</p>
      <button
        onClick={changeColor}
        className="px-4 py-2 bg-white text-gray-800 rounded hover:bg-gray-200 transition-colors"
      >
        Cambiar Color
      </button>
    </div>
  );
};

export default RandomColorComponent;