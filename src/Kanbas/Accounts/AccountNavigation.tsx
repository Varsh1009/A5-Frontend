import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["SignIn", "SignUp"];

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.includes("SignIn") && (
        <Link to="SignIn" className="list-group-item active border border-0">
          SignIn
        </Link>
      )}
      {links.includes("SignUp") && (
        <Link
          to="SignUp"
          className="list-group-item text-danger border border-0"
        >
          SignUp
        </Link>
      )}
      {links.includes("Profile") && (
        <Link
          to="Profile"
          className="list-group-item text-danger border border-0"
        >
          Profile
        </Link>
      )}
    </div>
  );
}

// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["SignIn", "Signp"];
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to="SignIn" className="list-group-item active border border-0">
//         SignIn
//       </Link>
//       <Link to="SignUp" className="list-group-item text-danger border border-0">
//         SignUp
//       </Link>
//       <Link
//         to="Profile"
//         className="list-group-item text-danger border border-0"
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }
