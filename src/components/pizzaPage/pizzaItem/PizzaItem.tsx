import React, { useState, useEffect } from "react";
import styles from "./PizzaItem.module.css";
import IProduct from "../../../services/interfaces/productInterface";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/cartSlice";

const PizzaItem: React.FC<IProduct> = ({
  id,
  title,
  description,
  price,
  image,
}) => {
  const [count, setCount] = useState<number>(0);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (cart.cartItems.length > 0) {
      const newCount = cart.cartItems.find((el: any) => id === el.id);
      if (newCount) setCount(newCount.quantity);
    }
  }, [cart, id]);

  const addToCart = () => {
    dispatch(
      cartActions.addProduct({
        id,
        title,
        description,
        price,
        image,
      })
    );
  };

  const incrementHandler = () => {
    if (count >= 100) console.log("Cant order more items in this category");
    else {
      dispatch(
        cartActions.incrementOrDecrement({
          id,
          title,
          description,
          price,
          image,
          type: "increment",
        })
      );
    }
  };

  const decrementHandler = () => {
    if (count < 2) {
      dispatch(
        cartActions.deleteProduct({
          id,
        })
      );
    } else {
      dispatch(
        cartActions.incrementOrDecrement({
          id,
          title,
          description,
          price,
          image,
          type: "decrement",
        })
      );
    }
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
        {!cart.cartItems.find((el: IProduct) => el.id === id) ? (
          <Button
            variant="success"
            className={styles.add__button}
            type="button"
            onClick={addToCart}
          >
            Add to cart
          </Button>
        ) : (
          <div className={styles.incrementAndDecrement}>
            <Button
              variant="danger"
              type="button"
              className={styles.decrement__button}
              onClick={decrementHandler}
            >
              -
            </Button>
            <p className={styles.count}>{count}</p>
            <Button
              variant="success"
              type="button"
              className={styles.increment__button}
              onClick={incrementHandler}
            >
              +
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default PizzaItem;
