import { SearchBar } from "./navbar-search";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import { useWishlist, useCart, useAuth } from "../../contexts";
import { authActions } from "../../reducers/authReducer";

const NavBar = () => {
  const { wishlist } = useWishlist();
  const { cart } = useCart();

  const navigate = useNavigate();

  const {
    authState: { isUserLoggedIn, userName },
    authDispatch,
  } = useAuth();

  return (
    <header className="header d-flex col">
      <nav className="nav__container">
        <section className="nav__left d-flex gap-2 xy-center">
          <div
            className="nav__brand txt-2xl txt-bold mr-1"
            onClick={() => navigate("/")}
          >
            Lens-Store
          </div>
          <Link to="/" className="txt-lg nav__link hide__mobile">
            Home
          </Link>
          <Link to="/products" className="txt-lg nav__link hide__mobile">
            Shop Now
          </Link>
        </section>
        <SearchBar />
        <section className="nav__right xy-center">
          <ul className="nav__list">
            <li className="nav__list__item">
              <Link to="/profile">
                <div className="badge-container d-flex col xy-center">
                  <span className="icon nav__icon">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="nav__icon__text">
                    {isUserLoggedIn ? `${userName}` : `Login`}
                  </span>
                </div>
              </Link>
            </li>
            <li className="nav__list__item">
              <Link to="/wishlist">
                <div className="d-flex col xy-center">
                  <span className="icon nav__icon badge-container">
                    <i className="fas fa-heart"></i>
                    <span className="badge badge-icon d-flex xy-center txt-bold">
                      {wishlist.length}
                    </span>
                  </span>

                  <span className="nav__icon__text">Wishlist</span>
                </div>
              </Link>
            </li>
            <li className="nav__list__item">
              <Link to="/cart">
                <div className="d-flex col xy-center">
                  <span className="icon nav__icon badge-container">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="badge badge-icon d-flex xy-center txt-bold">
                      {cart.length}
                    </span>
                  </span>
                  <span className="nav__icon__text">Cart</span>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <SearchBar mobileScreen={true} />
    </header>
  );
};

export { NavBar };
