"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Atmosphere from "@/components/Atmosphere";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-bg-base text-text-primary selection:bg-border-active selection:text-text-primary font-sans overflow-x-hidden pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      
      {/* Global Atmosphere (Identity before technology) */}
      <Atmosphere />

      {/* Cinematic Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="relative z-content flex flex-col">
          <Hero />
          
          {/* Chapter Transition (Respiro intencional) */}
          <div className="w-full h-[15vh] pointer-events-none" />
          

          <About />
          <Projects />
          <Footer />
        </div>
      )}
    </main>
  );
}
