import type { Product } from "./store";

export const products: Product[] = [
  {
    id: "thermal-bonded-match-ball",
    name: "Thermal Bonded Official Match Ball",
    price: 100,
    image:
      "/images/img-20260127-190203.png",
    images: [
      "/images/img-20260127-190203.png",
      "/images/img-20260127-190213.png",
    ],
    category: "Balls",
    badge: "Official Match",
    description:
      "Premium thermal bonded official match ball. Size 5, butyl bladder, made with precision for professional play.",
    inStock: true,
  },
  {
    id: "goalkeeper-gloves",
    name: "Goal Keeper Gloves",
    price: 120,
    image: "/images/gloves-pair.jpg",
    images: [
      "/images/gloves-pair.jpg",
      "/images/gloves-front.jpg",
      "/images/img-20260127-190517.png",
      "/images/img-20260127-190535.png",
      "/images/img-20260127-190646.png",
    ],
    category: "Gloves",
    badge: "Best Seller",
    description:
      "Professional goalkeeper gloves with superior grip and wrist support. Premium black leather finish with GOGO SPORTS branding.",
    inStock: true,
  },
  {
    id: "track-suit-hoodie",
    name: "Track Suit - Hoodie Set",
    price: 150,
    image:
      "/images/img-20260127-185159.png",
    images: [
      "/images/img-20260127-185159.png",
    ],
    category: "Track Suits",
    badge: "Premium",
    description:
      "Premium hoodie tracksuit set available in Navy, Green, Olive, and Black. Comfortable fit for training and casual wear.",
    inStock: true,
  },
  {
    id: "track-suit-quarter-zip",
    name: "Track Suit - Quarter Zip Set",
    price: 150,
    image:
      "/images/img-20260127-185228.png",
    images: [
      "/images/img-20260127-185228.png",
    ],
    category: "Track Suits",
    badge: "Premium",
    description:
      "Premium quarter-zip tracksuit set available in Navy, Gray, Green, and Black. Athletic fit for professional training.",
    inStock: true,
  },
  {
    id: "hand-stitched-training-ball",
    name: "Hand Stitched Training Ball",
    price: 80,
    image:
      "/images/img-20260127-190310.png",
    images: [
      "/images/img-20260127-190310.png",
      "/images/img-20260127-190242.png",
    ],
    category: "Balls",
    badge: "Training",
    description:
      "Hand stitched training ball. Size 5, butyl bladder, made in Pakistan. Perfect for daily training sessions.",
    inStock: true,
  },
  {
    id: "hand-stitched-match-ball",
    name: "Hand Stitched Official Match Ball",
    price: 130,
    image: "/images/hand-stitched-match-ball-real.jpg",
    images: ["/images/hand-stitched-match-ball-real.jpg"],
    category: "Balls",
    badge: "Official Match",
    description:
      "Premium hand stitched official match ball. Size 5, superior craftsmanship for competitive matches.",
    inStock: true,
  },
  {
    id: "machine-stitched-training-ball",
    name: "Machine Stitched Training Ball",
    price: 50,
    image: "/images/machine-stitched-ball.jpg",
    category: "Balls",
    badge: "Best Value",
    description:
      "Affordable machine stitched training ball. Size 5, butyl bladder. Great value for casual play and practice.",
    inStock: true,
  },
  {
    id: "football-uniform",
    name: "Football Uniform",
    price: 90,
    image: "/images/football-uniform.jpg",
    category: "Uniforms",
    badge: "Team Gear",
    description:
      "Professional football uniform set. Breathable fabric, comfortable fit for matches and training.",
    inStock: true,
  },
  {
    id: "hybrid-stitched-match-ball",
    name: "Hybrid Stitched Match Ball",
    price: 0,
    image: "/images/hybrid-ball.jpg",
    category: "Balls",
    badge: "Coming Soon",
    description:
      "Innovative hybrid stitched match ball combining the best of thermal bonding and hand stitching.",
    inStock: false,
  },
];

export const categories = [
  { name: "All", slug: "all" },
  { name: "Balls", slug: "balls" },
  { name: "Gloves", slug: "gloves" },
  { name: "Track Suits", slug: "track-suits" },
  { name: "Uniforms", slug: "uniforms" },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (category === "all") return products;
  return products.filter(
    (p) => p.category.toLowerCase().replace(" ", "-") === category
  );
};
