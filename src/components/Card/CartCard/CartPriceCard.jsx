import { useCart } from "../../../contexts";
import { getPriceCardDetails } from "../../../Utils";
import "./cart.css";

const CartPriceCard = () => {
  const { cart } = useCart();

  const { totalPrice, totalDiscount, totalDeliveryCharge } =
    getPriceCardDetails(cart);

  return (
    <section className="cart__bill__wrapper d-flex col ml-auto gap-2">
      <h4 className="txt-xl txt-bold txt-center pb-sm">PRICE DETAILS</h4>
      <ul>
        <li>
          <span className="txt-lg">Price ({`${cart.length}`} items)</span>
          <span>Rs.{totalPrice}</span>
        </li>
        <li>
          <span className="txt-lg">Discount </span>
          <span>Rs.{Math.round(totalDiscount, 2)}</span>
        </li>
        <li>
          <span className="txt-lg">Delivery Charges</span>
          <span>Rs.{totalDeliveryCharge}</span>
        </li>
        <li className="txt-lg txt-bold">
          <span>Totat Amount</span>
          <span>Rs.{totalPrice - totalDiscount + totalDeliveryCharge}</span>
        </li>
      </ul>
      <button className="btn btn-primary w-100 txt-bold">Place Order</button>
    </section>
  );
};

export { CartPriceCard };
