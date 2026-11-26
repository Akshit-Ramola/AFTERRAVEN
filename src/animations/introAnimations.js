import gsap from "gsap";

/** Runs once on page load: navbar drops in, card scales up. */
export function playPageIntro() {
  gsap.from(".nav", { y: -40, opacity: 0, duration: 0.8, ease: "power3.out" });
  gsap.from(".card", { scale: 0.92, opacity: 0, duration: 1, ease: "power3.out" });
}

/** Endless idle motion: the garment floats and sways, the shadow breathes with it. */
export function startIdleFloat() {
  gsap.to(".float", { y: -18, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(".float", {
    rotationY: 14, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1,
    startAt: { rotationY: -14 },
  });
  gsap.to(".shadow", { scaleX: 0.82, opacity: 0.7, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1 });
}
