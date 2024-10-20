import { BookOpen, BriefcaseIcon, Home, Inbox, Users } from "lucide-react";
import React from "react";

export const Sidebar = ({ children }) => {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-900">AlumniConnect</h1>
      </div>
      {children}
    </aside>
  );
}

export const SidebarMenuList = ({ children }) => {
  return <nav className="mt-8">
    <ul className="space-y-5">
      {children}
    </ul>
  </nav>
};

export const SidebarMenuItem = ({ icon, children, link }) => {
  return (
    <a href={link} className="flex items-center px-4 py-2 text-gray-900 hover:bg-gray-100">
      {icon}
      {children}
    </a>
  );
};