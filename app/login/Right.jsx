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

  const saasProviders = [
    {
      name: "Github",
      icon: FaGithub,
      class: "bg-gray-900 hover:bg-gray-800",
    },
    {
      name: "Bitbucket",
      icon: FaBitbucket,
      class: "bg-blue-700 hover:bg-blue-600",
    },
    {
      name: "Azure Devops",
      icon: VscAzure,
      class: "bg-blue-500 hover:bg-blue-400",
    },
    {
      name: "Gitlabs",
      icon: FaGitlab,
      class: "bg-orange-600 hover:bg-orange-500",
    },
  ];

  const selfHostedProviders = [
    {
      name: "Self Hosted Gitlab",
      icon: FaGitlab,
      class: "bg-orange-600 hover:bg-orange-500",
    },
    {
      name: "SSO",
      icon: FaKey,
      class: "bg-gray-800 hover:bg-gray-700",
    },
  ];

  return (
    <div className="min-h-screen w-full lg:w-1/2 bg-gradient-to-br from-blue-50 via-indigo-50 to-white">
      <div className="flex min-h-screen w-full items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-2xl bg-white/80 p-6 shadow-xl backdrop-blur-xl backdrop-filter transition-all duration-300 hover:shadow-2xl">
            {/* Background Decoration */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/50" />
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-indigo-100/50" />
            
            {/* Content */}
            <div className="relative">
              {/* Logo Section */}
              <div className="mb-8 transform cursor-pointer text-center transition-transform hover:scale-105">
                <div className="flex items-center justify-center gap-3">
                  <Logo />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
                    CodeAnt AI
                  </span>
                </div>
              </div>

              {/* Welcome Text */}
              <div className="mb-10 text-center">
                <h4 className="mb-2 text-3xl font-bold text-gray-800">
                  Welcome Back
                </h4>
                <p className="text-sm text-gray-600">
                  Choose your preferred platform to continue
                </p>
              </div>

              {/* Platform Toggle */}
              <div className="mb-8 rounded-xl bg-gray-200 p-1.5 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-2">
                  {["SAAS", "Self"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelected(type)}
                      className={`flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-medium transition-all duration-300 ${
                        selected === type
                          ? "bg-white text-blue-600 shadow-md"
                          : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                      }`}
                    >
                      {type === "SAAS" ? (
                        <BsCloud className="text-lg" />
                      ) : (
                        <BsServer className="text-lg" />
                      )}
                      {type === "SAAS" ? "SAAS" : "Self Hosted"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sign-in Options */}
              <div className="space-y-3">
                {(selected === "SAAS" ? saasProviders : selfHostedProviders).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => router.push("/repo")}
                    className={`group relative w-full overflow-hidden rounded-xl ${provider.class} p-3.5 transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="relative flex items-center justify-center gap-3 text-white">
                      <provider.icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                      <span className="text-sm font-medium">
                        Sign in with {provider.name}
                      </span>
                    </div>
                    <div className="absolute inset-0 -z-10 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <small className="text-sm text-gray-500">
              By signing up you agree to the{" "}
              <a
                href="#"
                className="font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline"
              >
                Privacy Policy
              </a>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right;