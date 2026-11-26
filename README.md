# afterraven© — Animated Store Frontend

React + GSAP product showcase for the afterraven clothing store. Each product
gets its own colour theme, turns in 3D with the cursor, flips to show its back
on hover, and flies in from the bottom-right thumbnail when you go to the next one.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in /dist
```

## Folder structure

```
public/
  products/                  Product images (transparent WebP, front + back)

src/
  main.jsx                   React entry point
  App.jsx                    Page layout: wires state, hooks and components together

  data/
    products.js              Product catalogue (name, price, images, colour theme)

  constants/
    config.js                Nav links, sizes, 3D thickness layers

  components/
    layout/
      Navbar.jsx             Logo, menu (Latest Drop / All Products / About Us / Contact Us), bag count
      Footer.jsx             Socials, tagline, next-product thumbnail
    product/
      ProductInfo.jsx        Left column: arrows, animated title, description, Add to bag
      ProductStage.jsx       Centre column: mouse handling for tilt + hover flip
      Product3D.jsx          The 3D garment itself (thickness layers, front/back faces, sheen)
      PricePanel.jsx         Right column: price, MRP, size picker
      SizeSelector.jsx       S / M / L / XL buttons
      NextProductButton.jsx  Bottom-right thumbnail

  hooks/
    useProductSlider.js      Current product + animated next/prev switching

  animations/                All GSAP code lives here, nothing animates inside components
    introAnimations.js       Page-load intro + endless idle float
    productTransitions.js    Product switch: colour change, exit to top-left, entry from thumbnail
    productInteractions.js   Hover flip, cursor tilt, light sheen, bag pop

  utils/
    formatPrice.js           3499 -> "₹3,499"

  styles/
    index.css                Imports all the files below in order
    global.css               Fonts, page + card background, grain texture
    navbar.css / product-info.css / product-stage.css / price-panel.css / footer.css
    responsive.css           Mobile layout (below 860px)
```

## Common changes

| I want to…                         | Edit                                      |
|------------------------------------|-------------------------------------------|
| Add / edit a product               | `src/data/products.js` + images in `public/products/` |
| Change a product's colours         | the `theme` object of that product        |
| Change menu items or sizes         | `src/constants/config.js`                 |
| Tweak speed / easing of a transition | `src/animations/productTransitions.js`  |
| Change how far it tilts            | `tiltTowards()` in `src/animations/productInteractions.js` |
| Make the garment thicker / thinner | `DEPTH_LAYERS` in `config.js` and `translateZ(8px)` in `product-stage.css` |

## Adding a product image

Use a front and a back photo of the garment on a transparent background,
cropped tight and centred on the same canvas size (1100 × 1000 works well),
so the front and back line up when the garment turns.

## Next steps

- Load `PRODUCTS` from the Shopify Storefront API (keep the same object shape).
- Wire **Add to bag** to Storefront `cartCreate` / `cartLinesAdd`, then redirect to `checkoutUrl`.
- Build the All Products, About Us and Contact Us pages (e.g. with React Router).
