import { NavLink, useNavigate,useLocation } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import SearchBar from "../Functionality/SearchBar";
import type { ProductType } from "../data/data";

interface NavbarProps {
  setResults :React.Dispatch<React.SetStateAction<ProductType[]>>;
}
function Navbar({setResults}:NavbarProps) {
  const navigate=useNavigate();
  const location=useLocation();
  const showSearchBar=location.pathname==='/'||location.pathname==='/products';
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo} onClick={() => navigate({ pathname: "/" }, { replace: true })} > Ecommerce </h1>

   {showSearchBar &&<SearchBar setResults={setResults}/>}
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Cart
          </NavLink>
         </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            About 
          </NavLink>
         </li>
        <li>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${styles.navLink} ${isActive ? styles.active : ""}`
            }
          >
            Profile
          </NavLink>
        </li>
       
      </ul>
    </nav>
  );
}

export default Navbar;
