"use client";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { 
  FiUser, 
  FiChevronDown, 
  FiChevronUp, 
  FiMenu, 
  FiX 
} from "react-icons/fi";
import { 
  BiGitRepoForked, 
  BiCodeAlt, 
  BiHelpCircle 
} from "react-icons/bi";
import { 
  IoShieldOutline, 
  IoSettingsOutline 
} from "react-icons/io5";
import { 
  RiCustomerService2Line, 
  RiLogoutBoxRLine 
} from "react-icons/ri";
import toast from "react-hot-toast";

const NavButton = ({ icon: Icon, children, onClick }) => (
  <button
    onClick={()=>toast("Demo option")}
    className="flex items-center gap-3 w-full px-4 py-3 text-gray-700  rounded-lg transition-colors hover:bg-gray-200 !important"
  >
    <Icon size={20} className="text-gray-500" />
    <span className="font-medium">{children}</span>
  </button>
);

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("Saikrishna");
  const userOptions = ["Saikrishna", "Rohan"];

  return (
    <nav className="lg:hidden fixed flex flex-col top-0 left-0 w-full bg-white border-b border-gray-200 z-20">
      {/* Main Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="font-semibold text-lg text-gray-900">CodeAnt AI</span>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {expanded ? (
            <FiX size={24} className="text-gray-600" />
          ) : (
            <FiMenu size={24} className="text-gray-600" />
          )}
        </button>
      </div>

      {/* Expanded Menu */}
      {expanded && (
        <div className="flex flex-col gap-4 p-4 border-t z-30 border-gray-200">
          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-gray-900 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-100 rounded-full">
                  <FiUser size={20} className="text-blue-600" />
                </div>
                <span className="font-medium">{selectedUser}</span>
              </div>
              {isDropdownOpen ? (
                <FiChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <FiChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* User Options Dropdown */}
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full mt-2 bg-white border border-gray-200 rounded-lg overflow-hidden">
                {userOptions.map((user) => (
                  <li key={user}>
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setIsDropdownOpen(false);
                      }}
                      className="w-full px-4 py-3 flex items-center gap-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-1.5 bg-blue-100 rounded-full">
                        <FiUser size={20} className="text-blue-600" />
                      </div>
                      {user}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Navigation Menu */}
          <div className="space-y-1">
            <NavButton icon={BiGitRepoForked}>Repositories</NavButton>
            <NavButton icon={BiCodeAlt}>AI Code Review</NavButton>
            <NavButton icon={IoShieldOutline}>Cloud Security</NavButton>
            <NavButton icon={BiHelpCircle}>How to use</NavButton>
            <NavButton icon={IoSettingsOutline}>Settings</NavButton>
            <NavButton icon={RiCustomerService2Line}>Support</NavButton>
            <NavButton icon={RiLogoutBoxRLine}>
              <span className="text-red-600">Logout</span>
            </NavButton>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;