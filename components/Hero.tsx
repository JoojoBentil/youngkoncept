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
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070&auto=format&fit=crop"
          alt="Photography background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
          <span className="text-white">YOUNG</span>
          <span className="text-gold-400">KONCEPT</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gold-200 mb-8 font-light tracking-wide">
          We Capture Moments That Matter
        </p>
        <button
          onClick={scrollToBooking}
          className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold-500/50"
        >
          Book a Session
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-gold-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
