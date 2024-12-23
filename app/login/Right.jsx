"use client";
import React, { useState } from "react";
import Logo from "../components/Logo";
import { FaGithub, FaBitbucket, FaGitlab, FaKey } from "react-icons/fa";
import { BsCloud, BsServer } from "react-icons/bs";
import { VscAzure } from "react-icons/vsc";
import { useRouter } from "next/navigation";

const Right = () => {
  const [selected, setSelected] = useState("SAAS");
  const router = useRouter();

  return (
    <div className="lg:w-1/2 w-full min-h-screen bg-gradient-to-br from-blue-50 to-white flex lg:items-center justify-center lg:p-6 p-2">
      <div className="flex flex-col items-center w-full max-w-md">
        {/* Card wrapper */}
        <div className="w-full bg-white rounded-2xl shadow-xl p-4 backdrop-blur-sm border border-gray-100">
          {/* Header Section */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-3 mb-8 transform hover:scale-105 transition-transform">
              <Logo />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                CodeAnt AI
              </span>
            </div>
            <h4 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Welcome Back
              <span className="block text-base font-normal text-gray-500 mt-2">
                Choose your preferred platform to continue
              </span>
            </h4>
            {/* Plan Selection */}
            <div className="flex p-1.5 bg-gray-50 rounded-xl border border-gray-100">
              <button
                className={`flex-1 py-3 px-6 rounded-lg transition-all duration-300 font-medium flex text-sm items-center justify-center gap-2.5 ${
                  selected === "SAAS"
                    ? "bg-white text-blue-600 shadow-md transform -translate-y-0.5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setSelected("SAAS")}
              >
                <BsCloud className="text-lg" />
                SAAS
              </button>
              <button
                className={`flex-1 py-3 px-6 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2.5 ${
                  selected === "Self"
                    ? "bg-white text-blue-600 shadow-md transform -translate-y-0.5"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
                onClick={() => setSelected("Self")}
              >
                <BsServer className="text-lg" />
                Self Hosted
              </button>
            </div>
          </div>

          {/* Sign-in Options */}
          {selected === "SAAS" ? (
            <div className="w-full space-y-4">
              {[
                {
                  name: "Github",
                  icon: FaGithub,
                  bgColor: "bg-gray-900",
                  hoverColor: "hover:bg-gray-800",
                  ringColor: "focus:ring-gray-500",
                },
                {
                  name: "Bitbucket",
                  icon: FaBitbucket,
                  bgColor: "bg-blue-700",
                  hoverColor: "hover:bg-blue-600",
                  ringColor: "focus:ring-blue-400",
                },
                {
                  name: "Azure Devops",
                  icon: VscAzure,
                  bgColor: "bg-blue-500",
                  hoverColor: "hover:bg-blue-400",
                  ringColor: "focus:ring-blue-300",
                },
                {
                  name: "Gitlabs",
                  icon: FaGitlab,
                  bgColor: "bg-orange-600",
                  hoverColor: "hover:bg-orange-500",
                  ringColor: "focus:ring-orange-400",
                },
              ].map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => router.push("/repo")}
                  className={`w-full ${provider.bgColor} ${provider.hoverColor} text-white py-3.5 px-4 rounded-xl
                    font-medium text-sm transition-all duration-300 flex items-center justify-center gap-3
                    shadow-sm hover:shadow-md transform hover:-translate-y-0.5 
                    focus:ring-2 focus:ring-offset-2 ${provider.ringColor} outline-none`}
                >
                  <provider.icon className="text-xl" />
                  Sign in with {provider.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="w-full space-y-4">
              {[
                {
                  name: "Self Hosted Gitlab",
                  icon: FaGitlab,
                  bgColor: "bg-orange-600",
                  hoverColor: "hover:bg-orange-500",
                  ringColor: "focus:ring-orange-400",
                },
                {
                  name: "SSO",
                  icon: FaKey,
                  bgColor: "bg-gray-800",
                  hoverColor: "hover:bg-gray-700",
                  ringColor: "focus:ring-gray-500",
                },
              ].map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => router.push("/repo")}
                  className={`w-full ${provider.bgColor} ${provider.hoverColor} text-white py-3.5 px-4 rounded-xl
                    font-medium transition-all duration-300 flex items-center justify-center gap-3
                    shadow-sm hover:shadow-md transform hover:-translate-y-0.5 
                    focus:ring-2 focus:ring-offset-2 ${provider.ringColor} outline-none`}
                >
                  <provider.icon className="text-xl" />
                  Sign in with {provider.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <small className="text-gray-500">
            By signing up you agree to the{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 underline font-medium transition-colors"
            >
              Privacy Policy
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Right;
