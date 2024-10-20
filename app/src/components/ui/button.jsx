import React from 'react'

export const Button = ({ children, className, variant, size, ...props }) => {
  const variants = {
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-gray-200 text-gray-900',
    outline: 'border border-gray-300 text-gray-900',
    ghost: 'text-gray-900'
  }

  const sizes = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
    icon: 'p-2'
  }

  return (
    <button
      className={`inline-flex items-center justify-center rounded ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
};