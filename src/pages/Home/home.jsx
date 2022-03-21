import { NavBar, Footer, Divider } from "../../components";
import { Banner } from "./banner";
import { ShopByCategory } from "./shopByCategory";
import "./home.css";

const Home = () => {
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
