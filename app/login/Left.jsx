import React from 'react';
import Logo from '../components/Logo';
import { Wrench, TrendingUp } from 'lucide-react';

const Left = () => {
  return (
    <div className="w-1/2 h-full lg:flex hidden bg-white items-center justify-center p-8">
      <div className="flex flex-col justify-between items-center max-w-md w-full border border-slate-100 rounded-2xl relative bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/* Header Section */}
        <header className="flex flex-col items-center w-full p-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <Logo />
            <h1 className="text-lg font-semibold text-slate-800  text-center">
              AI to Detect & Autofix Bad Code
            </h1>
          </div>
        </header>

        {/* Stats Section */}
        <footer className="flex justify-between px-8 py-6 w-full">
          {[
            { value: '30+', label: 'Language Support' },
            { value: '10k+', label: 'Developers' },
            { value: '100k+', label: 'Hours Saved' }
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-lg font-bold text-blue-600 mb-1">
                {stat.value}
              </span>
              <span className="text-sm text-slate-600">
                {stat.label}
              </span>
            </div>
          ))}
        </footer>

        {/* Floating Stats Card */}
        <div className="absolute -bottom-16 right-4 w-[300px]">
          <div className="relative bg-white p-5 rounded-xl   shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Wrench className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-slate-600 font-medium">Issues Fixed</span>
                <span className="text-xl font-bold text-slate-800">500k+</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 flex flex-col items-end">
              <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                <TrendingUp className="h-3 w-3" />
                <span className="text-sm font-medium">14%</span>
              </div>
              <small className="text-slate-500 mt-1">This week</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;