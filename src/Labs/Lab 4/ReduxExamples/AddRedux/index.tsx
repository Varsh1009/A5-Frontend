import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from "./addReducer";

export default function AddRedux() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state: any) => state.addReducer);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5 w-50" id="wd-add-redux">
      <h1 className="text-center mb-4">Add Redux</h1>

      <div className="mb-3">
        <h2 className="text-center">
          {a} + {b} = <span className="text-success">{sum}</span>
        </h2>
      </div>

      <div className="mb-3">
        <input
          type="number"
          defaultValue={a}
          onChange={(e) => setA(parseInt(e.target.value))}
          className="form-control"
          placeholder="Enter first number"
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          defaultValue={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          className="form-control"
          placeholder="Enter second number"
        />
      </div>

      <div className="text-center">
        <button
          className="btn btn-primary"
          id="wd-add-redux-click"
          onClick={() => dispatch(add({ a, b }))}
        >
          Calculate Sum
        </button>
      </div>

      <hr />
    </div>
  );
}
