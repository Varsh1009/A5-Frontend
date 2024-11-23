import React, { useState } from "react";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import HelloRedux from "./ReduxExamples/HelloRedux";
import CounterRedux from "./ReduxExamples/CounterRedux";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";

const Lab4 = () => {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div className="wd-lab4">
      <h2>Lab 4</h2>
      <hr />
      {/* Managing State */}
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />

      {/* Redux */}
      <ReduxExamples />
    </div>
  );
};

export default Lab4;
