import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  ProductListing,
  Wishlist,
  Cart,
  PageNotFound,
  ProductDetails,
  Profile,
} from "../pages";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:productId" element={<ProductDetails />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export { AllRoutes };
