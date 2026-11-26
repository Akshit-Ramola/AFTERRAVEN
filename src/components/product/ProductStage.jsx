import { forwardRef } from "react";
import Product3D from "./Product3D";
import { showBack, showFront, tiltTowards, resetTilt } from "../../animations/productInteractions";

/** Centre column: the interactive 3D product, its floor shadow and the hover hint. */
const ProductStage = forwardRef(function ProductStage({ product }, flipperRef) {
  const handleMouseMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5; // -0.5 (left) … 0.5 (right)
    const y = (e.clientY - r.top) / r.height - 0.5; // -0.5 (top)  … 0.5 (bottom)
    tiltTowards(x, y);
  };

  const handleMouseLeave = () => {
    resetTilt();
    showFront(flipperRef.current);
  };

  return (
    <section
      className="stage"
      onMouseEnter={() => showBack(flipperRef.current)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Product3D product={product} ref={flipperRef} />
      <div className="shadow" />
      <div className="hint fade">Hover to turn it around</div>
    </section>
  );
});

export default ProductStage;
