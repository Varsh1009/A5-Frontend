import React, { useState } from "react";

const ArrayStateVariable: React.FC = () => {
  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);

  const addElement = (): void => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number): void => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables" className="container mt-4">
      <h2 className="mb-3">Array State Variable</h2>
      <button className="btn btn-success mb-3" onClick={addElement}>
        Add Element
      </button>
      <ul className="list-group">
        {array.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr className="mt-4" />
    </div>
  );
};

export default ArrayStateVariable;
