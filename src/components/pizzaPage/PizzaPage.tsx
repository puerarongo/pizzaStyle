import React from "react";
import styles from "./PizzaPage.module.css";
import PizzaItem from "./pizzaItem/PizzaItem";
import products from "../../services/products";
import IProduct from "../../services/interfaces/productInterface";

const PizzaPage: React.FC = () => {
  return (
    <>
      <h1 className={styles.main__title}>Pizza Shop</h1>
      <ul className={styles.grid__list}>
        {products.map(({ id, title, description, price, image }: IProduct) => {
          return (
            <li className={styles.grid__item} key={id}>
              <PizzaItem
                id={id}
                title={title}
                description={description}
                price={price}
                image={image}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PizzaPage;
