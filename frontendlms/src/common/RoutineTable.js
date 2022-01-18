import React from "react";
import { fullRoutine } from "../store/columnlevel";

function RoutineTable({ customers }) {
  const sunday = fullRoutine.filter((item) => item.day === "sunday");
  const monday = fullRoutine.filter((item) => item.day === "monday");
  const tuesday = fullRoutine.filter((item) => item.day === "tuesday");
  const wednesday = fullRoutine.filter((item) => item.day === "wednesday");
  const thursday = fullRoutine.filter((item) => item.day === "thursday");
  console.log(sunday);
  return (
    <table
      class="table table-hover table-responsive"
      style={{ fontSize: "0.7rem" }}
    >
      <thead>
        <tr>
          <th scope="col" className="tbl-head">
            Day
          </th>
          <th scope="col" className="tbl-head">
            9.00-9:45
          </th>
          <th scope="col" className="tbl-head">
            10.00-10:45
          </th>
          <th scope="col" className="tbl-head">
            11.00-11:45
          </th>
          <th scope="col" className="tbl-head">
            12.00-12:45
          </th>
          <th scope="col" className="tbl-head">
            2.00-2:45
          </th>
          <th scope="col" className="tbl-head">
            3.00-3:45
          </th>
          <th scope="col" className="tbl-head">
            4.00-4:45
          </th>
        </tr>
      </thead>
      <tbody>
        {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}

        <RoutineBody subject={sunday} />
        <RoutineBody subject={monday} />
        <RoutineBody subject={tuesday} />
        <RoutineBody subject={wednesday} />
        <RoutineBody subject={thursday} />
      </tbody>
    </table>
  );
}
export const RoutineBody = ({ subject }) => {
  //   const { day, courseCode, courseTeacher, time } = subject;
  console.log({ subject });
  return (
    <tr>
      <td>{subject[0].day}</td>
      {subject.map((item) => (
        <RoutineCell
          courseCode={item.courseCode}
          courseTeacher={item.courseTeacher}
        />
      ))}
      {/* <RoutineCell
        courseCode={subject.courseCode}
        courseTeacher={subject.courseTeacher}
      /> */}
    </tr>
  );
};
export const RoutineCell = ({ courseTeacher, courseCode }) => {
  //   const { day, courseCode, courseTeacher, time } = subject;
  return (
    <td className="text-center">
      {courseCode || "X"} <br /> {courseTeacher}
    </td>
  );
};
export default RoutineTable;
