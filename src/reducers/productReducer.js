import { PRODUCT_ACTIONS } from "../Utils";

const productReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTIONS.LOADING:
      return { ...state, loading: payload };
    case PRODUCT_ACTIONS.SET_PRODUCTS:
      return { ...state, products: payload };
    case PRODUCT_ACTIONS.SET_CATEGORIES:
      return { ...state, categories: payload };
    case PRODUCT_ACTIONS.ERROR:
      return { ...state, error: payload };
    default:
      return { ...state };
  }
};

export { productReducer };
