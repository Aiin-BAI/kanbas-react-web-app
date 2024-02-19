import TodoItem from "../todos/TodoItem";
import TodoList from "../todos/TodoList";
import Add from "./Add";
import ConditionalOutput from "./ConditionalOutput";
import Highlight from "./Highlight";
import JavaScript from "./JavaScript";
import Classes from "./classes";
import Styles from "./css/Styles";
import PathParameters from "./routing/PathParameters";
function Assignment3() {
    return (
        <div>
            <h2>Assignment3</h2>
            <TodoList />
            <ul className="list-group">
            <TodoItem />    
            <TodoItem todo={{done:true,title:"Buy Bread",status:"IN PROGRESS"}}/>    
            <TodoItem todo={{done: true,title:"Feed Dogs",status:"completed"}}/>    
            </ul>
            <Add a={3} b={4} />
            <Highlight>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
                vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
            </Highlight>
            <ConditionalOutput />
            <Styles />
            <Classes />
            <PathParameters />
            <JavaScript />
            
        </div>
    );

}
export default Assignment3;