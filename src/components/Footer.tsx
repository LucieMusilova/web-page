import { Link } from "react-router-dom";
import Logo from "./common/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__box">
        <Logo />
        <div className="footer__links">
          <Link className="footer__link" to={`/submenu`}>
            První proklik
          </Link>
          <Link className="footer__link" to={`/submenu`}>
            Druhý proklik
          </Link>
          <Link className="footer__link" to={`/submenu`}>
            Třetí proklik
          </Link>
        </div>
        <p>© 2024 Logo All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
