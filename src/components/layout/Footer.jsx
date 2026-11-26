import NextProductButton from "../product/NextProductButton";

/** Bottom row: socials, tagline and the "next product" thumbnail. */
export default function Footer({ nextProduct, onNext }) {
  return (
    <footer className="foot">
      <div className="socials fade">IG · X · YT</div>
      <div className="tagline fade">Built quietly.<br />Worn loudly.</div>
      <NextProductButton product={nextProduct} onClick={onNext} />
    </footer>
  );
}
