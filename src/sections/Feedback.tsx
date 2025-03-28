import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export const Feedback: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2 mb-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-400 animate-fade-in-down">
              Help Us Improve
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl animate-fade-in-up">
              Clip That is still in its villain arc (beta). Help us become the
              main character by dropping your hot takes and feature wishlist.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2 animate-fade-in">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-300 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)]"
            />
            <Input
              type="text"
              placeholder="Your feedback or feature request"
              className="bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-300 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)]"
            />
            <Button className="w-full bg-teal-600 text-gray-900 hover:bg-teal-500 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.75rem_0_rgba(45,212,191,0.5)]">
              Submit Feedback
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
