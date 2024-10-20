import React from "react";

export const Input = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={label} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border border-gray-200 rounded px-3 py-2 mt-1"
      />
    </div>
  );
};