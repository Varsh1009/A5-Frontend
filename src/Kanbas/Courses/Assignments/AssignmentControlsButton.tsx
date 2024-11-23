import { IoEllipsisVertical } from "react-icons/io5";
import { FaCheckCircle, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
export default function AssignmentControlButtons({
  assignementId,
  deleteAssignment,
}: {
  assignementId: string;
  deleteAssignment: (assignementId: string) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // console.log("Current User: ", currentUser.role);
  const userRole = currentUser.role;
  return (
    <span>
      <div className="d-flex justify-content-end align-items-center">
        <FaCheckCircle
          style={{ cursor: "pointer" }}
          className="text-success me-2 fs-5"
        />
        {userRole === "FACULTY" && (
          <FaTrash
            style={{ cursor: "pointer" }}
            className="text-danger me-2 fs-5"
            onClick={(e) => {
              deleteAssignment(assignementId);
            }}
          />
        )}
        <IoEllipsisVertical style={{ cursor: "pointer" }} className="fs-4" />
      </div>
    </span>
  );
}
