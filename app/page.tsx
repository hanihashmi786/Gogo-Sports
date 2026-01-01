import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { TrustSection } from "@/components/trust-section";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <TrustSection />
      <CategoryGrid />
      <FeaturedProducts />
      <Footer />
      <MobileNav />
    </main>
  );
}
