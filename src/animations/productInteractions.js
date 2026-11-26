import gsap from "gsap";

/** Hover: turn the garment 180° to show its back. */
export const showBack = (el) => gsap.to(el, { rotationY: 180, duration: 1, ease: "power3.inOut" });
export const showFront = (el) => gsap.to(el, { rotationY: 0, duration: 1, ease: "power3.inOut" });
export const resetFlip = (el) => gsap.set(el, { rotationY: 0 });

/**
 * Mouse move over the stage: rotate the garment in 3D towards the cursor,
 * move the light sheen and slide the shadow the opposite way.
 * x / y are the cursor position from -0.5 to 0.5.
 */
export function tiltTowards(x, y) {
  gsap.to(".tilt", { rotationY: x * 40, rotationX: -y * 22, duration: 0.7, ease: "power2.out" });
  gsap.to(".sheen", { "--sx": `${(x + 0.5) * 100}%`, "--sy": `${(y + 0.5) * 100}%`, duration: 0.5 });
  gsap.to(".shadow", { x: -x * 60, duration: 0.7 });
}

/** Mouse leaves: spring back to the resting angle. */
export function resetTilt() {
  gsap.to(".tilt", { rotationX: 0, rotationY: 0, duration: 1.2, ease: "elastic.out(1,0.5)" });
  gsap.to(".shadow", { x: 0, duration: 1 });
}

/** "Add to bag" feedback: the counter pops and the button bounces. */
export function popCart() {
  gsap.fromTo(".cart-count", { scale: 1.8 }, { scale: 1, duration: 0.5, ease: "elastic.out(1,0.4)" });
  gsap.fromTo(".buy", { scale: 0.94 }, { scale: 1, duration: 0.4, ease: "back.out(3)" });
}
