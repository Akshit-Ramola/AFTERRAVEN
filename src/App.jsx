import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { PRODUCTS } from "./data/products";
import { DEFAULT_SIZE } from "./constants/config";
import { useProductSlider } from "./hooks/useProductSlider";
import { playPageIntro, startIdleFloat } from "./animations/introAnimations";
import { animateProductIn } from "./animations/productTransitions";
import { popCart } from "./animations/productInteractions";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ProductInfo from "./components/product/ProductInfo";
import ProductStage from "./components/product/ProductStage";
import PricePanel from "./components/product/PricePanel";

gsap.registerPlugin(useGSAP);

export default function App() {
  const rootRef = useRef(null);
  const flipperRef = useRef(null);

  const [size, setSize] = useState(DEFAULT_SIZE);
  const [cartCount, setCartCount] = useState(0);
  const [activeLink, setActiveLink] = useState("Latest Drop");

  const { product, nextProduct, next, prev } = useProductSlider(PRODUCTS, flipperRef);

  // first-load animations (useGSAP cleans them up automatically on unmount)
  useGSAP(() => {
    playPageIntro();
    animateProductIn();
    startIdleFloat();
  }, { scope: rootRef });

  const addToCart = () => {
    setCartCount((c) => c + 1);
    popCart();
  };

  // Colours start from the first product; after that GSAP tweens them (see tweenTheme)
  const startTheme = PRODUCTS[0].theme;

  return (
    <div ref={rootRef} className="page" style={{ backgroundColor: startTheme.page }}>
      <main
        className="card"
        style={{
          "--c1": startTheme.bg[0],
          "--c2": startTheme.bg[1],
          "--accent": product.theme.accent,
          color: startTheme.ink,
        }}
      >
        <div className="grain" />

        <Navbar activeLink={activeLink} onLinkClick={setActiveLink} cartCount={cartCount} />
        <ProductInfo product={product} size={size} onPrev={prev} onNext={next} onAddToCart={addToCart} />
        <ProductStage product={product} ref={flipperRef} />
        <PricePanel product={product} size={size} onSizeChange={setSize} />
        <Footer nextProduct={nextProduct} onNext={next} />
      </main>
    </div>
  );
}
