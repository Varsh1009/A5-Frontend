import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        className="form-control form-control-sm me-4"
        placeholder="Enter todo title"
      />
      <div className="ms-auto d-flex gap-3">
        <button
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
          className="btn btn-warning btn-sm"
        >
          Update
        </button>
        <button
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
          className="btn btn-success btn-sm"
        >
          Add
        </button>
      </div>
    </li>
  );
}
