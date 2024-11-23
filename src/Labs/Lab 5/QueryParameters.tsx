import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div className="container mt-4">
      <h3 className="text mb-4 fw-bold">Query Parameters</h3>
      <input
        className="form-control mb-2"
        id="wd-query-parameter-a"
        type="number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="form-control mb-2"
        id="wd-query-parameter-b"
        type="number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <a
          className="btn btn-primary"
          id="wd-query-parameter-add"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          className="btn btn-danger"
          id="wd-query-parameter-subtract"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          className="btn btn-success"
          id="wd-query-parameter-multiply"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} * {b}
        </a>
        <a
          className="btn btn-warning"
          id="wd-query-parameter-divide"
          href={`${REMOTE_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} / {b}
        </a>
      </div>
      <hr />
    </div>
  );
}
