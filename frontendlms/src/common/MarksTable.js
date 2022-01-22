import React from "react";
import { marksLists } from "../store/columnlevel";

function MarksTable() {
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
            CT1
          </th>
          <th scope="col" className="tbl-head">
            CT2
          </th>
          <th scope="col" className="tbl-head">
            CT3
          </th>
          <th scope="col" className="tbl-head">
            Best Two
          </th>
          <th scope="col" className="tbl-head">
            Attendance
          </th>
          <th scope="col" className="tbl-head">
            Written Marks
          </th>
        </tr>
      </thead>
      <tbody>
        {marksLists.map((item) => (
          <MarksBody item={item} key={item.sid} />
        ))}
      </tbody>
    </table>
  );
}
export const MarksBody = ({ item }) => {
  //   const { day, courseCode, courseTeacher, time } = subject;
  //   console.log({ item });
  return (
    <tr>
      <td className="text-center">{item.sid}</td>
      <td className="text-center">{item.ct1}</td>
      <td className="text-center">{item.ct2}</td>
      <td className="text-center">{item.ct3}</td>
      <td className="text-center">22</td>
      <td className="text-center">{item.attendance}</td>
      <td className="text-center">{item.written}</td>
    </tr>
  );
};

export default MarksTable;
