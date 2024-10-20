/*
  <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="h-8 w-8 p-0">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem>Edit</DropdownMenuItem>
      <DropdownMenuItem>Delete</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
*/

import React from 'react'

export const DropdownMenu = ({ children }) => {
  return (
    <div className="relative">
      {children}
    </div>
  )
}

export const DropdownMenuTrigger = ({ children }) => {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
      {children}
    </div>
  )
}

export const DropdownMenuContent = ({ children }) => {
  return (
    <div className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg" role="menu">
      {children}
    </div>
  )
}

export const DropdownMenuItem = ({ children }) => {
  return (
    <a href="#" className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700" role="menuitem">
      {children}
    </a>
  )
}