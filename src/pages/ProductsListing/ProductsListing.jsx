import { NavBar } from "../../components";
import { ProductsContainer } from "./ProductsContainer";
import { ProductsFilter } from "./ProductsFilter";
import { useDocumentTitle } from "../../custom-hooks";

const ProductListing = () => {
  useDocumentTitle("Products | Lens Store");
  return (
    <>
      <NavBar />
      <div className="d-flex gap-3">
        <ProductsFilter />
        <ProductsContainer />
      </div>
    </>
  );
};

export { ProductListing };
