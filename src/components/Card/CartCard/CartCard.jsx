import { QuantityBtn } from "./QuantityBtn";
import { useCart, useWishlist } from "../../../contexts";
import { CART_ACTIONS, WISHLIST_ACTIONS } from "../../../Utils";
import "./cart.css";

const CartCard = ({ productDetails }) => {
  const {
    _id,
    title,
    image,
    categoryName,
    brandName,
    price: { earlier_price, current_price, offer_percentage },
    isInWishlist,
    isNewBadge,
    rating,
    qty,
  } = productDetails;

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
    addToWishlistServerCall(productDetails);
    removeFromCartServerCall(productDetails);
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
            Remove to Cart
          </button>
          <button
            className="btn btn-primary-outline w-100"
            onClick={addToWishList}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
