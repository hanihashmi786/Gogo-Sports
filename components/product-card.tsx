"use client";

import React from "react"

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore, type Product } from "@/lib/store";
import { SarIcon } from "@/components/sar-icon";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product.inStock) {
      addItem(product);
    }
  };

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case "Official Match":
        return "default";
      case "Training":
        return "secondary";
      case "Best Value":
        return "outline";
      case "Coming Soon":
        return "destructive";
      case "Best Seller":
        return "default";
      case "Premium":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-card">
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.badge && (
            <Badge
              variant={getBadgeVariant(product.badge)}
              className="absolute top-3 left-3 shadow-md"
            >
              {product.badge}
            </Badge>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <Button
              size="sm"
              variant="secondary"
              className="flex-1 gap-2 bg-white/90 hover:bg-white text-foreground"
            >
              <Eye className="h-4 w-4" />
              View
            </Button>
            {product.inStock ? (
              <Button
                size="sm"
                className="flex-1 gap-2"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4" />
                Add
              </Button>
            ) : (
              <Button size="sm" disabled className="flex-1">
                Sold Out
              </Button>
            )}
          </div>
        </div>
        <CardContent className="p-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 min-h-[3rem]">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-3">
            {product.price > 0 ? (
              <p className="text-lg font-bold text-primary flex items-center gap-1">
                <SarIcon size={18} />
                {product.price}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">Contact for Price</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
