import IPizzaItem from "./pizzaItemInterface";

interface IInitialState {
  cartItems: IPizzaItem[];
  totalAmount: number;
  totalQuantity: number;
}

export default IInitialState;
