import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
const { cid } = useParams();
const modulesList = modules.filter((module) => module.course === cid);
const [selectedModule, setSelectedModule] = useState(modulesList[0]);
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
{modulesList.map((module) => (
<li
className="list-group-item"
onClick={() => setSelectedModule(module)}>
<div>
<FaEllipsisV className="me-2" />
{module.name}
<span className="float-end">
<FaCheckCircle className="text-success" />
<FaPlusCircle className="ms-2" />
<FaEllipsisV className="ms-2" />
</span>
</div>
{selectedModule._id === module._id && (
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
)}
</li>
))}
</ul>
</>
);
}
export default ModuleList;