import { Scissors } from "lucide-react";
import React from "react";

const Nav: React.FC = () => {
  return (
    <header className="w-full px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
      <a className="flex items-center justify-center" href="#">
        <Scissors className="h-6 w-6 mr-2 text-teal-400 animate-spin-slow" />
        <span className="font-bold text-teal-400">Clip That</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a
          className="text-sm font-medium hover:text-teal-400 transition-colors"
          href="#features"
        >
          Features
        </a>
        <a
          className="text-sm font-medium hover:text-teal-400 transition-colors"
          href="#how-it-works"
        >
          How It Works
        </a>
        <a
          className="text-sm font-medium hover:text-teal-400 transition-colors"
          href="#download"
        >
          Download
        </a>
      </nav>
    </header>
  );
};

export default Nav;
