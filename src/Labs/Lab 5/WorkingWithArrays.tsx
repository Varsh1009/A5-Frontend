import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithArrays() {
  const API = `${REMOTE_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  return (
    <div>
      <div id="wd-working-with-arrays" className="container py-4">
        <h3 className="mb-4 fw-bold">Working with Arrays</h3>

        <section className="mb-4">
          <h4>Retrieving Arrays</h4>
          <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
            Get Todos
          </a>
        </section>
        <hr />

        <section className="mb-4">
          <h4>Retrieving an Item from an Array by ID</h4>
          <div className="input-group">
            <input
              id="wd-todo-id"
              value={todo.id}
              className="form-control w-50"
              onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <a
              id="wd-retrieve-todo-by-id"
              className="btn btn-primary ms-2"
              href={`${API}/${todo.id}`}
            >
              Get Todo by ID
            </a>
          </div>
        </section>
        <hr />

        <section className="mb-4">
          <h3>Filtering Array Items</h3>
          <a
            id="wd-retrieve-completed-todos"
            className="btn btn-primary"
            href={`${API}?completed=true`}
          >
            Get Completed Todos
          </a>
        </section>
        <hr />

        <section className="mb-4">
          <h3>Creating new Items in an Array</h3>
          <a
            id="wd-create-todo"
            className="btn btn-primary"
            href={`${API}/create`}
          >
            Create Todo
          </a>
        </section>
        <hr />

        <section className="mb-4">
          <h3>Deleting from an Array</h3>
          <div className="input-group">
            <input
              value={todo.id}
              className="form-control w-50"
              onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <a
              id="wd-delete-todo"
              className="btn btn-primary ms-2"
              href={`${API}/${todo.id}/delete`}
            >
              Delete Todo with ID = {todo.id}
            </a>
          </div>
        </section>
        <hr />

        <section className="mb-4">
          <h3>Updating an Item in an Array</h3>

          <h5>Title</h5>
          <div className="input-group mb-3">
            <input
              value={todo.id}
              className="form-control w-25"
              onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <input
              value={todo.title}
              className="form-control w-50 ms-2"
              onChange={(e) => setTodo({ ...todo, title: e.target.value })}
            />
            <a
              href={`${API}/${todo.id}/title/${todo.title}`}
              className="btn btn-primary ms-2"
            >
              Update Todo Title
            </a>
          </div>

          <h5>Description</h5>
          <div className="input-group mb-3">
            <input
              value={todo.id}
              className="form-control w-25"
              onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <input
              value={todo.description}
              className="form-control w-50 ms-2"
              onChange={(e) =>
                setTodo({ ...todo, description: e.target.value })
              }
            />
            <a
              href={`${API}/${todo.id}/description/${todo.description}`}
              className="btn btn-primary ms-2"
            >
              Update Todo Description
            </a>
          </div>

          <h5>Completed</h5>
          <div className="input-group">
            <input
              value={todo.id}
              className="form-control w-25"
              onChange={(e) => setTodo({ ...todo, id: e.target.value })}
            />
            <div className="form-check ms-3">
              <input
                type="checkbox"
                id="completed-checkbox"
                className="form-check-input"
                checked={todo.completed}
                onChange={(e) =>
                  setTodo({ ...todo, completed: e.target.checked })
                }
              />
              <label className="form-check-label" htmlFor="completed-checkbox">
                Mark as Completed
              </label>
            </div>
            <a
              href={`${API}/${todo.id}/completed/${todo.completed}`}
              className="btn btn-primary ms-2"
            >
              Update Todo Completion Status
            </a>
          </div>
        </section>
      </div>
      <hr />
    </div>
  );
}
