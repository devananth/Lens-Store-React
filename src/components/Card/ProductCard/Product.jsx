import { useWishlist } from "../../../contexts/wishlist-context";
import { WISHLIST_ACTIONS } from "../../../Utils";
import { itemNotInList } from "../../../Utils";

const Product = ({ productDetails }) => {
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
  } = productDetails;

  const { wishlistState, wishlistDispatch } = useWishlist();

  const { wishlist } = wishlistState;

  const wishlistClickHandler = () => {
    console.log(itemNotInList(_id, wishlist));

    if (!isInWishlist && itemNotInList(_id, wishlist)) {
      wishlistDispatch({
        type: WISHLIST_ACTIONS.ADD_TO_WISHLIST,
        payload: { ...productDetails, isInWishlist: true },
      });
    } else {
      wishlistDispatch({
        type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST,
        payload: { ...productDetails, isInWishlist: false },
      });
    }
  };

  const isInWishlistFunc = (id) => wishlist.some(({ _id }) => id === _id);

  const iconColor = isInWishlistFunc(_id) ? "red" : "black";

  return (
    <div
      className="card__vertical__container d-flex col box-shadow m-1"
      style={{ height: "28rem", maxWidth: "28rem" }}
    >
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

      <img src={image} alt={title} className="img-responsive card-img" />

      <div className="text-container flex-1 d-flex col">
        <span className="txt-base txt-bold">
          {categoryName} - {brandName}
        </span>
        <span className="flex-1 txt-base txt-sbold">{title}</span>
        <div className="d-flex align-center gap-1 mb-sm wrap">
          <span className="txt-xl txt-bold">{current_price}</span>
          <span className="txt-strike-through">{earlier_price}</span>
          <span className="txt-bold danger">{`${offer_percentage}% OFF`}</span>
        </div>
        <div className="d-flex space-bw">
          <button className="btn btn-primary">Add to Cart</button>
          <div className="rating__badge">
            <span>{rating}</span>
            <i className="fa fa-star rating__star__icon checked"></i>
            <span>| 5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Product };
