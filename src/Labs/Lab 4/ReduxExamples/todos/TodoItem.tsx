import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface Todo {
  id: number;
  title: string;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <li
      key={todo.id}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <span className="todo-title flex-grow-1">{todo.title}</span>
      <div>
        <button
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
          className="btn btn-outline-primary btn-sm me-2"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
          className="btn btn-outline-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
