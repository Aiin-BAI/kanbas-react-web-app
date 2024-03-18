import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; 
import { assignments } from "../../Database";

import { KanbasState } from "../../store";
import { deleteAssignment, } from "./reducer";
function Assignments() {
const { cid } = useParams();
const dispatch = useDispatch();
const handleDelete = (assignmentId: string) => {
   
    
        dispatch(deleteAssignment(assignmentId));
    
};
const assignmentList = useSelector((state: KanbasState) => 
    state.assignmentsReducer.assignments.filter((assignment) => assignment.course === cid));
return (
<>
{ <div className="float-end form-control">
                                    <input className="w-25 me-1"placeholder="Search for Assignment"/>
                                    
                                        <button className="me-1"><i className="fa fa-plus"></i> Group</button>
                                        <Link to={`/Kanbas/Courses/${cid}/Assignments/new`}
className="btn btn-danger float-end mb-2">
+Assignment
</Link>
                                        <select className="me-1">
                                            <option>Edit Assignment Date</option>
                                            <option>Assignment Group Weight</option>
                                            <option>Gradescopr 1.3</option>
                                        </select>
                                </div>}
<ul className="list-group wd-modules">
<li className="list-group-item">
<div>
<FaEllipsisV className="me-2" /> ASSIGNMENTS
<span className="float-end">
<FaCheckCircle className="text-success" />
<FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
</span>
</div>
<ul className="list-group">
{assignmentList.map((assignment) => (
<li className="list-group-item">
<FaEllipsisV className="me-2" />
<Link
to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>{assignment.title}</Link>
<button className="btn btn-danger m-1 float-end"  onClick={() => handleDelete(assignment._id)}>
                                    Delete
                                </button>
<span className="float-end">
<FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
</li>))}
</ul>
</li>
</ul>
</>
);}
export default Assignments;