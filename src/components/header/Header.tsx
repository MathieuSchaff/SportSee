import "./Header.scss";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
/**
 * Create a navbar, with only two active links on four LI included in the nav
 * @component
 */
const Header = () => {
  /**
   * @param {boolean} isActive
   * @returns {String}
   */
  const navLinkStyles = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "navbar__links navbar__links--active " : "navbar__links";
  };
  return (
    <header className="header">
      <img src={Logo} alt="Logo sport see" className="header__logo" />
      <nav className="navbar">
        <ul className="navbar__container">
          <li>
            <NavLink to="/" className={navLinkStyles}>
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className={navLinkStyles}>
              Profile
            </NavLink>
          </li>
          <li>Reglages</li>
          <li>Communauté</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
