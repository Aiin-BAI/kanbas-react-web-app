import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
const { cid } = useParams();
const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

return (
<>
{<div className="d-flex mb-3">
    <button className="mx-1 d-flex align-items-center">Collapse All</button>
    <button className="mx-1 d-flex align-items-center">View Progress</button>
    <button className="mx-1 d-flex align-items-center"><FaCheckCircle className="text-success " />Publish All</button>
    <button className="mx-1 d-flex align-items-center">Module</button>
    <button><FaEllipsisV /></button>
    <hr />
</div>}
<ul className="list-group wd-modules">
<li className="list-group-item">
        
        <div>
        <input  value={module.name}
          onChange={(e) =>  dispatch(setModule({ ...module, name: e.target.value }))
        }
        />
         <button className="ms-2" onClick={() => dispatch(addModule({ ...module, course: cid }))}>
Add</button>
         <button className="ms-2" onClick={() => dispatch(updateModule(module))}>

                Update
        </button>

        </div>
       <div>
        <textarea value={module.description}
          onChange={(e) =>  dispatch(setModule({ ...module, description: e.target.value }))
        }
        />
        </div>
      </li>

{moduleList.filter((module) => module.course === cid).
map((module,index) => (
<li key={index}
className="list-group-item">
    {/*className="list-group-item"
onClick={() => setSelectedModule(module)}>
*/}
     <button 
               onClick={() => dispatch(setModule(module))}>

              Edit
            </button>

    <button className="ms-2"
             onClick={() => dispatch(deleteModule(module._id))}>

              Delete
            </button>

<div>
<FaEllipsisV className="me-2" />
{module.name}
<span className="float-end">
<FaCheckCircle className="text-success" />
<FaPlusCircle className="ms-2" />
<FaEllipsisV className="ms-2" />
</span>
</div>

{/*selectedModule._id === module._id && (
<ul className="list-group">

{module.lessons?.map((lesson) => (
<li className="list-group-item">
<FaEllipsisV className="me-2" />
{lesson.name}
<span className="float-end">
<FaCheckCircle className="text-success" />
<FaEllipsisV className="ms-2" />
</span>
</li>
))}

</ul>
)*/}

</li>
))}
</ul>
</>
);
}
export default ModuleList;