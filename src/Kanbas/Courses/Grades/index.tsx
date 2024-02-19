import React from "react";
import { FaArrowRight, FaArrowLeft, FaCog } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { assignments, enrollments, grades, users } from "../../Database";

function Grades() {
  const { cid } = useParams();
  const as = assignments.filter((assignment) => assignment.course === cid);
  const es = enrollments.filter((enrollment) => enrollment.course === cid);

  return (
    <div>
      <div className="d-flex justify-content-end">
        <button className="me-2">
          <FaArrowLeft />Import
        </button>
        <button className="me-2">
          <FaArrowRight />Export
        </button>
        <button>
          <FaCog />
        </button>
      </div>
      <h1>Grades</h1>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Student Name</th>
              {as.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {es.map((enrollment) => {
              console.log("Current Enrollment User:", enrollment.user);
              const user = users.find((user) => user._id === enrollment.user);

              return (
                <tr key={enrollment.user}>
                  <td>{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Grades;
