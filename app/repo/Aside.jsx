"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, User } from "lucide-react";
import Logo from "../components/Logo";
import {
  Box,
  Code,
  Shield,
  HelpCircle,
  Settings,
  LifeBuoy,
  LogOut,
} from "lucide-react";

const Aside = () => {
  const [selected, setSelected] = useState("Repositories");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Saikrishna");

  const menuItems = [
    { id: "repositories", label: "Repositories", icon: Box },
    { id: "code-review", label: "AI Code Review", icon: Code },
    { id: "security", label: "Cloud Security", icon: Shield },
    { id: "help", label: "How to use", icon: HelpCircle },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const userOptions = ["Saikrishna", "Rohan"];

  return (
    <div className="w-[300px] relative h-full hidden lg:block border-r px-2 border-slate-200 shadow-sm ">
      <aside className="fixed h-screen lg:flex flex-col hidden bg-white ">
        <header className="p-6 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-6">
            <Logo />
            <h1 className="text-xl font-semibold text-slate-900">CodeAnt AI</h1>
          </div>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-center gap-3 px-4 py-2 text-slate-900 bg-slate-50 rounded-lg hover:bg-slate-100 focus:outline-none"
            >
              <User size={20} />
              <span className="font-medium">{selectedUser}</span>
              {isDropdownOpen ? (
                <ChevronUp className="w-5 h-5 text-slate-700" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-700" />
              )}
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-lg">
                {userOptions.map((user) => (
                  <li key={user}>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-2 gap-2 flex items-center text-slate-900 hover:bg-slate-100 rounded-lg"
                    >
                      <User size={20} />
                      {user}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </header>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selected === item.label;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => setSelected(item.label)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                      isSelected
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : "text-slate-900 hover:bg-slate-50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isSelected ? "text-blue-700" : "text-slate-700"
                      }`}
                    />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <footer className="p-4 border-t border-slate-200">
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-900 hover:bg-slate-50 rounded-lg transition-all">
              <LifeBuoy className="w-5 h-5 text-slate-700" />
              Support
            </button>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-700 hover:bg-red-50 rounded-lg transition-all">
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </footer>
      </aside>
    </div>
  );
};

export default Aside;
