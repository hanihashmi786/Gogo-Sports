"use client";

import React from "react"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { MobileNav } from "@/components/mobile-nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { useCartStore } from "@/lib/store";
import { SarIcon } from "@/components/sar-icon";

const saudiCities = [
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  "Dammam",
  "Khobar",
  "Dhahran",
  "Jubail",
  "Tabuk",
  "Abha",
  "Khamis Mushait",
  "Hail",
  "Najran",
  "Yanbu",
  "Al Ahsa",
];

export default function CheckoutPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    city: "",
    address: "",
  });

  const items = useCartStore((state) => state.items);
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

  if (items.length === 0 && !orderPlaced) {
    router.push("/cart");
    return null;
  }

  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 0 ? 20 : 0;
  const finalTotal = totalPrice + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the order to a backend
    setOrderPlaced(true);
    clearCart();
  };

  const getWhatsAppOrderLink = () => {
    const orderDetails = items
      .map((item) => `- ${item.name} x${item.quantity} (SAR ${item.price * item.quantity})`)
      .join("%0A");
    const customerInfo = `Name: ${formData.name}%0AMobile: ${formData.mobile}%0ACity: ${formData.city}%0AAddress: ${formData.address}`;
    const message = `Hi, I'd like to place an order:%0A%0A${orderDetails}%0A%0ATotal: SAR ${finalTotal}%0A%0A${customerInfo}`;
    return `https://wa.me/966534583997?text=${message}`;
  };

  if (orderPlaced) {
    return (
      <main className="min-h-screen pb-20 md:pb-0">
        <Header />
        <div className="pt-24 md:pt-28">
          <div className="container mx-auto px-4 max-w-lg text-center py-20">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Order Placed!
            </h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your order. We'll contact you shortly to confirm
              delivery details.
            </p>
            <div className="space-y-4">
              <Link href="/shop">
                <Button size="lg" className="w-full">
                  Continue Shopping
                </Button>
              </Link>
              <a
                href="https://wa.me/966500000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent"
                >
                  <Phone className="h-5 w-5" />
                  Contact Us on WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
        <MobileNav />
      </main>
    );
  }

  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <Header />

      <div className="pt-24 md:pt-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/cart">
            <Button variant="ghost" size="sm" className="mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>

          <h1
            className="text-4xl font-bold tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Checkout
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Checkout Form */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-3 space-y-6"
            >
              {/* Contact Information */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold mb-4">
                  Contact Information
                </h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      placeholder="+966 5X XXX XXXX"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Delivery Address */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Select
                      value={formData.city}
                      onValueChange={(value) =>
                        setFormData({ ...formData, city: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your city" />
                      </SelectTrigger>
                      <SelectContent>
                        {saudiCities.map((city) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="address">Full Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })
                      }
                      placeholder="Street, Building, Apartment"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  Place Order
                </Button>
                <a
                  href={getWhatsAppOrderLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    type="button"
                    size="lg"
                    variant="outline"
                    className="w-full gap-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white bg-transparent"
                  >
                    <Phone className="h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Asani se pay kar sakte hain — payment details WhatsApp /
                email par share ki jayengi.
              </p>
            </form>

            {/* Order Summary */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-6 sticky top-28">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

                <div className="space-y-4 mb-4 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium line-clamp-2">
                          {item.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium flex items-center gap-1">
                        <SarIcon size={14} />
                        {item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                <Separator className="my-4" />

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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20" />
      <MobileNav />
    </main>
  );
}
