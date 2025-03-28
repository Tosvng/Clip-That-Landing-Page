import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
      <p className="text-xs text-gray-300">
        © 2024 Clip That. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <a className="text-xs hover:text-teal-400 transition-colors" href="#">
          Terms of Service
        </a>
        <a className="text-xs hover:text-teal-400 transition-colors" href="#">
          Privacy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
