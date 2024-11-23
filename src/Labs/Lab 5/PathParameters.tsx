import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div className="container mt-4">
      <h3 className="text mb-4 fw-bold">Path Parameters</h3>
      <input
        className="form-control mb-2"
        id="wd-path-parameter-a"
        type="number"
        defaultValue={a}
        onChange={(e) => setA(e.target.value)}
      />
      <input
        className="form-control mb-2"
        id="wd-path-parameter-b"
        type="number"
        defaultValue={b}
        onChange={(e) => setB(e.target.value)}
      />
      <div className="d-flex flex-wrap gap-2 justify-content-center">
        <a
          className="btn btn-primary"
          id="wd-path-parameter-add"
          href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          className="btn btn-danger"
          id="wd-path-parameter-subtract"
          href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          className="btn btn-success"
          id="wd-path-parameter-multiply"
          href={`${REMOTE_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} * {b}
        </a>
        <a
          className="btn btn-warning"
          id="wd-path-parameter-divide"
          href={`${REMOTE_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} / {b}
        </a>
      </div>
      <hr />
    </div>
  );
}
