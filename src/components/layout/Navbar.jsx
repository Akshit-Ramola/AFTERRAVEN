import { NAV_LINKS } from "../../constants/config";

/** Logo, main menu pills and the bag counter. */
export default function Navbar({ activeLink, onLinkClick, cartCount }) {
  return (
    <nav className="nav">
      <div className="logo">after<b>raven</b>©</div>

      <ul className="pills">
        {NAV_LINKS.map((link) => (
          <li key={link} className={link === activeLink ? "on" : ""} onClick={() => onLinkClick(link)}>
            {link}
          </li>
        ))}
      </ul>

      <div className="cart">
        Bag <span className="cart-count">{cartCount}</span>
      </div>
    </nav>
  );
}
