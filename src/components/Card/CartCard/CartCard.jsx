import { QuantityBtn } from "./QuantityBtn";
import { useCart, useWishlist } from "../../../contexts";
import { toast } from "react-toastify";
import "./cart.css";
import { useProductHandlers } from "../../../custom-hooks";

const CartCard = ({ productDetails }) => {
  const {
    _id,
    title,
    image,
    categoryName,
    brandName,
    price: { earlier_price, current_price, offer_percentage },
    isNewBadge,
    rating,
    qty,
  } = productDetails;

  const { isInWishlist, wishlistClickHandler } =
    useProductHandlers(productDetails);

  const { cart, removeFromCartServerCall, updateCartItemQuantityServerCall } =
    useCart();

  const { wishlist, addToWishlistServerCall, removeFromWishlistServerCall } =
    useWishlist();

  const increaseQuantity = () => {
    updateCartItemQuantityServerCall(productDetails, "increment");
  };

  const decreaseQuantity = () => {
    updateCartItemQuantityServerCall(productDetails, "decrement");
  };

  const removeFromCart = () => {
    removeFromCartServerCall(productDetails);
  };

  const addToWishList = () => {
    if (!isInWishlist) {
      addToWishlistServerCall(productDetails);
      removeFromCartServerCall(productDetails);
    } else {
      toast.info("Item already in wishlist");
    }
  };

  return (
    <div className="card__horizontal__container d-flex">
      <div className="img-container">
        <img src={image} className="card-img img-responsive" alt={title} />
      </div>
      <div className="text-container d-flex flex-1 col gap-1">
        <p className="txt-lg txt-sbold">{title}</p>
        <div className="d-flex y-center gap-1">
          <span className="txt-2xl txt-bold">{current_price}</span>
          <span className="txt-strike-through">{earlier_price}</span>
          <span className="txt-bold danger">{offer_percentage}%</span>
        </div>
        <QuantityBtn
          quantity={qty}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />

        <div className="d-flex col gap-1">
          <button className="btn btn-primary w-100" onClick={removeFromCart}>
            Remove from Cart
          </button>
          <button
            className="btn btn-primary-outline w-100"
            onClick={addToWishList}
          >
            Add to wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
