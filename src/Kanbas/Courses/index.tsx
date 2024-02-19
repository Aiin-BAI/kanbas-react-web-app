import { useParams,Routes,Route,Navigate, useLocation } from "react-router-dom";
import React from "react";
import { courses } from "../../Kanbas/Database";
import CourseNavigation from "./Navigation";
import Modules from "./Modules"
import ModuleList from "./Modules/List";
import { HiMiniBars3 } from "react-icons/hi2";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

function Courses() {
const {cid} =useParams();
const{pathname} = useLocation();
const coursePath = pathname.slice(pathname.indexOf('/Courses/') + '/Courses/'.length);
const breadcrumb = coursePath.split('/').map((section) => (
    <span key={section}>{section} &gt; </span>
  ));
const course = courses.find((course) => course._id ===cid);


return (
<>
<h2 className="breadcrumb"><HiMiniBars3  />Courses {breadcrumb}</h2>
<hr />
<CourseNavigation />
<div>
<div
className="overflow-y-scroll position-fixed bottom-0 end-0"
style={{ left: "320px", top: "80px" }} >
<Routes>
<Route path="/" element={<Navigate to="Home" />} />
<Route path="Home" element={<Home />} />
<Route path="Modules" element={<ModuleList />} />
<Route path="Piazza" element={<h1>Piazza</h1>} />
<Route path="Zoom Meeting" element={<h1>ZoomMeeting</h1>} />
<Route path="Assignments" element={<Assignments />} />
<Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
<Route path="Quizzes" element={<h1>Quizzes</h1>} />
<Route path="Grades" element={<Grades />} />
<Route path="People" element={<h1>People</h1>} />
</Routes>
</div>
</div>

</>
);
}
export default Courses;