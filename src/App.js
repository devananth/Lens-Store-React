import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Login,
  SignUp,
  ProductListing,
  Wishlist,
  Cart,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
