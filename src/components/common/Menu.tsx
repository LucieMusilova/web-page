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

  const handleClick = (item: string) => {
    if (item !== "Služby") {
      dispatch(setActiveMenuItem(item));
    }
  };

  return (
    <ul className="header__menu">
      {menuItems.map((item, index) => (
        <li key={index} className="header__list">
          {item === "Služby" ? (
            <div>
              <span className="header__link header__services">
                {item}
                <img
                  className="header__chevron"
                  src="/images/chevron-down.svg"
                  alt="Chevron"
                />
              </span>
              <Submenu />
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
