import Modules from "../Modules/index";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div className="row">
      <div className="col-12 col-lg-8">
        <Modules />
      </div>
      <div className="col-12 col-lg-4">
        <CourseStatus />
      </div>
    </div>
  );
}
