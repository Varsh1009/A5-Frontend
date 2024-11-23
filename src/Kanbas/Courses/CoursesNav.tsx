import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const location = useLocation(); // Get the current URL location

  const links = [
    { name: "Home", path: "/Home" },
    { name: "Modules", path: "/Modules" },
    { name: "Piazza", path: "/Piazza" },
    { name: "Zoom", path: "/Zoom" },
    { name: "Assignments", path: "/Assignments" },
    { name: "Quizzes", path: "/Quizzes" },
    { name: "Grades", path: "/Grades" },
    { name: "People", path: "/People" },
  ];

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 d-none d-md-block"
    >
      {links.map((link) => {
        const isActive =
          location.pathname === `/Kanbas/Courses/${cid}${link.path}`;
        return (
          <Link
            key={link.name}
            to={`/Kanbas/Courses/${cid}${link.path}`}
            className={`list-group-item border border-0 ${
              isActive ? "active" : "text-danger"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
