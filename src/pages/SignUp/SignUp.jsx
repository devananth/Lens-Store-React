import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { NavBar, FormContainer, FormInput, FormButton } from "../../components";

const SignUp = () => {
  return (
    <>
      <NavBar />
      <section
        className="d-flex xy-center"
        style={{ minHeight: "calc(100vh - 4rem)" }}
      >
        <FormContainer formHeadingText={"SignUp"} submitHandler={() => true}>
          <FormInput
            label={"First Name"}
            type={"text"}
            placeholder={"John"}
            name={"firstName"}
            id={uuid()}
            inputHandler={() => true}
          />
          <FormInput
            label={"Last Name"}
            type={"text"}
            placeholder={"Doe"}
            name={"lastName"}
            id={uuid()}
            inputHandler={() => true}
          />
          <FormInput
            label={"Email Address"}
            type={"email"}
            placeholder={"john@gemail.com"}
            name={"EmailAddress"}
            id={uuid()}
            inputHandler={() => true}
          />
          <FormInput
            label={"Password"}
            type={"password"}
            placeholder={"********"}
            name={"password"}
            id={uuid()}
            inputHandler={() => true}
          />

          <div className="d-flex space-bw wrap">
            <div className="form-group width-content d-flex y-center gap-1">
              <input type="checkbox" className="form-input" id="declaration" />
              <label
                className="form-label txt-sm d-inline-block"
                htmlFor="declaration"
              >
                I accept all Terms and Conditions
              </label>
            </div>
          </div>

          <FormButton
            btnText={"Create New Account"}
            btnClickHandler={() => true}
          />

          <div>
            <span>Already have an account ?</span>
            <Link to={"/login"} className="btn btn-link btn-link-primary">
              Login Here
            </Link>
          </div>
        </FormContainer>
      </section>
    </>
  );
};

export { SignUp };
