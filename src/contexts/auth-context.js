import { createContext, useContext, useEffect, useReducer } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authReducer } from "../reducers";
import { authActions } from "../reducers/authReducer";

const initialAuthState = {
  authToken: null,
  userName: null,
  isUserLoggedIn: null,
};

const AuthContext = createContext(initialAuthState);

const AuthProvider = ({ children }) => {
  const { Provider } = AuthContext;

  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  const value = { authState, authDispatch };

  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("loginDetails"));

    if (userDetails) {
      authDispatch({
        type: authActions.SAVE_USER_DETAILS,
        payload: userDetails,
      });
      navigate("/products");
    }
  }, []);

  return <Provider value={value}>{children}</Provider>;
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
