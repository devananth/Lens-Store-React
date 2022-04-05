import { useProduct } from "../../contexts";
import { Product } from "../../components";
import { getFilteredProducts } from "../../Utils/productsUtils";

const ProductsContainer = () => {
  const { loading, products, error } = useProduct();
  console.log(loading, error, products);
  const filteredProducts = getFilteredProducts(products) ?? [];

  return (
    <div className="products__container">
      <h3 className="txt-xl txt-bold">
        Showing All Products ({filteredProducts && filteredProducts.length}){" "}
      </h3>
      <ul className="d-flex gap-2 wrap">
        {filteredProducts &&
          filteredProducts.map((product) => {
            return (
              <li key={product._id}>
                <Product {...product} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export { ProductsContainer };
