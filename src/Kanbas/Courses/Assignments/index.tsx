import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
const { cid } = useParams();
const assignmentList = assignments.filter(
(assignment) => assignment.course === cid);
return (
<>
{ <div className="float-end form-control">
                                    <input className="w-25 me-1"placeholder="Search for Assignment"/>
                                    
                                        <button className="me-1"><i className="fa fa-plus"></i> Group</button>
                                        <button className="me-1"><i className="fa fa-plus"></i> Assignment</button>
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
<span className="float-end">
<FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
</li>))}
</ul>
</li>
</ul>
</>
);}
export default Assignments;