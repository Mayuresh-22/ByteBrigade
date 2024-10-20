import React from 'react';

export const Card = ({ children, className }) => {
  return <div className={`bg-white p-3 rounded-lg border ${className}`}>{children}</div>;
};

export const CardHeader = ({ children, className }) => {
  return <div className={`bg-white p-3 rounded-lg ${className}`}>{children}</div>;
};

export const CardContent = ({ children, className }) => {
  return <div className={`bg-white p-3 rounded-lg ${className}`}>{children}</div>;
};

export const CardFooter = ({ children, className }) => {
  return <div className={`bg-white p-3 rounded-lg ${className}`}>{children}</div>;
};