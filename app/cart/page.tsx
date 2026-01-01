"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  Phone,
} from "lucide-react";
import { useCartStore } from "@/lib/store";
import { SarIcon } from "@/components/sar-icon";

export default function CartPage() {
  const [mounted, setMounted] = useState(false);
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const getTotalPrice = useCartStore((state) => state.getTotalPrice);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <main className="min-h-screen pb-20 md:pb-0">
        <Header />
        <div className="pt-24 md:pt-28 flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <MobileNav />
      </main>
    );
  }

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 0 ? 20 : 0;
  const finalTotal = totalPrice + shippingCost;

  const getWhatsAppOrderLink = () => {
    const orderDetails = items
      .map((item) => `- ${item.name} x${item.quantity} (SAR ${item.price * item.quantity})`)
      .join("%0A");
    const message = `Hi, I'd like to place an order:%0A%0A${orderDetails}%0A%0ATotal: SAR ${finalTotal}`;
    return `https://wa.me/966500000000?text=${message}`;
  };

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Cart
          </h1>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link href="/shop">
                <Button size="lg" className="gap-2">
                  Browse Products
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-card rounded-xl border border-border"
                  >
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <Link
                        href={`/product/${item.id}`}
                        className="font-semibold hover:text-primary transition-colors line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.category}
                      </p>
                      <p className="text-primary font-bold mt-2 flex items-center gap-1">
                        <SarIcon size={16} />
                        {item.price}
                      </p>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="flex items-center border border-border rounded-lg">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4">
                  <Link href="/shop">
                    <Button variant="outline">Continue Shopping</Button>
                  </Link>
                  <Button
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-xl border border-border p-6 sticky top-28">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="flex items-center gap-1">
                        <SarIcon size={14} />
                        {totalPrice}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="flex items-center gap-1">
                        <SarIcon size={14} />
                        {shippingCost}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-primary flex items-center gap-1">
                        <SarIcon size={18} />
                        {finalTotal}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Link href="/checkout">
                      <Button size="lg" className="w-full gap-2">
                        Proceed to Checkout
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                    <a
                      href={getWhatsAppOrderLink()}
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

                </div>
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
