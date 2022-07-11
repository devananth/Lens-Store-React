import { ProductsContainer } from "./ProductsContainer";
import { ProductsFilter } from "./ProductsFilter";
import { useDocumentTitle } from "../../custom-hooks";
import "./products.css";

const ProductListing = () => {
  useDocumentTitle("Products | Lens Store");
  return (
    <>
      <div className="products__wrapper d-flex gap-3">
        <ProductsFilter />
        <ProductsContainer />
      </div>
    </>
  );
};

export { ProductListing };
