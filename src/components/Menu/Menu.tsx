import { Link } from "react-router-dom";
import Styles from "./menu.module.css";

interface Props {
  toogleMenu: boolean;
  closeMenu: () => void;
}

const Menu: React.FC<Props> = ({ toogleMenu, closeMenu }) => {
  return (
    <nav className={toogleMenu ? Styles.container : Styles.containerOpen}>
      <Link
        onClick={closeMenu}
        className={toogleMenu ? Styles.link : Styles.linkOpen}
        to={"/login"}
      >
        Login
      </Link>
      <Link
        onClick={closeMenu}
        className={toogleMenu ? Styles.link : Styles.linkOpen}
        to={"/about"}
      >
        About
      </Link>
      <Link
        onClick={closeMenu}
        className={toogleMenu ? Styles.link : Styles.linkOpen}
        to={"/about"}
      >
        Contact
      </Link>
      <p
        onClick={closeMenu}
        className={toogleMenu ? Styles.link : Styles.linkOpen}
      >
        Close Menu
      </p>
    </nav>
  );
};

export default Menu;
