import gsap from "gsap";

/** Where products go when they leave to / arrive from the top-left corner. */
const TOP_LEFT = { x: -420, y: -320, scale: 0.35, rotate: -14 };

/**
 * Distance from the centre of the product to the centre of the bottom-right
 * "Next" thumbnail, plus the scale that makes the product thumbnail-sized.
 */
function getThumbnailOffset() {
  gsap.set(".product", { x: 0, y: 0, scale: 1, rotate: 0 }); // measure from rest position
  const product = document.querySelector(".product").getBoundingClientRect();
  const thumb = document.querySelector(".next");
  const t = thumb.getBoundingClientRect();
  return {
    x: t.left + t.width / 2 - (product.left + product.width / 2),
    y: t.top + t.height / 2 - (product.top + product.height / 2),
    scale: thumb.offsetWidth / product.width,
  };
}

/** Smoothly changes the page and card colours to the next product's theme. */
export function tweenTheme(theme) {
  gsap.to(".page", { backgroundColor: theme.page, duration: 1, ease: "power2.inOut" });
  gsap.to(".card", {
    "--c1": theme.bg[0], "--c2": theme.bg[1], color: theme.ink,
    duration: 1, ease: "power2.inOut",
  });
}

/**
 * Animates the current product and text out.
 * direction  1 (next): product flies to the top-left
 * direction -1 (prev): product shrinks back into the thumbnail
 */
export function animateProductOut(direction, onComplete) {
  const exitTo = direction === 1
    ? TOP_LEFT
    : (() => { const o = getThumbnailOffset(); return { x: o.x, y: o.y, scale: o.scale, rotate: 14 }; })();

  return gsap.timeline({ onComplete })
    .to(".title span", { yPercent: -110, stagger: 0.05, duration: 0.4, ease: "power3.in" })
    .to(".fade", { opacity: 0, y: -10, duration: 0.3 }, 0)
    .to(".product", { ...exitTo, opacity: 0, duration: 0.7, ease: "power3.in" }, 0)
    .to(".next", { scale: 0.6, opacity: 0, duration: 0.3 }, 0)
    .to(".shadow", { opacity: 0, duration: 0.3 }, 0);
}

/** The product entrance, depending on which way we navigated. */
function productEntrance(direction) {
  const rest = { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 };

  if (direction === 1) {
    // grows out of the bottom-right thumbnail and flies diagonally to the centre
    const o = getThumbnailOffset();
    return gsap.fromTo(".product",
      { x: o.x, y: o.y, scale: o.scale, rotate: 14, opacity: 1 },
      { ...rest, duration: 1.1, ease: "expo.out" });
  }
  if (direction === -1) {
    return gsap.fromTo(".product", { ...TOP_LEFT, opacity: 0 }, { ...rest, duration: 1.1, ease: "expo.out" });
  }
  // first page load: rises from below
  return gsap.fromTo(".product",
    { x: 0, y: 80, scale: 0.85, rotate: -6, opacity: 0 },
    { ...rest, duration: 0.9, ease: "back.out(1.4)" });
}

/** Animates the (new) product and its text in. Returns a timeline (awaitable). */
export function animateProductIn(direction = 0) {
  if (direction !== 0) {
    gsap.to(".next", { scale: 1, opacity: 1, duration: 0.5, delay: 0.7, ease: "back.out(2)" });
  }
  return gsap.timeline()
    .fromTo(".title span", { yPercent: 110 }, { yPercent: 0, stagger: 0.08, duration: 0.7, ease: "power4.out" })
    .fromTo(".fade", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.06, duration: 0.5 }, "-=0.4")
    .add(productEntrance(direction), 0)
    .fromTo(".shadow", { scaleX: 0.3, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.8 }, 0.2);
}
