import braclet from './braclet.webp'
import Earing from './Earing.webp'
import necklace from './necklace.webp'
import pendent from './pendent.webp'
import rings from './rings.webp'

export const assets = {
    braclet,
    Earing,
    necklace,
    pendent,
    rings
}

export const categories = [
  {
    name: "Rings",
    image: rings,
  },
  {
    name: "Earrings",
    image: Earing,
  },
  {
    name: "Pendants",
    image: pendent,
  },
  {
    name: "Bracelets",
    image: braclet,
  },
  {
    name: "Necklaces",
    image: necklace,
  },
];
export const productsData = [
  {
    id: 1,
    name: "Gold Ring",
    price: 12999,
    image: rings,
    category: "rings",
    description: "Elegant gold ring crafted with precision.",
    sizes: ["6", "7", "8", "9"],
  },
  {
    id: 2,
    name: "Diamond Earrings",
    price: 18499,
    image: Earing,
    category: "earrings",
    description: "Premium diamond earrings for special occasions.",
    sizes: ["S", "M"],
  },
  {
    id: 3,
    name: "Silver Pendant",
    price: 6999,
    image: pendent,
    category: "pendants",
    description: "Stylish silver pendant for daily wear.",
    sizes: ["Free Size"],
  },
  {
    id: 4,
    name: "Luxury Bracelet",
    price: 9999,
    image: braclet,
    category: "bracelets",
    description: "Luxury bracelet with modern design.",
    sizes: ["S", "M", "L"],
  },
  {
    id: 5,
    name: "Gold Necklace",
    price: 25999,
    image: necklace,
    category: "necklaces",
    description: "Premium gold necklace for weddings.",
    sizes: ["Free Size"],
  },
  {
    id: 6,
    name: "Classic Ring",
    price: 10499,
    image: rings,
    category: "rings",
    description: "Classic ring with timeless design.",
    sizes: ["6", "7", "8"],
  },
  {
    id: 7,
    name: "Elegant Earrings",
    price: 14999,
    image: Earing,
    category: "earrings",
    description: "Elegant earrings for modern women.",
    sizes: ["S", "M"],
  },
  {
    id: 8,
    name: "Modern Pendant",
    price: 7999,
    image: pendent,
    category: "pendants",
    description: "Modern pendant with unique style.",
    sizes: ["Free Size"],
  },
  {
    id: 9,
    name: "Stylish Bracelet",
    price: 11999,
    image: braclet,
    category: "bracelets",
    description: "Stylish bracelet for everyday wear.",
    sizes: ["M", "L"],
  },
  {
    id: 10,
    name: "Premium Necklace",
    price: 29999,
    image: necklace,
    category: "necklaces",
    description: "Premium necklace with luxury finish.",
    sizes: ["Free Size"],
  },
];