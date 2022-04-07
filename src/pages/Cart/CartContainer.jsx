import { useCart } from "../../contexts";
import { CartCard } from "../../components";

const CartContainer = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();

  return (
    <section className="cart__products__container d-flex col gap-2">
      {cart &&
        cart.map((product) => (
          <CartCard key={product._id} productDetails={product} />
        ))}
    </section>
  );
};

export { CartContainer };
