import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "./redux/actions";

export default function Homelist() {
  const [user, setUser] = useState({});
  function onChangeHandler(event) {
    const { name, value } = event.target;
    setUser((prevCourse) => ({
      ...prevCourse,
      [name]: name === "authorId" ? parseInt(value, 10) : value,
    }));
  }
  const dispatch = useDispatch();
  const { isAuth,username } = useSelector((state) => state.auth);
  console.log(isAuth);
  return (
    <div>
      Home Page
      <div className="d-flex justify-content-around flex-wrap">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      {isAuth ? (
        <h3>WelCome {username}</h3>
      ) : (
        <div>
          <h3>Login</h3>
          <input
            type={"text"}
            name="phone"
            value={user.phone}
            onChange={(e) => onChangeHandler(e)}
            placeholder="phone"
          />
          <input
            type={"text"}
            name="username"
            value={user.username}
            onChange={onChangeHandler}
            placeholder="username"
          />
          <button onClick={() => dispatch(loginActions(user))}>Login</button>
        </div>
      )}
    </div>
  );
}
