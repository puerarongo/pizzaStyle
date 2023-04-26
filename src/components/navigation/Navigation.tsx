import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import svgPath from "../../services/svgPath";

const Navigation: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <svg className={styles.svg__logo}>
            <use href={svgPath.pizza + "#pizza"}></use>
          </svg>

          <NavLink className={styles.link} to="/">
            Pizza
          </NavLink>
        </div>
        <div className={styles.cart__container}>
          <NavLink className={styles.link} to="/cart">
            <svg className={styles.svg}>
              <use href={svgPath.basket + "#basket"}></use>
            </svg>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
