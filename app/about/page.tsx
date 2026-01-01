import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Globe } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description:
      "We source only the finest materials and work with skilled craftsmen to deliver premium sports gear.",
  },
  {
    icon: Award,
    title: "Authenticity",
    description:
      "Every product meets official standards and specifications for professional play.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We're passionate about growing the football community in Saudi Arabia and beyond.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "Premium gear shouldn't break the bank. We offer competitive prices in SAR for all budgets.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      <div className="pt-24 md:pt-28">
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                About Us
              </p>
              <h1
                className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Win Together
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Gogo Sports is your trusted destination for premium football
                gear in Saudi Arabia. We're committed to providing athletes with
                the equipment they need to perform at their best.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2
                className="text-3xl font-bold mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Founded with a passion for football, Gogo Sports emerged from
                  a simple observation: athletes in Saudi Arabia deserved
                  better access to quality sports equipment at fair prices.
                </p>
                <p>
                  We partner with manufacturers who share our commitment to
                  quality, sourcing official match balls, professional
                  goalkeeper gloves, premium tracksuits, and team uniforms that
                  meet the demands of both amateur and professional players.
                </p>
                <p>
                  Our motto, "Win Together," reflects our belief that success
                  in sport is a shared journey. Whether you're a goalkeeper
                  making that crucial save, a striker finding the back of the
                  net, or a coach leading your team to victory, we're here to
                  support you with the gear you need.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">
                What We Stand For
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Values
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-card rounded-xl p-6 border border-border text-center"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to Gear Up?
              </h2>
              <p className="text-muted-foreground mb-8">
                Explore our collection of premium football gear and find
                everything you need to play your best game.
              </p>
              <Link href="/shop">
                <Button size="lg" className="px-8">
                  Shop Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <MobileNav />
    </main>
  );
}
