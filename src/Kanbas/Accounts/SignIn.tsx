import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";
import * as client from "./client";

export default function SignIn() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = async () => {
    // const user = db.users.find(
    //   (user: any) =>
    //     user.username === credentials.username &&
    //     user.password === credentials.password
    // );
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };

  return (
    <div id="wd-signin-screen" className="d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h3>Sign in</h3>
          <input
            id="wd-username"
            placeholder="username"
            className="form-control mb-2"
            defaultValue={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            id="wd-password"
            placeholder="password"
            type="password"
            className="form-control mb-2"
            defaultValue={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <br />
          <button
            id="wd-signin-btn"
            className="btn btn-primary w-100 p-2"
            // to="../Profile"
            onClick={signin}
          >
            Sign in
          </button>
          <br />
          <br />
          <Link
            id="wd-signup-link"
            className="btn btn-secondary w-100 p-2"
            to="../SignUp"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
