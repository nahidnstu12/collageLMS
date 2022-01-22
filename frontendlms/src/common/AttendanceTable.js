import React from "react";
import { attendanceLists } from "../store/columnlevel";

function AttendanceTable() {
  return (
    <table
      className="table table-hover table-responsive"
      style={{ fontSize: "0.7rem", display: "table" }}
    >
      <thead className="bg-gradient">
        <tr>
          <th scope="col" className="tbl-head">
            SID
          </th>
          <th scope="col" className="tbl-head">
            Present
          </th>
          <th scope="col" className="tbl-head">
            Absent
          </th>
          <th scope="col" className="tbl-head">
            total Class
          </th>
          <th scope="col" className="tbl-head">
            Attended Class
          </th>
        </tr>
      </thead>
      <tbody>
        {attendanceLists.map((item) => (
          <AttendanceBody item={item} key={item.sid}/>
        ))}
      </tbody>
    </table>
  );
}
export const AttendanceBody = ({ item }) => {
  //   const { day, courseCode, courseTeacher, time } = subject;
//   console.log({ item });
  return (
    <tr>
      <td className="text-center">{item.sid}</td>
      <td className="text-center">
        <button className="btn btn-outline-success">Present</button>
      </td>
      <td className="text-center">
        <button className="btn btn-outline-warning">Absent</button>
      </td>
      <td className="text-center">{item.totalClass}</td>
      <td className="text-center">{item.attendedClass}</td>
    </tr>
  );
};

export default AttendanceTable;
