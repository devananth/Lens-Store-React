import { Link } from "react-router-dom";
import { useCart } from "../../../contexts";
import { isItemInList } from "../../../Utils";

const ProductBtn = ({ productId, onClickHandler }) => {
  const { cart } = useCart();

  return (
    <>
      {!isItemInList({ _id: productId }, cart) ? (
        <button
          className="btn btn-primary p-0-5 flex-1"
          onClick={onClickHandler}
        >
          Add to Cart
        </button>
      ) : (
        <button className="btn btn-primary p-0-5 flex-1">
          <Link to="/cart">Go to Cart</Link>
        </button>
      )}
    </>
  );
};

export { ProductBtn };
