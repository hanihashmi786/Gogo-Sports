"use client";

import { Truck, Shield, Clock, CreditCard } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick shipping across Saudi Arabia",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Premium products, authentic quality",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "WhatsApp & Email support anytime",
  },
  {
    icon: CreditCard,
    title: "Easy Payment",
    description: "Asani se pay kar sakte hain – simple & secure payment",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
