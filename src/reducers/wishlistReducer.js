import { WISHLIST_ACTIONS } from "../Utils";

const wishlistReducer = (state, action) => {
  const { type, payload } = action;

  const { wishlist } = state;

  console.log(type, payload, wishlist);

  switch (type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST:
      return { ...state, wishlist: [...state.wishlist, payload] };
    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item._id !== payload._id),
      };
    default:
      return { ...state };
  }
};

export { wishlistReducer };
