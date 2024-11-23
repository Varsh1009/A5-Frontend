import { BsGripVertical } from "react-icons/bs";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { IoAdd, IoEllipsisVertical } from "react-icons/io5";
import { IoMdBookmarks } from "react-icons/io";
import { MdEditDocument } from "react-icons/md";
import * as db from "../../Database";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  setAssignments,
  addAssignment,
  editAssignment,
  deleteAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import AssignmentControlButtons from "./AssignmentControlsButton";
import { useEffect, useState } from "react";
import DeleteModal from "./DeleteAssignmentModal";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  // const assignments = db.assignments.filter(
  //   (assignment) => assignment.course === cid
  // );
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // console.log("Current User: ", currentUser.role);
  const userRole = currentUser.role;
  const dispatch = useDispatch();

  // Delete Modal Logic
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<string | null>(
    null
  );

  const handleDeleteClick = (assignmentId: string) => {
    setAssignmentToDelete(assignmentId);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (assignmentToDelete) {
      // dispatch(deleteAssignment(assignmentToDelete));
      await assignmentsClient.deleteAssignment(assignmentToDelete);
      setAssignmentToDelete(null);
      setShowDeleteModal(false);
      await fetchAssignments();
    }
  };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  function formatDate(dateStr: any) {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;
    const formattedHours = String(hours).padStart(2, "0");

    return `${month} ${day}, ${year} at ${formattedHours}:${minutes} ${ampm}`;
  }

  return (
    <div id="wd-assignments">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex justify-content-center">
          <form className="form-inline">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaSearch className="fs-5" />
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search for Assignments"
                aria-label="Search"
              />
            </div>
          </form>
        </div>

        {userRole === "FACULTY" && (
          <div>
            <button
              id="wd-add-assignment-group"
              className="btn btn-secondary me-2"
            >
              + Group
            </button>
            <button
              id="wd-add-assignment"
              className="btn btn-danger"
              onClick={() => {
                navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
              }}
            >
              + Assignment
            </button>
          </div>
        )}
      </div>

      <br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-grey">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center">
            <BsGripVertical className="me-2 fs-3" />

            <h2 className="mb-0 me-3">Assignments</h2>

            <h3
              className="border border-dark rounded-pill px-3 py-1 mb-0 w-50"
              style={{ maxWidth: 190 }}
            >
              40% of total
            </h3>

            <IoAdd className="me-2 fs-3" />
            <IoEllipsisVertical className="me-2 fs-3" />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <div id="ignore" className="ignore">
                  {/* <Link
                    key={assignment._id}
                    className="wd-assignment-link text-decoration-none"
                    to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    // to={`/Kanbas/Courses/${cid}/Assignments`}
                  > */}
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <div className="d-flex align-items-center">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdEditDocument className="me-2 fs-3 text-success" />
                      <div className="flex-grow-1">
                        <div className="fw-bold text-dark">
                          {userRole === "FACULTY" && (
                            <Link
                              to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                              style={{ color: "black" }}
                            >
                              {assignment.title}
                            </Link>
                          )}
                          {userRole !== "FACULTY" && (
                            <div>{assignment.title}</div>
                          )}
                        </div>
                        <div className="medium text-danger">
                          {assignment.module || "Modules"}
                          <span className="text-muted">
                            {" "}
                            | <strong>Not Available Until </strong>{" "}
                            {formatDate(assignment.availableDate)} |{" "}
                            {assignment.points}
                            {" pts"}
                          </span>
                        </div>
                        <div className="small text-muted mt-1"></div>
                        <div className="small text-muted mt-1">
                          <strong>Due Date: </strong>
                          {/* {assignment.dueDate} */}
                          {formatDate(assignment.dueDate)}
                        </div>
                      </div>{" "}
                      <AssignmentControlButtons
                        assignementId={assignment._id}
                        // deleteAssignment={(assignmentId) => {
                        //   dispatch(deleteAssignment(assignmentId));
                        deleteAssignment={() =>
                          handleDeleteClick(assignment._id)
                        }
                        // }}
                      />
                    </div>
                  </li>
                  {/* </a> */}
                  {/* </Link> */}
                </div>
              ))}
          </ul>
        </li>
      </ul>

      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
