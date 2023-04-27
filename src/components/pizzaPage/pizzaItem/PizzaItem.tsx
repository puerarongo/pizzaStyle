import React from "react";
import styles from "./PizzaItem.module.css";
import IProduct from "../../../services/interfaces/productInterface";
import { Button } from "react-bootstrap";

const PizzaItem: React.FC<IProduct> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const addToCart = () => {
    console.log("addToCart!");
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.image} src={`${image}`} alt={`${id}`} />
        <div className={styles.detail}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>{`Price: $ ${price}`}</p>
        </div>
        {true ? (
          <Button
            variant="success"
            className={styles.add__button}
            type="button"
            onClick={addToCart}
          >
            Add to cart
          </Button>
        ) : (
          <Button
            variant="danger"
            type="button"
            className={styles.delete__button}
          >
            Delete
          </Button>
        )}
      </div>
    </>
  );
};

export default PizzaItem;
