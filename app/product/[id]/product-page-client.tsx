"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  Shield,
  ArrowLeft,
  Phone,
} from "lucide-react";
import type { Product } from "@/lib/products";
import { useCartStore } from "@/lib/store";
import { SarIcon } from "@/components/sar-icon";

interface ProductPageClientProps {
  product: Product;
  relatedProducts: Product[];
}

export function ProductPageClient({
  product,
  relatedProducts,
}: ProductPageClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore((state) => state.addItem);

  const images = product.images || [product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Official Match":
        return "default";
      case "Training":
        return "secondary";
      case "Coming Soon":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/shop">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Button>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/50">
                <Image
                  src={images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <Badge
                    variant={getBadgeVariant(product.badge)}
                    className="absolute top-4 left-4 text-sm"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              {images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                        selectedImage === idx
                          ? "border-primary"
                          : "border-transparent"
                      }`}
                    >
                      <Image
                        src={img || "/placeholder.svg"}
                        alt={`${product.name} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1
                  className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {product.name}
                </h1>
                {product.price > 0 ? (
                  <p className="text-4xl font-bold text-primary flex items-center gap-2">
                    <SarIcon size={32} />
                    {product.price}
                  </p>
                ) : (
                  <p className="text-xl text-muted-foreground">
                    Contact for Price
                  </p>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Quantity & Actions */}
              {product.inStock ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium">Quantity:</span>
                    <div className="flex items-center border border-border rounded-lg">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">
                        {quantity}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setQuantity((q) => q + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      size="lg"
                      className="flex-1 gap-2"
                      onClick={handleAddToCart}
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Add to Cart
                    </Button>
                    <Button size="lg" variant="outline">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>

                  <a
                    href={`https://wa.me/966500000000?text=Hi, I'm interested in ${product.name} (${product.price} SAR)`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent"
                    >
                      <Phone className="h-5 w-5" />
                      Order via WhatsApp
                    </Button>
                  </a>
                </div>
              ) : (
                <div className="space-y-4">
                  <Badge variant="destructive" className="text-sm">
                    Coming Soon
                  </Badge>
                  <a
                    href={`https://wa.me/966500000000?text=Hi, I'm interested in ${product.name} when it becomes available.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="lg"
                      className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white"
                    >
                      <Phone className="h-5 w-5" />
                      Contact for Availability
                    </Button>
                  </a>
                </div>
              )}

              {/* Trust Features */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Across KSA</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Quality Guarantee</p>
                    <p className="text-xs text-muted-foreground">
                      Authentic products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2
                className="text-2xl font-bold mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
      <MobileNav />
    </main>
  );
}
