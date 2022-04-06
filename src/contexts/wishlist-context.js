import { createContext, useContext, useReducer, useEffect } from "react";
import { wishlistReducer } from "../reducers";

const WishListContext = createContext({});

const initialwishlistState = {
  wishlist: [],
};

const WishlistProvider = ({ children }) => {
  const { Provider } = WishListContext;

  const [wishlistState, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialwishlistState
  );

  const value = { wishlistState, wishlistDispatch };

  return <Provider value={value}>{children}</Provider>;
};

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishlistProvider };
