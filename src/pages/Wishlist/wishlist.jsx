import { NavBar, Product } from "../../components";
import { useWishlist } from "../../contexts/wishlist-context";
import "./wishlist.css";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useWishlist();

  const { wishlist } = wishlistState;

  return (
    <>
      <NavBar />
      <h4 className="txt-bold txt-center my-2">
        My Wishlist {`(${wishlist.length})`}
      </h4>
      <section className="wishlist__wrapper d-flex xy-center wrap gap-2 m-sm">
        {wishlist &&
          wishlist.map((product) => (
            <Product key={product._id} productDetails={product} />
          ))}
      </section>
    </>
  );
};

export { Wishlist };
