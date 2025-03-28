import React from "react";

export const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-teal-400 animate-fade-in-down">
          How It Works
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 animate-fade-in-up">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-gray-900 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-bounce">
              1
            </div>
            <h3 className="text-xl font-bold text-teal-400">Vibe and Game</h3>
            <p className="text-sm text-center text-gray-400">
              Focus on your gameplay while we handle the content creation.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-fade-in-up animation-delay-200">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-gray-900 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-bounce animation-delay-200">
              2
            </div>
            <h3 className="text-xl font-bold text-teal-400">
              Drop the Keyword
            </h3>
            <p className="text-sm text-center text-gray-400">
              When you do something cold, yell your chosen word. Like "Clip" or
              whatever tickles your pickle - we'll capture the moment instantly.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-fade-in-up animation-delay-400">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-gray-900 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-bounce animation-delay-400">
              3
            </div>
            <h3 className="text-xl font-bold text-teal-400">Flex on Main</h3>
            <p className="text-sm text-center text-gray-400">
              Your clips are automatically transformed into multiple Shorts
              formats, ready to share with your community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
