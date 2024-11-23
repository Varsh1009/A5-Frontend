import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function SignUp() {
  // const [user, setUser] = useState<any>({});
  const [user, setUser] = useState<any>({
    username: "",
    password: "",
    role: "STUDENT",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    navigate("/Kanbas/Account/Profile");
    await client.signin(currentUser);
  };

  return (
    <div id="wd-signup-screen" className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h3>Sign up</h3>
          <input
            placeholder="username"
            className="form-control mb-2"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          {/* <br /> */}
          <input
            placeholder="password"
            type="password"
            className="form-control mb-2"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <br />
          {/* <input
            placeholder="verify password"
            type="password"
            className="form-control mb-2"
          />
          <br /> */}
          <button
            onClick={signup}
            className="wd-signup-btn btn btn-primary mb-2 w-100"
          >
            {" "}
            Sign up{" "}
          </button>
          {/* <br /> */}
          <br />
          <Link
            id="wd-signin-btn"
            className="btn btn-secondary w-100 p-2"
            to="../SignIn"
          >
            Sign in
          </Link>
          <br />
        </div>
      </div>
    </div>
  );

  // return (
  //   <div id="wd-signup-screen" className="d-flex justify-content-center mt-5">
  //     <h1>Sign up</h1>
  //     <input
  //       value={user.username}
  //       onChange={(e) => setUser({ ...user, username: e.target.value })}
  //       className="wd-username form-control mb-2"
  //       placeholder="username"
  //     />
  //     <input
  //       value={user.password}
  //       onChange={(e) => setUser({ ...user, password: e.target.value })}
  //       type="password"
  //       className="wd-password form-control mb-2"
  //       placeholder="password"
  //     />
  //     <button
  //       onClick={signup}
  //       className="wd-signup-btn btn btn-primary mb-2 w-100"
  //     >
  //       {" "}
  //       Sign up{" "}
  //     </button>
  //     <br />
  //     <Link to="/Kanbas/Account/Signin" className="wd-signin-link">
  //       Sign in
  //     </Link>
  //   </div>
  // );
}
