import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Profile from "./Profile";
import AccountNavigation from "./AccountNavigation";

function Accounts() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <h2>Account</h2>
      <div className="d-flex">
        <AccountNavigation />

        <table>
          <tbody>
            <tr>
              {/* <td valign="top"><AccountNavigation /></td> */}
              <td valign="top">
                <Routes>
                  {/* <Route index element={<Navigate to="SignIn" replace />} /> */}
                  <Route
                    path="/"
                    element={
                      <Navigate
                        to={
                          currentUser
                            ? "/Kanbas/Account/Profile"
                            : "/Kanbas/Account/Signin"
                        }
                      />
                    }
                  />
                  <Route path="SignIn" element={<SignIn />} />
                  <Route path="SignUp" element={<SignUp />} />
                  <Route path="Profile" element={<Profile />} />
                </Routes>
                {/* <Profile /> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Accounts;
