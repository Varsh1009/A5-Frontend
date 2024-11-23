import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 100,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects" className="container mt-4">
      <h3 className="text mb-4 fw-bold">Working With Objects</h3>

      {/* Retrieving Objects */}
      <h4 className="mb-3">Retrieving Objects</h4>
      <div className="d-flex justify-content-start mb-4">
        <a
          id="wd-retrieve-assignments"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/assignment`}
        >
          Get Assignment
        </a>
      </div>
      <hr />

      {/* Retrieving Properties */}
      <h4 className="mb-3">Retrieving Properties</h4>
      <div className="d-flex justify-content-start mb-4">
        <a
          id="wd-retrieve-assignment-title"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/assignment/title`}
        >
          Get Title
        </a>
      </div>
      <hr />

      {/* Modifying Properties */}
      <h4 className="mb-3">Modifying Properties</h4>
      <div className="mb-3">
        <label htmlFor="wd-assignment-title" className="form-label">
          Assignment Title
        </label>
        <input
          className="form-control mb-2"
          id="wd-assignment-title"
          defaultValue={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
        <a
          id="wd-update-assignment-title"
          className="btn btn-primary mt-2"
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
      </div>
      <hr />

      {/* Retrieving Modules */}
      <h4 className="mb-3">Retrieving Modules</h4>
      <div className="d-flex justify-content-start mb-4">
        <a
          id="wd-retrieve-modules"
          className="btn btn-primary me-2"
          href={`${REMOTE_SERVER}/lab5/module`}
        >
          Get Module
        </a>
        <a
          id="wd-retrieve-modules"
          className="btn btn-primary me-2"
          href={`${REMOTE_SERVER}/lab5/module/name`}
        >
          Get Module Name
        </a>
      </div>
      <hr />

      {/* Modifying Completion Status and Score */}
      <h4 className="mb-3">Modifying Completion Status and Score</h4>

      <div className="mb-3">
        <div className="form-check mb-2">
          <input
            type="checkbox"
            className="form-check-input"
            id="wd-module-completed"
            checked={module.completed}
            onChange={(e) =>
              setModule({ ...module, completed: e.target.checked })
            }
          />
          <label
            htmlFor="wd-module-completed"
            className="form-check-label ms-2"
          >
            Completion Status
          </label>
        </div>
        <a
          id="wd-update-module-status"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module/completed/${module.completed}`}
        >
          Update Completion Status
        </a>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-module-score" className="form-label">
          Module Score
        </label>
        <input
          type="number"
          className="form-control mb-2"
          id="wd-module-score"
          defaultValue={module.score}
          onChange={(e) =>
            setModule({ ...module, score: Number(e.target.value) })
          }
        />
        <a
          id="wd-update-module-score"
          className="btn btn-primary"
          href={`${REMOTE_SERVER}/lab5/module/score/${module.score}`}
        >
          Update Score
        </a>
      </div>
      <hr />
    </div>
  );
}
