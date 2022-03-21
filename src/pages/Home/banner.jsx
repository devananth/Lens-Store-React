import "./home.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner__wrapper d-flex col xy-center">
      <h5 className="txt-5xl">Clearance Sale</h5>
      <h2 className="txt-5xl txt-black">50% OFF</h2>
      <Link to="/products" className="btn btn-primary my-1 btn-large txt-bold">
        Browse Products
      </Link>
    </section>
  );
};

export { Banner };
