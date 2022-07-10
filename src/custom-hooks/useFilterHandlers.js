import { useFilter } from "../contexts";
import { FILTER_ACTIONS } from "../Utils/constants";

const useFilterHandlers = () => {
  const { filterDispatch } = useFilter();

  const categoryHandler = (categoryName) => {
    filterDispatch({
      type: FILTER_ACTIONS.CATEGORY,
      payload: categoryName,
    });
  };

  const sortByHandler = (sortByValue) => {
    filterDispatch({
      type: FILTER_ACTIONS.SORT_BY,
      payload: sortByValue,
    });
  };

  const ratingHandler = (ratingValue) => {
    const ratingMoreThan = ratingValue[0];
    filterDispatch({
      type: FILTER_ACTIONS.RATING,
      payload: ratingMoreThan,
    });
  };

  const brandHandler = (brandName) => {
    filterDispatch({
      type: FILTER_ACTIONS.BRAND,
      payload: brandName,
    });
  };

  const priceRangeHandler = (event) => {
    filterDispatch({
      type: FILTER_ACTIONS.PRICE_RANGE,
      payload: event.target.value,
    });
  };

  const clearFiltersHandler = (event) => {
    filterDispatch({
      type: FILTER_ACTIONS.CLEAR_FILTERS,
      payload: event.target.value,
    });
  };

  return {
    categoryHandler,
    sortByHandler,
    ratingHandler,
    brandHandler,
    priceRangeHandler,
    clearFiltersHandler,
  };
};

export { useFilterHandlers };
