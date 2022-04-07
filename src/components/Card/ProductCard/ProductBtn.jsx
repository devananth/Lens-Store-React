import { Link } from "react-router-dom";
import { useCart } from "../../../contexts";
import { itemNotInList, CART_ACTIONS } from "../../../Utils";

const ProductBtn = ({ productId, onClickHandler }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  return (
    <>
      {itemNotInList(productId, cart) ? (
        <button className="btn btn-primary p-0-5" onClick={onClickHandler}>
          Add to Cart
        </button>
      ) : (
        <Link to={"/cart"} className="btn btn-primary">
          Move to Cart
        </Link>
      )}
    </>
  );
};

export { ProductBtn };
