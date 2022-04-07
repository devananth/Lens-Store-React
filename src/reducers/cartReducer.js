import { CART_ACTIONS, getNumberFromFormattedPrice } from "../Utils";

const cartReducer = (state, action) => {
  const { type, payload } = action;

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
    quantity,
  } = payload;

  switch (type) {
    case CART_ACTIONS.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, { ...payload, quantity: 1 }],
      };
    case CART_ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== _id),
      };
    case CART_ACTIONS.INCREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === _id
            ? { ...item, quantity: item.quantity + 1 }
            : { ...item }
        ),
      };
    case CART_ACTIONS.DECREASE_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === _id
            ? { ...item, quantity: item.quantity - 1 }
            : { ...item }
        ),
      };
    default:
      return { ...state };
  }
};

export { cartReducer };
