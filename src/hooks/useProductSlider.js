import { useRef, useState } from "react";
import { animateProductOut, animateProductIn, tweenTheme } from "../animations/productTransitions";
import { resetFlip } from "../animations/productInteractions";

/**
 * Holds which product is showing and runs the animated switch between products.
 * Clicks are ignored while a transition is still playing.
 */
export function useProductSlider(products, flipperRef) {
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);

  const go = (direction = 1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const nextIndex = (index + direction + products.length) % products.length;
    tweenTheme(products[nextIndex].theme);

    animateProductOut(direction, () => {
      resetFlip(flipperRef.current);
      setIndex(nextIndex);
      // wait one frame so React renders the new product before animating it in
      requestAnimationFrame(() =>
        animateProductIn(direction).then(() => (isAnimating.current = false))
      );
    });
  };

  return {
    product: products[index],
    nextProduct: products[(index + 1) % products.length],
    next: () => go(1),
    prev: () => go(-1),
  };
}
