import { useState } from "react";
import { useProduct, useFilter } from "../../contexts";
import { FilterList } from "../../components";
import { getCategoryNames, getBrandNames } from "../../Utils/productsUtils";
import "./products.css";
import { useFilterHandlers } from "../../custom-hooks";

const ProductsFilter = () => {
  const { loading: categoryStatus, categories, error } = useProduct();

  const [mobileNav, setMobileNav] = useState(false);

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

  const {
    categoryHandler,
    sortByHandler,
    ratingHandler,
    brandHandler,
    priceRangeHandler,
    clearFiltersHandler,
  } = useFilterHandlers();

  return categoryStatus ? (
    <>
      <h1>Loading .... </h1>
    </>
  ) : (
    <>
      <aside className={`products__filter ${mobileNav} p-1`}>
        <span onClick={() => setMobileNav((prev) => !prev)}>
          <i className="fas fa-angle-down"></i>
        </span>
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
      <aside
        className={`mobile__filter ${mobileNav} d-flex space-bw align-center`}
        onClick={() => setMobileNav((prev) => !prev)}
      >
        <span className="txt-bold">Filters</span>
        <span>
          <i className="fas fa-angle-up"></i>
        </span>
      </aside>
    </>
  );
};

export { ProductsFilter };
