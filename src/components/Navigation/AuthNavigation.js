import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const AuthNavigation = () => (
  <div className={styles.authContainer}>
    <nav>
      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
          Реєстрація
      </NavLink>
          <NavLink
        to="/login"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Вхід
      </NavLink>
    </nav>
  </div>
);

export default AuthNavigation;