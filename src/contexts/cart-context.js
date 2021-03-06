import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAxios } from "../custom-hooks";
import { useAuth } from "./auth-context";

const CartContext = createContext({});

const initialwishlistState = {
  cart: [],
};

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toastMsg, setToastMsg] = useState("");

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  const { loader, response, error, callAPI } = useAxios();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/cart",
        method: "get",
        headers: { authorization: authToken },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      const updatedList = response?.data?.cart;
      setCart(updatedList);
      if (toastMsg) {
        toast.success(toastMsg);
      }
    }
  }, [response]);

  const addToCartServerCall = (product) => {
    setToastMsg("Added to cart");
    callAPI({
      url: "/api/user/cart",
      method: "post",
      headers: { authorization: authToken },
      data: { product },
    });
  };

  const removeFromCartServerCall = (product) => {
    setToastMsg("Removed from Cart");
    callAPI({
      url: `/api/user/cart/${product._id}`,
      method: "delete",
      headers: { authorization: authToken },
    });
  };

  const updateCartItemQuantityServerCall = (product, actionType) => {
    callAPI({
      url: `/api/user/cart/${product._id}`,
      method: "post",
      headers: { authorization: authToken },
      data: { action: { type: actionType } },
    });
  };

  const emptyCart = () => {
    setToastMsg("");
    callAPI({
      url: `/api/user/cart`,
      method: "delete",
      headers: { authorization: authToken },
    });
  };

  const { Provider } = CartContext;

  const value = {
    cart,
    setCart,
    addToCartServerCall,
    removeFromCartServerCall,
    updateCartItemQuantityServerCall,
    emptyCart,
  };

  return <Provider value={value}>{children}</Provider>;
};

const useCart = () => useContext(CartContext);

export { useCart, CartProvider };
