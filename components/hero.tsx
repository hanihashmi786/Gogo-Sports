"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SarIcon } from "@/components/sar-icon";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Product Images */}
      <div
        className="absolute top-1/4 -left-20 w-64 h-64 opacity-20 blur-sm"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <Image
          src="/images/img-20260127-190203.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div
        className="absolute bottom-1/4 -right-20 w-64 h-64 opacity-20 blur-sm"
        style={{ transform: `translateY(${scrollY * -0.1}px)` }}
      >
        <Image
          src="/images/img-20260127-190517.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Premium Sports Gear in KSA
          </div>

          {/* Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <span className="text-foreground">GOGO</span>
            <br />
            <span className="text-primary">SPORTS</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Official match balls, training gear, uniforms & goalkeeper gloves —
            premium quality, priced in{" "}
            <span className="inline-flex items-center text-foreground font-semibold">
              <SarIcon size={18} className="mr-1" />
            </span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/shop">
              <Button size="lg" className="gap-2 text-lg px-8 h-14 group">
                Shop Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 h-14 bg-transparent"
              >
                About Us
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}
