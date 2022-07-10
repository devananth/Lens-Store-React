import { useNavigate } from "react-router";
import { useAuth } from "../../contexts";
import { authActions } from "../../reducers";

const ProfileDetails = () => {
  const navigate = useNavigate();

  const {
    authState: { userName },
    authDispatch,
  } = useAuth();

  const logoutHandler = () => {
    authDispatch({
      type: authActions.DELETE_USER_DETAILS,
    });
    navigate("/");
  };

  return (
    <>
      <section className="d-flex col p-2 gap-2">
        <ul className="d-flex col gap-2">
          <li>
            <span className="txt-bold">User name : </span>
            <span> {userName}</span>
          </li>
          <li>
            <span className="txt-bold">Email ID : </span>
            <span> test@gmail.com </span>
          </li>
        </ul>
        <button className="btn btn-primary" onClick={logoutHandler}>
          Logout
        </button>
      </section>
    </>
  );
};

export { ProfileDetails };
