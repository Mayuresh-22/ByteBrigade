import React from "react";

export const Input = ({ label, type, placeholder, value, onChange, className }) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
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

export const TextArea = ({ label, placeholder, value, onChange, className, inputClassName }) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <label htmlFor={label} className="text-sm font-semibold text-gray-600">
        {label}
      </label>
      <textarea
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={500}
        security="true"
        className={`rounded px-3 py-2 mt-1 ${inputClassName} focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-20`}
      />
    </div>
  );
};