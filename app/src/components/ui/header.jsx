import React from "react";
import { SearchBar } from "./search-bar";
import { Button } from "./button";
import { BellDot, LogIn } from "lucide-react";

export const Header = ({ children }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-10">
      {children}
    </header>
  );
}

export const SearchBarHeader = () => {
  return (
    <div className="flex items-center">
      <SearchBar type="text" placeholder="Search..." className="w-64 mr-4" />
    </div>
  );
}

export const NotificationButton = () => {
  return (
    <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100">
      <BellDot className="h-6 w-6" />
    </Button>
  );
}

export const LoginButton = () => {
  return (
    <Button variant="ghost" size="icon" className="text-blue-600 hover:bg-blue-100">
      <LogIn className="h-5 w-5" />
      <span className="sr-only">Login</span>
    </Button>
  );
}

export const HeaderActions = ({ children }) => {
  return (
    <div className="flex items-center">
      {children}
    </div>
  );
}

export const NewPostButton = () => {
  return (
    <Button className="bg-blue-500 text-white" size="md">
      New Post
    </Button>
  );
}

export const UserProfileButton = ({ user }) => {
  return (
    <Button className="bg-white text-gray-900">
      <img src='vite.svg' alt='profile' className="h-6 w-6 rounded-full" />
    </Button>
  );
}