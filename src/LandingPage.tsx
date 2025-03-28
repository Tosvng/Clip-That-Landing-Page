import { Hero } from "./sections/Hero";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { Pricing } from "./sections/Pricing";
import { Feedback } from "./sections/Feedback";
import Footer from "./sections/Footer";
import Nav from "./sections/Nav";

export default function LandingPage() {
  return (
    <div className="flex flex-col w-full justify-center items-center min-h-screen bg-black text-gray-100 overflow-hidden">
      {/* Main gradient background */}
      {/* <div className="fixed inset-0 bg-gradient-to-b from-black via-gray-950 to-black pointer-events-none"></div> */}

      {/* Radial gradient effect at the bottom */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-950/20 via-emerald-950/5 to-transparent pointer-events-none"></div>

      {/* Subtle grid pattern overlay */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%230f766e' fill-opacity='0.02'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 20.83l2.83-2.83 1.41 1.41L1.41 22.24l2.83 2.83L1.41 27.9l-1.41-1.41 2.83-2.83L0 23.07v-2.24zm0-18.18V0h2.83l-1.41 1.41.82.82L0 4.23v-1.6zm0 12.07l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 28.83V0h40v40H0zm40-38.59L37.17 0l1.41 1.41 1.42-1.41 1.41 1.41-1.41 1.42.82.82L40 0zm0 38.59L40 38.59l-1.41 1.41-1.41-1.41-1.42 1.41-1.4-1.41 1.4-1.42-.82-.82L40 40zm-1.42-17.18l-1.41-1.4-1.4 1.4-1.42-1.4-1.4 1.4-2.83-2.83L40 20V0zm-18.18 18.18l2.83-2.83 1.4 1.41-2.82 2.82-1.41-1.4zm18.18 0l-2.83 2.82-1.4-1.41 2.82-2.82 1.41 1.41zm-18.18-18.18l1.41-1.41 1.41 1.4 1.42-1.4 1.4 1.4 2.83-2.83L20 20h20M20 0L0 20h20m0 20V0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          opacity: "0.03",
          pointerEvents: "none",
        }}
      ></div>

      <Nav />
      <main className="flex-1 flex flex-col w-full items-center justify-center relative z-10">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <Feedback />
      </main>
      <Footer />
    </div>
  );
}
