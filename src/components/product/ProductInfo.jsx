/** Left column: prev/next arrows, animated title, description and add-to-bag button. */
export default function ProductInfo({ product, size, onPrev, onNext, onAddToCart }) {
  return (
    <section className="left">
      <div className="arrows fade">
        <button onClick={onPrev} aria-label="Previous product">←</button>
        <button onClick={onNext} aria-label="Next product">→</button>
      </div>

      {/* each line sits in a .mask so it can slide up from behind an invisible edge */}
      <h1 className="title">
        {product.title.map((line) => (
          <div key={line} className="mask"><span>{line}</span></div>
        ))}
      </h1>

      <p className="desc fade">{product.description}</p>

      <button className="buy fade" onClick={onAddToCart}>
        Add to bag — {size} <span>→</span>
      </button>
    </section>
  );
}
