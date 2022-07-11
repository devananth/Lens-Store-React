import { Link } from "react-router-dom";
import { Product } from "../../components";
import { useWishlist } from "../../contexts";
import { useDocumentTitle } from "../../custom-hooks";
import "./wishlist.css";

const Wishlist = () => {
  useDocumentTitle("Wishlist | Lens Store");

  const { wishlist } = useWishlist();

  return (
    <>
      <h4 className="txt-bold txt-center my-2">
        My Wishlist {`(${wishlist.length})`}
      </h4>
      <section className="wishlist__wrapper d-flex xy-center wrap gap-2 m-sm">
        {wishlist.length > 0 ? (
          <>
            {wishlist.map((product) => (
              <Product key={product._id} productDetails={product} />
            ))}
          </>
        ) : (
          <h3 className="txt-bold txt-center w-100">
            No items in wishlist
            <Link to={"/products"} className="btn btn-primary m-1">
              Add Now
            </Link>
          </h3>
        )}
      </section>
    </>
  );
};

export { Wishlist };
