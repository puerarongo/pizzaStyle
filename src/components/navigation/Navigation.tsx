import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <svg className={styles.svg__logo}>
          <use href="#"></use>
        </svg>

        <NavLink className={styles.link} to="/">
          Pizza
        </NavLink>
      </div>
      <div className={styles.cart__container}>
        <NavLink className={styles.link} to="/cart">
          Cart
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
