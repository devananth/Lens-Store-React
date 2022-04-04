import { NavBar } from "../../components";
import { ProductsContainer } from "./ProductsContainer";
import { ProductsFilter } from "./ProductsFilter";

const ProductListing = () => {
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
