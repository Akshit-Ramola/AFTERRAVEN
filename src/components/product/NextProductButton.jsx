/** Bottom-right thumbnail. Clicking it flies the next product into the centre. */
export default function NextProductButton({ product, onClick }) {
  return (
    <button className="next" onClick={onClick} aria-label={`Next product: ${product.category}`}>
      <img src={product.images.front} alt="" />
      <span>Next</span>
    </button>
  );
}
