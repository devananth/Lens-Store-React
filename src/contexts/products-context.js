import { createContext, useContext, useReducer, useEffect } from "react";
import { productReducer } from "../reducers";
import { PRODUCT_ACTIONS } from "../Utils";
import { getProducts, getCategories } from "../Utils/apiCalls";

const ProductContext = createContext({});

const initialProductState = {
  loading: true,
  products: [],
  categories: [],
  error: "",
};

const ProductProvider = ({ children }) => {
  const { Provider } = ProductContext;

  const [productState, productDispatch] = useReducer(
    productReducer,
    initialProductState
  );

  useEffect(() => {
    getCategories(productDispatch);
    getProducts(productDispatch);
  }, []);

  const value = { ...productState, productDispatch };

  return <Provider value={value}>{children}</Provider>;
};

const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
