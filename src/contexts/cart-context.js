import { createContext, useContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducers";

const CartContext = createContext({});

const initialCartState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const { Provider } = CartContext;

  const [cartState, cartDispatch] = useReducer(cartReducer, initialCartState);

  const value = { cartState, cartDispatch };

  return <Provider value={value}>{children}</Provider>;
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
