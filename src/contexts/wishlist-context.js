import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAxios } from "../custom-hooks";
import { useAuth } from "./auth-context";

const WishListContext = createContext({});

const initialwishlistState = {
  wishlist: [],
};

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  const { loader, response, error, callAPI } = useAxios();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/wishlist",
        method: "get",
        headers: { authorization: authToken },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      const updatedList = response?.data?.wishlist;

      if (updatedList.length > wishlist.length) {
        toast.success("Added to wishlist");
      } else if (updatedList.length < wishlist.length) {
        toast.success("Removed from wishlist");
      }
      setWishlist(updatedList);
    }
  }, [response]);

  const addToWishlistServerCall = (product) => {
    callAPI({
      url: "/api/user/wishlist",
      method: "post",
      headers: { authorization: authToken },
      data: { product },
    });
  };

  const removeFromWishlistServerCall = (product) => {
    callAPI({
      url: `/api/user/wishlist/${product._id}`,
      method: "delete",
      headers: { authorization: authToken },
    });
  };

  const { Provider } = WishListContext;

  const value = {
    wishlist,
    setWishlist,
    addToWishlistServerCall,
    removeFromWishlistServerCall,
  };

  return <Provider value={value}>{children}</Provider>;
};

const useWishlist = () => useContext(WishListContext);

export { useWishlist, WishlistProvider };
