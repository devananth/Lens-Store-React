import { FILTER_ACTIONS } from "../Utils/constants";
import { initialFilterState } from "./constants";

const filterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FILTER_ACTIONS.CATEGORY:
      return { ...state, filterByCategory: payload, filterByBrands: [] };
    case FILTER_ACTIONS.BRAND:
      return {
        ...state,
        filterByBrands: state.filterByBrands.includes(payload)
          ? state.filterByBrands.filter((brandName) => brandName !== payload)
          : [...state.filterByBrands, payload],
      };
    case FILTER_ACTIONS.RATING:
      return { ...state, filterByRatings: payload };
    case FILTER_ACTIONS.SORT_BY:
      return { ...state, sortBy: payload };
    case FILTER_ACTIONS.PRICE_RANGE:
      return { ...state, filterByPriceRange: payload };
    case FILTER_ACTIONS.CLEAR_FILTERS:
      return { ...initialFilterState };
    default:
      return { ...state };
  }
};

export { filterReducer };
