import Add from "./Add";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import ArrowFunctions from "./ArrowFunctions";
import BooleanVariables from "./BooleanVariables";
import Classes from "./Classes";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import Destructing from "./Destructing";
import DestructingImports from "./DestructingImports";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import ForLoops from "./ForLoops";
import FunctionDestructing from "./FunctionDestructing";
import House from "./House";
import IfElse from "./IfElse";
import JsonStringify from "./JsonStringify";
import LegacyFunctions from "./LegacyFunctions";
import MapFunction from "./MapFunction";
import SimpleArrays from "./SimpleArrays";
import Spreading from "./Spreading";
import Square from "./Square";
import Styles from "./Styles";
import TemplateLiterals from "./TemplateLiterals";
import Ternary from "./TernaryOperator";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import VariablesAndConstants from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import Highlight from "./Highlight";
import TOC from "./TOC";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";
import ImpliedReturn from "./ImpliedReturn";
import FilterFunction from "./FilterFunction";
import { useSelector } from "react-redux";

export default function Lab3() {
  console.log("Hello World!");
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div id="wd-lab3">
      <h2>Lab 3</h2>
      <hr />
      <h3>Javascript Basics</h3>
      <hr />
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <Ternary />
      <ConditionalOutputIfElse />
      <hr />

      <h3>Javascript Functions</h3>
      <hr />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <hr />

      <h2>Data Structures</h2>
      <hr />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FilterFunction />
      <FindIndex />
      <JsonStringify />
      <House />
      <h3>Todo Item</h3>
      <TodoItem />
      <hr />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <br />
      <Classes />
      <Styles />
      <hr />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <hr />
      <h4>Highlight</h4>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione
        eaque illo minus cum, saepe totam vel nihil repellat nemo explicabo
        excepturi consectetur. Modi omnis minus sequi maiores, provident
        voluptates.
      </Highlight>
      <hr />
      <TOC />
      <hr />
      <PathParameters />

      <hr />
      <h2>Todo List from Lab 4</h2>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
