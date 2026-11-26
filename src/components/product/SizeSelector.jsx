import { SIZES } from "../../constants/config";

export default function SizeSelector({ selected, onSelect }) {
  return (
    <div className="sizes fade">
      {SIZES.map((s) => (
        <button key={s} className={s === selected ? "on" : ""} onClick={() => onSelect(s)}>
          {s}
        </button>
      ))}
    </div>
  );
}
