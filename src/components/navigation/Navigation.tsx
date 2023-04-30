import React from "react";
import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import svgPath from "../../services/svgPath";
import { useSelector } from "react-redux";

const Navigation: React.FC = () => {
  const totalCount = useSelector((state: any) => state.cart.totalQuantity);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo__container}>
          <NavLink to="/">
            <svg className={styles.svg__logo}>
              <use href={svgPath.pizza + "#pizza"}></use>
            </svg>
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.link__active : styles.link}`
            }
            to="/"
          >
            Pizza
          </NavLink>
        </div>
        <div className={styles.cart__container}>
          <NavLink
            className={({ isActive }) =>
              `${isActive ? styles.link__active : styles.link}`
            }
            to="/cart"
          >
            <span className={styles.count__icon}>
              <svg className={styles.svg__cart}>
                <use href={svgPath.basket + "#basket"}></use>
              </svg>
              {totalCount > 0 && (
                <span className={styles.count__text}>{totalCount}</span>
              )}
            </span>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
