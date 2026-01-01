"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Balls",
    slug: "balls",
    image: "/images/img-20260127-190203.png",
    description: "Official & Training",
    count: 5,
    className: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Track Suits",
    slug: "track-suits",
    image: "/images/img-20260127-185159.png",
    description: "Premium Comfort",
    count: 2,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Gloves",
    slug: "gloves",
    image: "/images/img-20260127-190517.png",
    description: "Pro Goalkeeper",
    count: 1,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    name: "Uniforms",
    slug: "uniforms",
    image: "/images/football-uniform.jpg",
    description: "Team Gear",
    count: 1,
    className: "md:col-span-2 md:row-span-1",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            Categories
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Shop by Category
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/shop?category=${category.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-secondary ${category.className}`}
            >
              <div
                className={`relative w-full ${category.className.includes("row-span-2") ? "h-[400px] md:h-full" : "h-[200px] md:h-[250px]"}`}
              >
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white/70 text-sm mb-1">
                        {category.description}
                      </p>
                      <h3
                        className="text-white text-2xl md:text-3xl font-bold"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {category.name}
                      </h3>
                      <p className="text-white/60 text-sm mt-1">
                        {category.count} products
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowUpRight className="h-5 w-5 text-white group-hover:text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
