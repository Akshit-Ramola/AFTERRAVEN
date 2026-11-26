import SizeSelector from "./SizeSelector";
import { formatPrice } from "../../utils/formatPrice";

/** Right column: sale price, struck-through MRP and the size picker. */
export default function PricePanel({ product, size, onSizeChange }) {
  return (
    <section className="right">
      <div className="price fade">{formatPrice(product.price)}</div>
      <div className="mrp fade">{formatPrice(product.mrp)}</div>
      <div className="size-label fade">Choose your size</div>
      <SizeSelector selected={size} onSelect={onSizeChange} />
    </section>
  );
}
