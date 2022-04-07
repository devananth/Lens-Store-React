import "./cart.css";

const QuantityBtn = ({ quantity, increaseQuantity, decreaseQuantity }) => {
  return (
    <div className="d-flex y-center gap-2">
      <span className="txt-sbold">Quantity : </span>
      <button className="quantity__btn" onClick={decreaseQuantity}>
        -
      </button>
      <span className="quantity__btn">{quantity}</span>
      <button className="quantity__btn" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export { QuantityBtn };
