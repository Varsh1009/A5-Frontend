import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2 className="text-center">Redux Examples</h2>
      <hr />
      <HelloRedux />
      <CounterRedux />
      <AddRedux />
      <TodoList />
      <p>You can also find the above todo list at the end of Lab 3</p>
    </div>
  );
};

export default ReduxExamples;
