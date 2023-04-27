import React, { useState, useEffect } from "react";
import styles from "./CartItem.module.css";
import ICartItem from "../../../services/interfaces/cartItemInterface";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../../redux/slices/cartSlice";
import { Button } from "react-bootstrap";

const CartItem: React.FC<ICartItem> = ({ id }) => {
  const [item, setItem] = useState<any>(0);
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (cart.cartItems.length > 0) {
      const newItem = cart.cartItems.find((el: any) => id === el.id);
      if (newItem) setItem(newItem);
    }
  }, [cart, id]);

  const removeHandler = () => {
    dispatch(cartActions.deleteProduct({ id }));
  };

  const incrementHandler = () => {
    const { title, description, price, image, quantity } = item;

    if (quantity >= 100) console.log("Cant order more items in this category");
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
    const { title, description, price, image, quantity } = item;

    if (quantity < 2) {
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
        <img className={styles.img} src={`${item.image}`} alt={`${id}`} />

        <h3 className={styles.title}>{item.title}</h3>
        <div className={styles.into}>
          <div className={styles.incrementAndDecrement}>
            <Button
              variant="danger"
              type="button"
              className={styles.decrement__button}
              onClick={decrementHandler}
            >
              -
            </Button>
            <p className={styles.quantity}>{`${item.quantity} pcs`}</p>
            <Button
              variant="success"
              type="button"
              className={styles.increment__button}
              onClick={incrementHandler}
            >
              +
            </Button>
          </div>
          <p className={styles.price}>{`${item.totalPrice} UAH`}</p>
          <Button
            variant="danger"
            className={styles.button}
            type="button"
            onClick={removeHandler}
          >
            Remove
          </Button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
