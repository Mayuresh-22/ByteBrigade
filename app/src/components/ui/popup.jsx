import React from 'react';

const PopUpBox = ({title, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 border border-blue-600 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopUpBox;
