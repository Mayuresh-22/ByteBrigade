import { BookOpen, BriefcaseIcon, Home, Inbox, Users } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ children }) => {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4">
        <h1 className="text-3xl font-bold text-gray-900">AEP</h1>
        <h3 className="text-base text-gray-500">for PCCOE</h3>
      </div>
      {children}
    </aside>
  );
}

export const SidebarMenuList = ({ children }) => {
  return <nav className="mt-8">
    <ul className="space-y-3 pr-5">
      {children}
    </ul>
  </nav>
};

export const SidebarMenuItem = ({ icon, children, link }) => {
  return (
    <Link to={link} className="flex items-center px-4 py-2 text-lg text-gray-900 hover:bg-gray-100">
      {icon}
      {children}
    </Link>
  );
};