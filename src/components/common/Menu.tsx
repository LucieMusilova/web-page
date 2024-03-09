import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenuItem } from "../../redux/slice";
import { Link } from "react-router-dom";
import { removeDiacritics } from "../../utils/functions";
import Submenu from "./Submenu";

const Menu = () => {
  const menuItems: string[] = [
    "O nás",
    "Služby",
    "Aktuality",
    "Novinky",
    "Kontakty",
  ];

  const dispatch = useDispatch();
  const activeMenuItem: string | null = useSelector(
    (state: { slice: { activeMenuItem: string | null } }) =>
      state.slice.activeMenuItem
  );
  const hamMenuOpen: boolean = useSelector(
    (state: { slice: { hamMenuOpen: boolean } }) => state.slice.hamMenuOpen
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item: string) => {
    if (item !== "Služby") {
      dispatch(setActiveMenuItem(item));
    } else {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <ul className={`header__menu ${hamMenuOpen ? "" : "header--close"}`}>
      {menuItems.map((item, index) => (
        <li key={index} className="header__list">
          {item === "Služby" ? (
            <div
              className="header__services--div"
              onClick={() => handleClick(item)}
            >
              <span className="header__link header__services">
                {item}
                <img
                  className="header__chevron"
                  src="/images/chevron-down.svg"
                  alt="Chevron"
                />
              </span>
              <Submenu open={menuOpen} />
            </div>
          ) : (
            <Link
              to={`/${removeDiacritics(item.toLowerCase()).replace(/ /g, "-")}`}
              className={`header__link ${
                activeMenuItem === item ? "active" : ""
              }`}
              onClick={() => handleClick(item)}
            >
              {item}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
