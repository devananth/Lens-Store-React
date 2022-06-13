import { NavBar, Footer, Divider } from "../../components";
import { Banner } from "./banner";
import { ShopByCategory } from "./shopByCategory";
import { useDocumentTitle } from "../../custom-hooks";
import "./home.css";

const Home = () => {
  useDocumentTitle("Lens Store");
  return (
    <>
      <NavBar />
      <Banner />
      <Divider />
      <Divider />
      <ShopByCategory />
      <Divider />
      <Divider />
      <Footer />
    </>
  );
};

export { Home };
