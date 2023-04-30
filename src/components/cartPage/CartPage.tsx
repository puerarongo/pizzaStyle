import React from "react";
import styles from "./CartPage.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { Button } from "react-bootstrap";
import CartItem from "./cartItem/CartItem";
import { Notify } from "notiflix/build/notiflix-notify-aio";

Notify.init({
  success: {
    background: "#c5c5c5",
    textColor: "#fff",
    notiflixIconColor: "#fff",
  },
});

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state: any) => state.cart);

  const orderHandler = () => {
    dispatch(cartActions.clearCart());
    Notify.success("Order successfully completed");
  };

  return (
    <>
      <div className={styles.container}>
        {cart.cartItems.length > 0 ? (
          <>
            <h2 className={styles.cart__title}>Pizza Cart</h2>
            <ul className={styles.cart__list}>
              {cart.cartItems.map(({ id }: any) => {
                return (
                  <li className={styles.cart__item} key={id}>
                    <CartItem id={id} />
                  </li>
                );
              })}

              <li className={styles.order__container}>
                <h3
                  className={styles.total__quantity}
                >{`Total Quantity: ${cart.totalQuantity} pcs`}</h3>
                <h3
                  className={styles.total__amount}
                >{`Total: ${cart.totalAmount} UAH`}</h3>
                <Button
                  variant="success"
                  type="button"
                  className={styles.button}
                  onClick={orderHandler}
                >
                  Make an order
                </Button>
              </li>
            </ul>
          </>
        ) : (
          <h2 className={styles.title__empty}>
            Please, choose pizza
            <Link to="/" className={styles.link__empty}>
              here!
            </Link>
          </h2>
        )}
      </div>
    </>
  );
};

export default CartPage;
