import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const Pricing: React.FC = () => {
  return (
    <section
      id="download"
      className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-900"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-400 animate-fade-in-down">
              Ready to Clip That?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl animate-fade-in-up">
              Get unlimited clips with our premium subscription - only $10/month
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 animate-fade-in">
            <a href="https://github.com/Tosvng/ClipThat/releases/download/3.3.0/ClipThat.msi">
              <Button className="w-full bg-teal-600 text-gray-900 hover:bg-teal-500 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.75rem_0_rgba(45,212,191,0.5)]">
                Secure the Bag
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </a>
            <p className="text-xs text-gray-300">
              Available for Windows 10 and above. macOS version coming soon,
              stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
