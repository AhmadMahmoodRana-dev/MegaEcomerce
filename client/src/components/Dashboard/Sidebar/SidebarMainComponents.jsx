
import {Link} from "react-router-dom";
import React, { createContext, useContext, useState } from "react";
import { CgMoreVertical } from "react-icons/cg";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";



const SidebarContext = createContext(undefined);
export const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav
        className={`h-full flex flex-col bg-white border-r shadow-sm transition-all duration-300 ${
          expanded ? "w-[300px]" : "w-[70px]"
        }`}
      >
        <div className="p-4 pb-2 flex justify-between items-center">
          <h1
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "w-32" : "w-0"
            }`}
          >
            TECH
          </h1>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-label={expanded ? "Collapse Sidebar" : "Expand Sidebar"}
          >
            {expanded ? <LuChevronFirst /> : <LuChevronLast />}
          </button>
        </div>

        {/* Provide the expanded state to children via context */}
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="path-to-placeholder" // Add a placeholder image path here
            alt="Profile"
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`flex justify-between items-center overflow-hidden transition-all duration-300 ${
              expanded ? " w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <CgMoreVertical size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
};


export const SidebarItem = ({
  icon,
  text,
  active,
  alert,
  href
}) => {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error(
      "SidebarItem must be used within a SidebarContext.Provider"
    );
  }

  const { expanded } = context;

  return (
    <Link href={href}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-all duration-300 ${
        active
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
    </Link>
  );
};
