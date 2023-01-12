import { Link } from "react-router-dom";
import "./Navbar.css";
import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../redux/login/LoginAction";
export const Navbar = () => {
  const data = useSelector((state) => state.login.LoginData);
  const dispatch = useDispatch();

  return (
    <>
      <div className="Navbox">
        <div className="box1">
          <div></div>
          <div>
            <Link to={"/"}>
              {" "}
              <h3>Home</h3>{" "}
            </Link>
            <Link to={"/product"}>
              {" "}
              <h3>Product</h3>
            </Link>
            <Link to={"/cart"}>
              <h3>Cart</h3>
            </Link>
            <Link to={"/about"}>
              <h3>About</h3>
            </Link>
            {data ? (
              <div className="user">
                <h3 className="user1">Hi, {data.name}</h3>
                <p
                  className="user2"
                  onClick={() => {
                    dispatch(logoutUser(null));
                  }}
                >
                  Logout
                </p>
              </div>
            ) : (
              <Link to={"/login"}>
                <h3>Login</h3>
              </Link>
            )}
          </div>
        </div>
        <div className="box2">
          <h1>Chappan</h1>
          <h1>Discover the best food</h1>
        </div>
      </div>
    </>
  );
};
