import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { NavBar, FormContainer, FormInput, FormButton } from "../../components";

const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const loginHandler = () => {};

  return (
    <>
      <NavBar />
      <section
        className="d-flex xy-center"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <FormContainer formHeadingText={"Login"} submitHandler={() => true}>
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"EmailAddress"}
            id={uuid()}
            value={loginForm.email}
            inputHandler={(event) =>
              setLoginForm({ ...loginForm, email: event.target.value })
            }
          />
          <FormInput
            label={"Password"}
            type={"password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            value={loginForm.password}
            inputHandler={(event) =>
              setLoginForm({ ...loginForm, password: event.target.value })
            }
          />

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

          <FormButton btnText={"Login"} btnClickHandler={() => true} />

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
