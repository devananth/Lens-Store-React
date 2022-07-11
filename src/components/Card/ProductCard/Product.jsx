import { useNavigate } from "react-router-dom";
import { useWishlist, useCart, useAuth } from "../../../contexts";
import { useProductHandlers } from "../../../custom-hooks";
import { WISHLIST_ACTIONS, CART_ACTIONS } from "../../../Utils";
import { isItemInList } from "../../../Utils";
import { ProductBtn } from "./ProductBtn";
import "./productCard.css";

const Product = ({ productDetails }) => {
  const {
    _id,
    title,
    image,
    categoryName,
    brandName,
    price: { earlier_price, current_price, offer_percentage },
    isNewBadge,
    rating,
    isInStock,
  } = productDetails;

  const navigate = useNavigate();

  const {
    isInCart,
    isInWishlist,
    addToCartHandler,
    wishlistClickHandler,
    iconColor,
  } = useProductHandlers(productDetails);

  return (
    <div className="card__vertical__container">
      <div
        className="img__container cursor-ptr"
        onClick={() => navigate(`/products/${_id}`)}
      >
        <img src={image} alt={title} className="img-responsive card-img" />
        {isNewBadge && (
          <span className="txt-badge rounded card__badge">New Offer</span>
        )}
        <div className="card__icon" onClick={wishlistClickHandler}>
          <i
            className="far fa-heart fa"
            aria-hidden="true"
            style={{ color: `${iconColor}` }}
          ></i>
        </div>
      </div>

      <div className="text-container flex-1 d-flex col">
        <div className="text__container--header d-flex col">
          <span className="txt-base txt-bold">
            {`${categoryName} - ${brandName}`}
          </span>
          <span className="flex-1 txt-base txt-sbold">{title}</span>
        </div>
        <div className="d-flex align-center gap-1 mb-sm wrap">
          <span className="txt-xl txt-bold">{current_price}</span>
          <span className="txt-strike-through">{earlier_price}</span>
          <span className="txt-bold danger">{`${offer_percentage}% OFF`}</span>
        </div>
        <div className="d-flex space-bw gap-1">
          <ProductBtn productId={_id} onClickHandler={addToCartHandler} />
          <div className="rating__badge">
            <span>{rating}</span>
            <i className="fa fa-star rating__star__icon checked"></i>
            <span>| 5</span>
          </div>
        </div>
      </div>
      {!isInStock && (
        <div className="overlay-text d-flex xy-center txt-bold txt-3xl">
          Out of Stock
        </div>
      )}
    </div>
  );
};

export { Product };
