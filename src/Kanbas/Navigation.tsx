import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { GoInbox } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { IoBackspace } from "react-icons/io5";

export default function AccountNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar", path: "/Kanbas/Calendar", icon: IoCalendarOutline },
    { label: "Inbox", path: "/Kanbas/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: LiaCogSolid },
  ];

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
        className="list-group-item bg-black border-0 text-center"
      >
        <img
          src="https://rid.org/wp-content/uploads/2024/07/Red-N-on-white-background.png"
          width="75px"
        />
      </a>

      <Link
        to="Account"
        id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </Link>

      {/* New Navbar */}
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`list-group-item bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </Link>
      ))}

      {/* Old Navbar */}
      {/* <Link
        to="Dashboard"
        id="wd-dashboard-link"
        className="list-group-item text-center border-0
                   bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="Courses"
        id="wd-course-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        to="Calendar"
        id="wd-calendar-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <SlCalender className="fs-1 text-danger" />
        Calendar
      </Link>
      <Link
        to="Inbox"
        id="wd-inbox-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <GoInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        to="../Labs"
        id="wd-labwork-link"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <CgWebsite className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
      <Link
        to="../"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <IoBackspace className="fs-1 text-danger" />
        <br />
        Landing Page
      </Link> */}
    </div>
  );
}
