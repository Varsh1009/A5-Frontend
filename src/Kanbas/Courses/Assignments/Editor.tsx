import { useParams, useNavigate } from "react-router";
import * as db from "../../Database";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  // const assignment = db.assignments.find(
  //   (assignment) => assignment._id === aid
  // );

  const assignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find(
      (assignment: any) => assignment._id === aid
    )
  ) || {
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableDate: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState(assignment?.title || "");
  const [description, setDescription] = useState(assignment?.description || "");
  const [points, setPoints] = useState(assignment?.points || 0);
  const [dueDate, setDueDate] = useState(
    assignment?.dueDate || new Date().toISOString().slice(0, 16)
  );
  const [availableDate, setAvailableDate] = useState(
    assignment?.availableDate || new Date().toISOString().slice(0, 16)
  );
  const [module, setModule] = useState(assignment?.module || "");

  useEffect(() => {
    // Clear fields if opening a new assignment
    if (!aid || aid === "new") {
      setTitle("");
      setDescription("");
      setPoints(0);
      setDueDate(new Date().toISOString().slice(0, 16));
      setAvailableDate(new Date().toISOString().slice(0, 16));
    }
  }, [aid]);

  const handleSubmit = async () => {
    const newAssignment = {
      _id: aid || "", // New assignments won't have an `aid`
      title,
      description,
      points,
      dueDate,
      availableDate,
      module,
      course: cid,
    };

    if (aid === "new") {
      // dispatch(addAssignment(newAssignment));
      if (cid) {
        await coursesClient.createAssignmentForCourse(cid, newAssignment);
      } else {
        console.error("Course ID is undefined");
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    } else {
      // dispatch(updateAssignment(newAssignment));
      await assignmentsClient.updateAssignment(newAssignment);
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div
      id="wd-assignments-editor"
      className="container mt-1 overflow-auto"
      style={{ maxHeight: 700 }}
    >
      <div className="card border-0">
        <div className="card-body">
          <label htmlFor="wd-name">Assignment Name</label>
          <br />
          <input
            id="wd-name"
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={assignment!.title}
          />
        </div>

        <div className="card-body">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="points" className="form-label">
              Points
            </label>
          </div>
          <div className="col-8">
            <input
              type="number"
              className="form-control"
              id="points"
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              placeholder="0"
            />
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-assignment-group" className="form-label">
              Assignment Group
            </label>
          </div>
          <div className="col-8">
            <select
              className="form-select"
              id="assignment-group"
              defaultValue="Assignments"
            >
              <option>Assignments</option>
              <option>Projects</option>
              <option>Quizzes</option>
            </select>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-grade-dropdown" className="form-label">
              Show Grades as
            </label>
          </div>
          <div className="col-8">
            <select
              className="form-select"
              id="grades-dropdown"
              defaultValue="Percentage"
            >
              <option>Percentage</option>
              <option>100 Scale</option>
              <option>10 Scale</option>
              <option>Letter Grade</option>
              <option>Raw Score</option>
            </select>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-submission-type" className="form-label">
              Submission Type
            </label>
          </div>
          <div className="col-8">
            <div className="card border-grey p-2">
              <select
                className="form-select"
                id="submission-dropdown"
                defaultValue="Online"
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
              <br />
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="submission-type-text-entry"
                />
                <label htmlFor="submission-type-text-entry">Text Entry</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="submission-type-url"
                />
                <label htmlFor="submission-type-url">Website URL</label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="submission-type-media"
                />
                <label htmlFor="submission-type-media">Media Recordings</label>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-2">
          <div className="col-4 text-end">
            <label htmlFor="wd-assign" className="form-label">
              Assign
            </label>
          </div>
          <div className="col-8">
            <div className="card border-grey p-3">
              <div className="row mb-3">
                <label htmlFor="wd-assign-to" className="form-label">
                  <strong>Assign to</strong>
                </label>
                <select
                  id="multi-select"
                  className="form-select"
                  aria-label="Dropdown"
                >
                  <option value="option1">Everyone</option>
                  <option value="option2">Selected</option>
                </select>
              </div>

              <div className="row mb-3">
                <label htmlFor="wd-due-date" className="form-label">
                  <strong>Due Date</strong>
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="due-date"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>

              <div className="row justify-content-between">
                {/* Available From */}
                <div className="col-md-6 mb-3 p-2">
                  <label htmlFor="wd-available-from" className="form-label">
                    <strong>Available From</strong>
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="available-from"
                    value={availableDate}
                    onChange={(e) => setAvailableDate(e.target.value)}
                  />
                </div>

                {/* Available Until */}
                <div className="col-md-6 mb-3 p-2">
                  <label htmlFor="wd-available-to" className="form-label">
                    <strong>Until</strong>
                  </label>
                  <input
                    type="datetime-local"
                    className="form-control"
                    id="available-to"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2 buttons: one for submit, one for cancel */}
      <div
        className="buttons-container"
        style={{
          display: "flex",
          justifyContent: "right",
          padding: "10px",
        }}
      >
        <div className="row m-2">
          <div className="col p-1">
            <button className="btn" onClick={handleCancel}>
              Cancel
            </button>
          </div>
          <div className="col p-1">
            <button className="btn btn-danger" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
