import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Download,
  Gamepad2,
  Scissors,
  Youtube,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen bg-gray-950 text-gray-100">
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
      <main className="flex-1 flex flex-col w-full items-center justify-center">
        <section className="max-w-8xl mx-auto py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-12 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-teal-400 animate-fade-in-down">
                  Turn Your Gaming Sessions into YouTube Shorts
                </h1>
                <p className="mx-auto max-w-3xl text-gray-300 md:text-xl animate-fade-in-up">
                  Clip That automatically creates YouTube Shorts from your
                  gaming highlights. Just play, say your custom keyword, and let
                  us do the rest.
                </p>
              </div>
              <div className="space-x-4 animate-fade-in">
                <a href="https://github.com/Tosvng/ClipThat/releases/download/3.2.0/clip-that.msi">
                  <Button className="bg-teal-600 text-gray-900 hover:bg-teal-500 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.75rem_0_rgba(45,212,191,0.5)]">
                    Download Now
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#how-it-works">
                  <Button
                    variant="outline"
                    className="border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-gray-900 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.75rem_0_rgba(45,212,191,0.5)]"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-teal-400 animate-fade-in-down">
              Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 shadow-[0_0_0.3rem_0_rgba(45,212,191,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-fade-in-up">
                <Gamepad2 className="h-10 w-10 mb-2 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-400">
                  Automatic Clipping
                </h3>
                <p className="text-sm text-center text-gray-400">
                  Simply say your keyword and Clip That will instantly create a
                  short from your recent gameplay. It's seamless automation at
                  its finest.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 shadow-[0_0_0.3rem_0_rgba(45,212,191,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-fade-in-up animation-delay-200">
                <Youtube className="h-10 w-10 mb-2 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-400">
                  YouTube Shorts Ready
                </h3>
                <p className="text-sm text-center text-gray-400">
                  Each clip is perfectly optimized for YouTube Shorts format,
                  ready for instant sharing with your audience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-gray-800 shadow-[0_0_0.3rem_0_rgba(45,212,191,0.2)] transition-all duration-300 ease-in-out hover:shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-fade-in-up animation-delay-400">
                <Scissors className="h-10 w-10 mb-2 text-teal-400" />
                <h3 className="text-xl font-bold text-teal-400">
                  Easy Editing
                </h3>
                <p className="text-sm text-center text-gray-400">
                  No need to spend hours editing - we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                <h3 className="text-xl font-bold text-teal-400">
                  Vibe and Game
                </h3>
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
                  When you do something cold, yell your chosen word. Like "Clip"
                  or whatever tickles your pickle - we'll capture the moment
                  instantly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 animate-fade-in-up animation-delay-400">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-600 text-gray-900 shadow-[0_0_0.5rem_0_rgba(45,212,191,0.3)] animate-bounce animation-delay-400">
                  3
                </div>
                <h3 className="text-xl font-bold text-teal-400">
                  Flex on Main
                </h3>
                <p className="text-sm text-center text-gray-400">
                  Your clips are automatically transformed into multiple Shorts
                  formats, ready to share with your community.
                </p>
              </div>
            </div>
          </div>
        </section>
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
                  Get unlimited clips with our premium subscription - only
                  $10/month
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2 animate-fade-in">
                <a href="https://github.com/Tosvng/ClipThat/releases/download/3.2.0/ClipThat.msi">
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
        <section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2 mb-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-teal-400 animate-fade-in-down">
                  Help Us Improve
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl animate-fade-in-up">
                  Clip That is still in its villain arc (beta). Help us become
                  the main character by dropping your hot takes and feature
                  wishlist.
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
      </main>
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
    </div>
  );
}
