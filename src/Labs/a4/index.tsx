import TodoList from "./ReduxExamples/todos/TodoList";
import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import AddRedux from "./ReduxExamples/AddRedux";
import HelloRedux from "./ReduxExamples/HelloRedux";
import StringStateVariables from "./StringStateVariables";
function sayHello() {
    alert("Hello");
  }


function Assignment4(){
    return(
        <div>
            <h2>Assignment4</h2>
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />
            <ObjectStateVariable/>
            <ArrayStateVariable />
            <ParentStateComponent />
            <HelloRedux />
            <AddRedux />
            <TodoList />
            
        </div>
    );
    
}
export default Assignment4;