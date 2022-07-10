import { Routes, Route } from "react-router-dom";
// import { MockApi } from "../components";
import {
  Home,
  Login,
  SignUp,
  ProductListing,
  Wishlist,
  Cart,
  PageNotFound,
  MockAPI,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products" element={<ProductListing />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
      {/* <Route path="/mockman" element={<MockAPI />} /> */}
    </Routes>
  );
};

export { AllRoutes };
