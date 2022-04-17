import { useFilter } from "../contexts";

const filterByCategory = (products, categoryName) => {
  return products.filter((product) => product.categoryName === categoryName);
};

const filterByBrand = (products, brands) => {
  return brands.length === 0
    ? [...products]
    : products.filter(({ brandName }) => brands.includes(brandName));
};

const filterByRating = (products, ratingMoreThan) => {
  if (ratingMoreThan === undefined) {
    return [...products];
  }
  return products.filter(
    ({ rating }) => Number(rating) >= Number(ratingMoreThan)
  );
};

const filterByPriceRange = (products, maxPrice) => {
  return products.filter(({ price: { current_price } }) => {
    const [productPrice, maximumPrice] = [
      getNumberFromFormattedPrice(current_price),
      getNumberFromFormattedPrice(maxPrice),
    ];

    return productPrice <= maximumPrice;
  });
};

const getNumberFromFormattedPrice = (price) => {
  return Number(price.toString().replace(/\D/g, ""));
};

const sortBy = (products, sortBy) => {
  if (sortBy === "High To Low") {
    return [
      ...products.sort((a, b) => {
        const {
          price: { current_price: firstPrice },
        } = a;
        const {
          price: { current_price: secondPrice },
        } = b;
        return (
          getNumberFromFormattedPrice(secondPrice) -
          getNumberFromFormattedPrice(firstPrice)
        );
      }),
    ];
  } else {
    return [
      ...products.sort((a, b) => {
        const {
          price: { current_price: firstPrice },
        } = a;
        const {
          price: { current_price: secondPrice },
        } = b;

        return (
          getNumberFromFormattedPrice(firstPrice) -
          getNumberFromFormattedPrice(secondPrice)
        );
      }),
    ];
  }
};

const getCategoryNames = (categories) => {
  return categories.map(({ categoryName }) => categoryName);
};

const getBrandNames = (categories, categoryName) => {
  return categories.find(
    ({ categoryName: category }) => category === categoryName
  ).brands;
};

const getFilteredProducts = (products) => {
  const { filterState } = useFilter();

  const filteredByCategory = filterByCategory(
    products,
    filterState.filterByCategory
  );
  const filteredByBrand = filterByBrand(
    filteredByCategory,
    filterState.filterByBrands
  );
  const filteredByRating = filterByRating(
    filteredByBrand,
    filterState.filterByRating
  );

  const filteredByPriceRange = filterByPriceRange(
    filteredByRating,
    filterState.filterByPriceRange
  );

  const sortedProducts = sortBy(filteredByPriceRange, filterState.sortBy);

  return sortedProducts;
};

export { getFilteredProducts, getCategoryNames, getBrandNames };
