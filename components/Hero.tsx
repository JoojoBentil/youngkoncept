"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
          alt="Photography background"
          fill
          className="object-cover opacity-20"
          priority
          quality={90}
        />
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* Brand Name */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider mb-2">
          <span className="text-primary">Y</span>
          <span className="text-white">OUNG</span>
          <span className="text-white text-3xl md:text-5xl lg:text-6xl align-top">®</span>
        </h1>
        
        {/* Subtitle */}
        <div className="mb-6">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold tracking-[0.3em] text-white mb-4">
            PHOTOGRAPHY
          </h2>
          <div className="h-px w-48 md:w-64 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4"></div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-primary mb-8 font-light">
          we create to inspire...
        </p>

        {/* Call to Action */}
        <button
          onClick={scrollToBooking}
          className="bg-secondary hover:bg-primary text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-primary/50"
        >
          Book a Session
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
