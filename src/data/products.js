/**
 * Product catalogue.
 * Later this will come from the Shopify Storefront API. Keep the same shape so
 * the components don't need to change.
 *
 * theme.page    -> colour of the page behind the card
 * theme.bg      -> [centre, edge] colours of the card's radial gradient
 * theme.accent  -> buttons, highlights, second line of the title
 * theme.ink     -> text colour (light text for dark products)
 */
export const PRODUCTS = [
  {
    id: "fathom-hoodie",
    category: "Hoodie",
    title: ["Build", "Unfathomable"],
    description:
      "Heavyweight washed fleece with an all-over tonal texture. Boxy, cropped fit and the airbrushed star print on the back. Made for people quietly building something big.",
    price: 3499,
    mrp: 4999,
    images: { front: "products/pink-front.webp", back: "products/pink-back.webp" },
    theme: { page: "#f3b6c4", bg: ["#f6c9d2", "#e88fa3"], accent: "#d9233a", ink: "#2a0f15" },
  },
  {
    id: "tiger-denim",
    category: "Denim Jacket",
    title: ["Wear", "The Roar"],
    description:
      "Sand-washed trucker jacket with hand-drawn tigers printed all over it. Contrast rust stitching, a cropped body and dropped shoulders.",
    price: 5999,
    mrp: 7999,
    images: { front: "products/tan-front.webp", back: "products/tan-back.webp" },
    theme: { page: "#d8bf98", bg: ["#ecdcc0", "#c9a77c"], accent: "#c4452f", ink: "#2b1d10" },
  },
  {
    id: "blossom-bomber",
    category: "Hooded Bomber",
    title: ["Bloom", "In The Dark"],
    description:
      "Washed black denim bomber with fireman clasp hardware, a detachable hood and a plum-blossom embroidery climbing the chest.",
    price: 7499,
    mrp: 9999,
    images: { front: "products/black-front.webp", back: "products/black-back.webp" },
    theme: { page: "#2b2b2e", bg: ["#9a9a9e", "#4a4a4f"], accent: "#d7263d", ink: "#f4f1ec" },
  },
];
