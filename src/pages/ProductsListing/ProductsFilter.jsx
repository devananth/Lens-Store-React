import { useProduct, useFilter } from "../../contexts";
import { FilterList } from "../../components";
import { getCategoryNames, getBrandNames } from "../../Utils/productsUtils";
import "./products.css";
import { FILTER_ACTIONS } from "../../Utils/constants";

const ProductsFilter = () => {
  const { loading: categoryStatus, categories, error } = useProduct();

  const {
    filterState: {
      filterByCategory,
      filterByBrands,
      filterByRatings,
      sortBy,
      filterByPriceRange,
    },
    filterDispatch,
  } = useFilter();

  const [categoryNameList, brandsList] = categoryStatus
    ? [[], []]
    : [
        getCategoryNames(categories),
        getBrandNames(categories, filterByCategory),
      ];

  const ratingsList = ["4⭐ & above", "3⭐ & above", "2⭐ & above"];
  const sortByList = ["High To Low", "Low To High"];

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

  return categoryStatus ? (
    <>
      <h1>Loading .... </h1>
    </>
  ) : (
    <aside className="products__filter p-1">
      <div className="d-flex">
        <h3 className="txt-xl txt-bold">Filters</h3>
        <button
          className="cursor-ptr txt-bold ml-auto mr-sm pb-0"
          onClick={clearFiltersHandler}
        >
          Clear All
        </button>
      </div>
      <hr />

      <FilterList
        filterHeading={"Category"}
        filterOptionsList={categoryNameList}
        filterType={"radio"}
        filterHandler={categoryHandler}
        isChecked={(value) => filterByCategory === value}
      />
      <hr />
      <FilterList
        filterHeading={"Brand"}
        filterOptionsList={brandsList}
        filterType={"checkbox"}
        filterHandler={brandHandler}
        isChecked={(value) => filterByBrands.includes(value)}
      />
      <hr />
      <FilterList
        filterHeading={"Customer Ratings"}
        filterOptionsList={ratingsList}
        filterType={"radio"}
        filterHandler={ratingHandler}
        isChecked={(value) => filterByRatings == value[0]}
      />
      <hr />
      <FilterList
        filterHeading={"Sort By"}
        filterOptionsList={sortByList}
        filterType={"radio"}
        filterHandler={sortByHandler}
        isChecked={(value) => sortBy === value}
      />
      <hr />
      <div className="price_slider m-sm">
        <label className="slide__text txt-lg txt-bold">
          {" "}
          Price {`0 - ${filterByPriceRange}`}
        </label>
        <input
          className="slider mt-1"
          type="range"
          list="steplist"
          min="0"
          max="200000"
          step="1000"
          value={filterByPriceRange}
          onChange={priceRangeHandler}
        />
      </div>
    </aside>
  );
};

export { ProductsFilter };
