import React from "react";
import styles from "./CartItem.module.css";
import ICartItem from "../../../services/interfaces/cartItemInterface";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../redux/slices/cartSlice";
import { Button } from "react-bootstrap";

const CartItem: React.FC<ICartItem> = ({
  id,
  image,
  title,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(cartActions.deleteProduct({ id }));
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.img} src={`${image}`} alt={`${id}`} />

        <h3 className={styles.title}>{title}</h3>
        <div className={styles.into}>
          <p className={styles.quantity}>{`${quantity} pcs`}</p>
          <p className={styles.price}>{`${price} UAH`}</p>
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
