import { useNavigate } from "react-router-dom";
import { useAuth, useCart, useWishlist } from "../contexts";
import { isItemInList } from "../Utils";

const useProductHandlers = (productDetails) => {
  const navigate = useNavigate();
  const {
    authState: { isUserLoggedIn },
  } = useAuth();

  const { wishlist, addToWishlistServerCall, removeFromWishlistServerCall } =
    useWishlist();

  const { cart, addToCartServerCall, removeFromCartServerCall } = useCart();

  const isInWishlist = isItemInList(productDetails, wishlist);
  const isInCart = isItemInList(productDetails, cart);

  const addToCartHandler = () => {
    if (!isUserLoggedIn) {
      navigate("/login");
    }

    if (!isInCart) {
      addToCartServerCall(productDetails);
    } else {
      removeFromCartServerCall(productDetails);
    }
  };

  const wishlistClickHandler = (event) => {
    event.stopPropagation();

    if (!isUserLoggedIn) {
      navigate("/login");
    }

    if (!isInWishlist) {
      addToWishlistServerCall(productDetails);
    } else {
      removeFromWishlistServerCall(productDetails);
    }
  };

  const iconColor = isInWishlist ? "red" : "black";

  return {
    isInCart,
    isInWishlist,
    addToCartHandler,
    wishlistClickHandler,
    iconColor,
  };
};

export { useProductHandlers };
