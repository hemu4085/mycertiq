// src/components/Topbar.jsx
import React from "react";
import { Bell, Settings, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Left: Brand + Back Link */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 transition"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <div className="h-8 w-8 rounded-xl bg-indigo-600 text-white grid place-items-center font-bold ml-4">
            M
          </div>
          <h1 className="font-semibold text-slate-800 tracking-tight">
            MyCertiQ Dashboard
          </h1>
        </div>

        {/* Right: User Actions */}
        <div className="flex items-center gap-5">
          <button
            className="relative hover:text-indigo-600 transition"
            title="Notifications"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-indigo-500"></span>
          </button>

          <button
            className="hover:text-indigo-600 transition"
            title="Settings"
          >
            <Settings className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
            <div className="h-8 w-8 rounded-full bg-indigo-100 grid place-items-center">
              <User className="h-4 w-4 text-indigo-600" />
            </div>
            <span className="text-sm font-medium text-slate-700">
              Dr. Asha Verma
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
