import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductBtn } from "../../components";
import { useProduct } from "../../contexts";
import { useProductHandlers } from "../../custom-hooks";
import "./productDetails.css";

const defaultProduct = {
  _id: "",
  title: "",
  image: "",
  categoryName: "",
  brandName: "",
  price: { earlier_price: "", current_price: "", offer_percentage: "" },
  isNewBadge: false,
  rating: "",
  isInStock: false,
};

const ProductDetails = () => {
  const { productId } = useParams();

  const [currentProduct, setCurrentProdcut] = useState(defaultProduct);

  const { products } = useProduct();

  useEffect(() => {
    const product = products.find(({ _id }) => _id === productId);
    if (product) {
      setCurrentProdcut(product);
    }
  }, [products]);

  const {
    _id,
    title,
    image,
    categoryName,
    brandName,
    price: { earlier_price, current_price, offer_percentage },
    isNewBadge,
    rating,
    isInStock,
  } = currentProduct;

  const {
    isInCart,
    isInWishlist,
    addToCartHandler,
    wishlistClickHandler,
    iconColor,
  } = useProductHandlers(currentProduct);

  return (
    <>
      <section className="main__contianer d-flex xy-center wrap gap-2 m-sm">
        {products.length > 0 && (
          <div className="product__wrapper gap-2">
            <div className="img__container">
              <img
                src={image}
                alt={title}
                className="img-responsive card-img"
              />
            </div>
            <div className="product__details d-flex col gap-2">
              <div className="product__details--header d-flex col gap-2">
                <span className="txt-bold txt-2xl">{title}</span>
                <span className="txt-base txt-xl txt-sbold">
                  {" "}
                  {`${categoryName} - ${brandName}`}{" "}
                </span>
              </div>
              <div className="d-flex align-center gap-1 mb-sm wrap">
                <span className="txt-2xl txt-bold">{current_price}</span>
                <span className="txt-2xl txt-strike-through">
                  {earlier_price}
                </span>
                <span className="txt-2xl txt-bold danger">{`${offer_percentage}% OFF`}</span>
              </div>
              <span>
                <span className="txt-bold">Rating : </span>
                {rating} ⭐
              </span>
              <hr />
              <div className="d-flex col gap-2">
                <span className="txt-regular d-flex align-center gap-1">
                  <i className="fas fa-truck"></i>
                  <span>Fast develivry</span>
                </span>
                <span className="txt-regular d-flex align-center gap-1">
                  <i className="fas fa-check-square"></i>
                  <span>Price displayed is inclusive of GST</span>
                </span>
                <span className="txt-regular d-flex align-center gap-1">
                  <i className="far fa-calendar-check"></i>
                  <span>{`Currently ${!isInStock ? "not " : ""}in stock`}</span>
                </span>
              </div>
              <div className="d-flex wrap gap-2">
                <ProductBtn productId={_id} onClickHandler={addToCartHandler} />
                <button className="btn btn-secondary p-0-5 flex-1">
                  {!isInWishlist ? (
                    <span onClick={wishlistClickHandler}>Add to wishlist</span>
                  ) : (
                    <Link to="/wishlist">Go to wishlist</Link>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export { ProductDetails };
