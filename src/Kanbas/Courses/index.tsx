import CoursesNavigation from "./CoursesNav";
import {
  Routes,
  Route,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";
import Modules from "./Modules/index";
import Home from "./Home/index";
import Assignments from "./Assignments/index";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/table";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses" className="container-fluid">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {/* Course 1234 */}
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="col-md-3 d-none d-md-block" style={{ width: "200px" }}>
          <CoursesNavigation />
        </div>
        <div className="col-12 col-md-9">
          <Routes>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="/Assignments" element={<Assignments />} />
            <Route path="/Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="/People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
