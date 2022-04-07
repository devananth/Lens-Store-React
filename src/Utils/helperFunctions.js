export const itemNotInList = (id, arr) =>
  arr.some(({ _id }) => id === _id) === false;

export const getNumberFromFormattedPrice = (price) => {
  return Number(price.toString().replace(/\D/g, ""));
};

export const getPriceCardDetails = (data) => {
  const initialPriceCardState = {
    totalPrice: 0,
    totalDiscount: 0,
    totalDeliveryCharge: 1000,
  };

  const priceCardDetails = data.reduce((priceCard, product) => {
    return {
      ...priceCard,
      totalPrice:
        priceCard.totalPrice +
        product.quantity *
          getNumberFromFormattedPrice(product.price.current_price),
      totalDiscount:
        priceCard.totalDiscount +
        product.quantity *
          (getNumberFromFormattedPrice(product.price.earlier_price) -
            getNumberFromFormattedPrice(product.price.current_price)),
    };
  }, initialPriceCardState);

  return priceCardDetails;
};
