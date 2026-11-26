import { forwardRef } from "react";
import { DEPTH_LAYERS } from "../../constants/config";

/**
 * The 3D garment.
 *
 *  .tilt     rotates towards the cursor
 *  .product  moves in / out during product transitions
 *  .float    endless idle bobbing
 *  .flipper  (ref) turns 180° on hover to show the back
 *
 * Inside the flipper: a stack of darkened image copies (the "thickness"),
 * then the front face and the back face (rotated 180°).
 */
const Product3D = forwardRef(function Product3D({ product }, flipperRef) {
  const { front, back } = product.images;

  return (
    <div className="tilt">
      <div className="product">
        <div className="float">
          <div className="flipper" ref={flipperRef}>
            {DEPTH_LAYERS.map((z) => (
              <img
                key={z}
                className="layer"
                src={z > 0 ? front : back}
                alt=""
                draggable="false"
                style={{
                  transform: z > 0 ? `translateZ(${z}px)` : `rotateY(180deg) translateZ(${-z}px)`,
                  filter: "brightness(0.72)",
                }}
              />
            ))}

            <Face side="front" src={front} alt={`${product.category} front`} />
            <Face side="back" src={back} alt={`${product.category} back`} />
          </div>
        </div>
      </div>
    </div>
  );
});

/** One side of the garment with a light sheen clipped to its shape. */
function Face({ side, src, alt }) {
  return (
    <div className={`face ${side}`} style={{ "--img": `url(${src})` }}>
      <img src={src} alt={alt} draggable="false" />
      <i className="sheen" />
    </div>
  );
}

export default Product3D;
