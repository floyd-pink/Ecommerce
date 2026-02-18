import { NavLink, useNavigate,useLocation } from "react-router-dom";
import styles from "../Styles/Navbar.module.css";
import SearchBar from "../Functionality/SearchBar";

import { useCheckout } from "../Context/CheckoutContext";


function Navbar() {
  const {cart}=useCheckout();
  const navigate=useNavigate();
  const location=useLocation();
  const showSearchBar=location.pathname==='/'||location.pathname==='/products'|| location.pathname==='/search';
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo} onClick={() => navigate({ pathname: "/" }, { replace: true })} > Ecommerce </h1>

   {showSearchBar &&<SearchBar/>}
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
      `${styles.navLink} ${isActive ? styles.active : ""} ${cart.length > 0 ? styles.cartLink : ""}`
    }
  >
    Cart
    {cart.length > 0 && (
      <span className={styles.cartBadge}>{cart.length}</span>
    )}
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
