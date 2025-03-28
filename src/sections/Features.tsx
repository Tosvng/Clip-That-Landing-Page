import React from "react";
import { Scissors, Gamepad2, Youtube } from "lucide-react";

export const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 relative"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-emerald-800/5 to-transparent pointer-events-none"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-400 animate-fade-in-down">
            Features
          </h2>
          <p className="mt-4 text-gray-400">
            Game-changing tools for content creators
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-fade-in-up group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 mb-5 group-hover:from-emerald-500/30 group-hover:to-teal-600/30 transition-all duration-300">
              <Gamepad2 className="h-7 w-7 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
            </div>
            <h3 className="text-xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors duration-300">
              Automatic Clipping
            </h3>
            <p className="text-sm text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Simply say your keyword and ClipThat will create a short from your
              recent gameplay.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-fade-in-up animation-delay-200 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 mb-5 group-hover:from-emerald-500/30 group-hover:to-teal-600/30 transition-all duration-300">
              <Youtube className="h-7 w-7 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
            </div>
            <h3 className="text-xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors duration-300">
              YouTube Shorts Ready
            </h3>
            <p className="text-sm text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              Each clip is optimized for YouTube Shorts format.
            </p>
          </div>

          <div className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 shadow-[0_0_20px_rgba(16,185,129,0.1)] transition-all duration-300 ease-in-out hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-fade-in-up animation-delay-400 group">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-600/20 mb-5 group-hover:from-emerald-500/30 group-hover:to-teal-600/30 transition-all duration-300">
              <Scissors className="h-7 w-7 text-emerald-400 drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
            </div>
            <h3 className="text-xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors duration-300">
              Easy Editing
            </h3>
            <p className="text-sm text-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
              No need to spend hours editing - Just focus on your gameplay.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
