import { NavLink } from 'react-router';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="content-container">
        <div className={styles.navInner}>
          <div
            className={styles.logo}
            role="img"
            aria-label="Dessert Lab Logo: a mixing bowl and whisk"
          >
            🥣 Dessert Lab
          </div>
          <div className={styles.navLinks}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/create"
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              Collection
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
