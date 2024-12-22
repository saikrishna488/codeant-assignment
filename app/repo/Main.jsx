"use client";
import React from "react";
import { RefreshCw, Plus, Search, HardDrive } from "lucide-react";
import toast from "react-hot-toast";

const repositories = [
    {
      id: 1,
      name: "Design-system",
      visibility: "Public",
      language: "React",
      languageColor: "bg-blue-500",
      size: "7320 KB",
      updatedAt: "2 days ago"
    },
    {
      id: 2,
      name: "E-commerce Platform",
      visibility: "Private",
      language: "TypeScript",
      languageColor: "bg-blue-700",
      size: "12480 KB",
      updatedAt: "5 hours ago"
    },
    {
      id: 3,
      name: "Marketing Website",
      visibility: "Public",
      language: "JavaScript",
      languageColor: "bg-yellow-400",
      size: "5240 KB",
      updatedAt: "1 week ago"
    },
    {
      id: 4,
      name: "Mobile App",
      visibility: "Private",
      language: "Swift",
      languageColor: "bg-orange-500",
      size: "15640 KB",
      updatedAt: "3 days ago"
    },
    {
      id: 5,
      name: "Analytics Dashboard",
      visibility: "Public",
      language: "Python",
      languageColor: "bg-green-600",
      size: "4280 KB",
      updatedAt: "12 hours ago"
    },
    {
      id: 6,
      name: "Authentication Service",
      visibility: "Private",
      language: "Go",
      languageColor: "bg-cyan-500",
      size: "3150 KB",
      updatedAt: "4 days ago"
    },
    {
      id: 7,
      name: "Documentation Site",
      visibility: "Public",
      language: "Vue",
      languageColor: "bg-emerald-500",
      size: "2890 KB",
      updatedAt: "1 day ago"
    },
    {
      id: 8,
      name: "API Gateway",
      visibility: "Private",
      language: "Node.js",
      languageColor: "bg-green-500",
      size: "6420 KB",
      updatedAt: "6 hours ago"
    }
  ];

const RepositoryCard = ({ repo }) => (
  <div
    onClick={() => toast("Demo Item", { icon: "👏" })}
    className="p-4 sm:p-6 border rounded-lg hover:shadow-md transition-shadow mb-4 bg-white"
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900">{repo.name}</h3>
        <span
          className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full ${
            repo.visibility === "Public"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {repo.visibility}
        </span>
      </div>
    </div>
    <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${repo.languageColor}`}></span>
        {repo.language}
      </div>
      <div className="flex items-center gap-2">
        <HardDrive size={14} className="sm:w-4 sm:h-4" />
        {repo.size}
      </div>
      <div>Updated {repo.updatedAt}</div>
    </div>
  </div>
);

const Main = () => {
  return (
    <div className="lg:pt-10 pt-20 w-full h-[100vh] overflow-y-auto mx-auto bg-gray-50 p-4 ">
      <header className="mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Repositories</h1>
            <p className="text-sm sm:text-base text-gray-600">33 Total Repositories</p>
          </div>
          <div className="flex w-full sm:w-auto gap-2 sm:gap-3">
            <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <RefreshCw size={16} />
              <span className="hidden sm:inline">Refresh All</span>
              <span className="sm:hidden">Refresh</span>
            </button>
            <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 px-3 sm:px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
              <Plus size={16} />
              <span className="hidden sm:inline">Add Repository</span>
              <span className="sm:hidden">Add</span>
            </button>
          </div>
        </div>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search repositories..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </header>
      <main>
        {repositories.map((repo) => (
          <RepositoryCard key={repo.id} repo={repo} />
        ))}
      </main>
    </div>
  );
};

export default Main;