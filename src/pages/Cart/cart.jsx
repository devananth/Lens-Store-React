import { Link } from "react-router-dom";
import { NavBar, CartPriceCard } from "../../components";
import { useCart } from "../../contexts";
import { CartContainer } from "./CartContainer";
import { useDocumentTitle } from "../../custom-hooks";

const Cart = () => {
  useDocumentTitle("Cart | Lens Store");

  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  return (
    <>
      <NavBar />
      <h4 className="txt-bold txt-center my-2">My Cart {`(${cart.length})`}</h4>
      <section className="cart__wrapper d-flex">
        {cart.length ? (
          <>
            <CartContainer />
            <CartPriceCard />
          </>
        ) : (
          <h3 className="txt-bold txt-center w-100">
            No items in cart
            <Link to={"/products"} className="btn btn-primary m-1">
              Shop Now
            </Link>
          </h3>
        )}
      </section>
    </>
  );
};

export { Cart };
