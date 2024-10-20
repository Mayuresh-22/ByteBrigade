import React from "react";
import { Button } from "./button";
import { Search } from "lucide-react";

export const SearchBar = ({ className, ...props }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <input
        type="text"
        className="w-64 px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:ring-blue-400"
        placeholder="Search..."
        {...props}
      />
      <Button variant="outline" className="border-blue-300 text-blue-600 hover:bg-blue-100" size="icon">
        <Search className="h-6 w-6" />
        <span className="sr-only">Search</span>
      </Button>
    </div>
  );
}