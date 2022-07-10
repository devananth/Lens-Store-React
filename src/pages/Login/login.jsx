import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { NavBar, FormContainer, FormInput, FormButton } from "../../components";
import { useAuth } from "../../contexts";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { setAuthState } = useAuth();

  const loginHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", { ...loginForm });

      const { status } = response;

      if (status === 200) {
        const {
          data: { encodedToken, foundUser },
        } = response;
      } else {
        setError("Invalid Credentials");
      }
    } catch (error) {
      setError(error.response.data.errors[0]);
    }
  };

  const formDataHandler = (event) => {
    setLoginForm(() => ({
      ...loginForm,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <NavBar />
      <section
        className="d-flex xy-center"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <FormContainer formHeadingText={"Login"} submitHandler={loginHandler}>
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"email"}
            id={uuid()}
            value={loginForm.email}
            inputHandler={formDataHandler}
          />
          <FormInput
            label={"Password"}
            type={"password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            value={loginForm.password}
            inputHandler={formDataHandler}
          />

          {error && (
            <span className="d-inline-block txt-sm txt-bold danger mb-1">
              {error}
            </span>
          )}

          <div className="d-flex space-bw wrap">
            <div className="form-group width-content d-flex y-center gap-1">
              <input type="checkbox" className="form-input" id="rememberMe" />
              <label
                className="form-label txt-sm d-inline-block"
                htmlFor="rememberMe"
              >
                Remember Me
              </label>
            </div>
            <Link to={"#"} className="mb-1 txt-sm d-inline-block txt-primary">
              Forgot your password?
            </Link>
          </div>

          <FormButton btnText={"Login"} btnClickHandler={loginHandler} />

          <div>
            <span>Not a user yet ?</span>
            <Link to={"/signup"} className="btn btn-link btn-link-primary">
              Create New Account
            </Link>
          </div>
        </FormContainer>
      </section>
    </>
  );
};

export { Login };
