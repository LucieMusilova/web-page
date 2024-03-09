import { Link } from "react-router-dom";

type SubmenuProps = {
  open: boolean;
};

const Submenu = ({ open }: SubmenuProps) => {
  const submenuItems: string[] = ["Submenu", "Submenu", "Submenu", "Submenu"];

  return (
    <div className={`header__submenu ${open ? "open" : ""}`}>
      {submenuItems.map((item, index) => (
        <div key={index} className="header__submenu--item">
          <Link className="header__submenu--link" to={`/${item.toLowerCase()}`}>
            <span className="header__submenu--text">{item}</span>
            <img
              className="header__submenu--arrow"
              src="/images/chevron-right.svg"
              alt="Arrow"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Submenu;
