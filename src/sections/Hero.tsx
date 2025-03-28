import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { ArrowRight } from "lucide-react";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <section className="max-w-8xl mx-auto py-12 md:py-24 lg:py-32 xl:py-48 min-h-[70vh] flex items-center justify-center relative overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Bottom more saturated gradient - full width triangle */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-[45%] "></div> */}

      {/* Bottom middle - narrowing effect */}
      {/* <div className="absolute bottom-[10%] left-[7%] right-[7%] h-[35%] bg-gradient-to-t from-emerald-600/20 via-emerald-700/8 to-transparent"></div>
      <div className="absolute bottom-[20%] left-[15%] right-[15%] h-[25%] bg-gradient-to-t from-emerald-600/15 via-emerald-700/5 to-transparent"></div>
      <div className="absolute bottom-[30%] left-[25%] right-[25%] h-[15%] bg-gradient-to-t from-emerald-600/10 to-transparent"></div>
      <div className="absolute bottom-[38%] left-[35%] right-[35%] h-[8%] bg-gradient-to-t from-emerald-600/8 to-transparent"></div> */}

      {/* Middle narrow part */}
      {/* <div className="absolute top-[48%] bottom-[48%] left-[42%] right-[42%] bg-emerald-600/6"></div> */}

      {/* Top narrowing effect - reverse */}
      {/* <div className="absolute top-[38%] left-[35%] right-[35%] h-[8%] bg-gradient-to-b from-emerald-600/8 to-transparent"></div>
      <div className="absolute top-[30%] left-[25%] right-[25%] h-[15%] bg-gradient-to-b from-emerald-600/10 to-transparent"></div>
      <div className="absolute top-[15%] left-[15%] right-[15%] h-[25%] bg-gradient-to-b from-emerald-600/15 via-emerald-700/5 to-transparent"></div>
      <div className="absolute top-[5%] left-[10%] right-[10%] h-[25%] bg-gradient-to-b from-emerald-600/20 via-emerald-700/8 to-transparent"></div> */}

      {/* Radial gradients to enhance glow effect */}
      <div className="absolute top-0 inset-x-0 h-[45%] bg-[radial-gradient(70%_30%_at_50%_0%,_var(--tw-gradient-stops))] from-emerald-600/20 via-emerald-800/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-0 inset-x-0 h-[40%] bg-[radial-gradient(80%_20%_at_50%_100%,_var(--tw-gradient-stops))] from-emerald-600/35 via-emerald-800/15 to-transparent pointer-events-none"></div>

      {/* Content container */}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-12 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-transparent bg-clip-text bg-gradient-to-br from-teal-200 to-emerald-600 animate-fade-in-down">
              Turn Your Gaming Sessions <br />
              <span className="text-gray-100">into YouTube Shorts</span>
            </h1>
            <p className="mx-auto max-w-3xl text-gray-300 md:text-xl animate-fade-in-up mt-6">
              Clip That automatically creates YouTube Shorts from your gaming
              highlights. Just play, say your custom keyword, and let us do the
              rest.
            </p>
          </div>
          <div className="space-x-4 animate-fade-in">
            <a href="https://github.com/Tosvng/ClipThat/releases/download/3.3.0/clip-that.msi">
              <Button className="bg-gradient-to-br from-emerald-500 to-teal-600 text-gray-900 hover:from-emerald-400 hover:to-teal-500 shadow-[0_0_0.5rem_0_rgba(20,184,166,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.75rem_0_rgba(20,184,166,0.5)]">
                Download Now
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <a href="#how-it-works">
              <Button
                variant="outline"
                className="border-emerald-600/50 text-emerald-400 backdrop-blur-sm bg-black/30 hover:bg-emerald-600/10 hover:text-emerald-300 shadow-[0_0_0.25rem_0_rgba(16,185,129,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.5rem_0_rgba(16,185,129,0.5)]"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
