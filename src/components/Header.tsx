import Ham from "./common/HamIcon";
import Logo from "./common/Logo";
import Menu from "./common/Menu";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <Ham />
    </header>
  );
};

export default Header;
