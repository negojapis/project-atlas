"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Lab from "@/components/Lab";
import Websites from "@/components/Websites";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhoIsMastim from "@/components/WhoIsMastim";
import Footer from "@/components/Footer";
import SectionBranchBridge from "@/components/SectionBranchBridge";
import Atmosphere from "@/components/Atmosphere";
import Loader from "@/components/Loader";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-bg-base text-text-primary selection:bg-border-active selection:text-text-primary font-sans overflow-x-hidden pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)]">
      
      {/* Global Atmosphere */}
      <Atmosphere isLoading={isLoading} />

      {/* Cinematic Loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <div className="relative z-content flex flex-col">
          <Hero />
          
          <About />
          <SectionBranchBridge variant="right" />
          <Lab />
          <SectionBranchBridge variant="left" />
          <Websites />
          <SectionBranchBridge variant="right" scale={0.92} />
          <Services />
          <SectionBranchBridge variant="left" scale={0.95} />
          <Testimonials />
          <SectionBranchBridge variant="right" />
          <WhoIsMastim />
          <SectionBranchBridge variant="left" />
          <Footer />
        </div>
      )}
    </main>
  );
}
