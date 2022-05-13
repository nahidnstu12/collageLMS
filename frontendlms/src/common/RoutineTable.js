import React, { useState, useEffect } from "react";
import { getData } from "../hooks/axios";
import { shortName, sortedWeekdata } from "../hooks/lib";
import Modal, { EditRoutineCellModal } from "./Modal";
import Spinner from "./Spinner";

function RoutineTable({ today  }) {
  const [fullRoutinee, setFullRoutine] = useState([]);
  useEffect(() => {
    const getFullRoutine = async () => {
      const data = await getData("/routines");
      setFullRoutine(data);
    };
    getFullRoutine();
  }, []);

  const groupWeek = fullRoutinee?.reduce((acc, curr) => {
    const { weekday } = curr;
    acc[weekday] = acc[weekday] ?? [];
    // console.log("debug ->",acc[weekday]);

    acc[weekday].push(curr);
    return acc;
  }, {});
  console.log(groupWeek);

  const sunday =
    fullRoutinee?.length > 0 && sortedWeekdata(groupWeek["Sunday"], []);
  const monday =
    fullRoutinee?.length > 0 && sortedWeekdata(groupWeek["Monday"], []);
  const tuesday =
    fullRoutinee?.length > 0 && sortedWeekdata(groupWeek["Tuesday"], []);
  const wednesday =
    fullRoutinee?.length > 0 && sortedWeekdata(groupWeek["Wednesday"], []);
  const thursday =
    fullRoutinee?.length > 0 && sortedWeekdata(groupWeek["Thusday"], []);

  
  const today2 =
    fullRoutinee?.length > 0 && sortedWeekdata(groupWeek[today], []);
  console.log({ today, today2 });
  return fullRoutinee.length === 0 ? (
    <Spinner />
  ) : today ? (
    <table
      className="table table-hover table-responsive"
      style={{ fontSize: "0.7rem", display: "table" }}
    >
      <TableHead />
      <tbody>
        {" "}
        <RoutineBody subject={today2} day={today} />{" "}
      </tbody>
    </table>
  ) : (
    <table
      className="table table-hover table-responsive"
      style={{ fontSize: "0.7rem", display: "table" }}
    >
      <TableHead />
      <tbody>
        <RoutineBody subject={sunday} day={"Sunday"} />
        <RoutineBody subject={monday} day={"Monday"} />
        <RoutineBody subject={tuesday} day={"Tuesday"} />
        <RoutineBody subject={wednesday} day={"Wednesday"} />
        <RoutineBody subject={thursday} day={"Thursday"} />
      </tbody>
    </table>
  );
}
export const TableHead = () => {
  const timeSlotArray = [
    "9-9:45",
    "10-10:45",
    "11-11:45",
    "12-12:45",
    "2-2:45",
    "3-3:45",
    "4-4:45",
  ];
  return (
    <thead className="bg-gradient">
      <tr>
        <th scope="col" className="tbl-head">
          Day
        </th>
        {timeSlotArray.map((item) => (
          <th scope="col" className="tbl-head" key={item}>
            {item}
          </th>
        ))}
      </tr>
    </thead>
  );
};
export const RoutineBody = ({ subject, day }) => {
  //   const { day, courseCode, courseTeacher, time } = subject;
  console.log({ subject });
  return (
    <tr>
      <td>{day}</td>
      {subject &&
        subject?.map((item) => (
          <RoutineCell
            courseCode={item?.course_code}
            courseTeacher={shortName(item?.teacher_name || "")}
            key={item.id}
          />
        ))}
    </tr>
  );
};
export const RoutineCell = ({ courseTeacher, courseCode }) => {
  //   const { day, courseCode, courseTeacher, time } = subject;
  const [show, setShow] = useState(false);
  return (
    <td className="text-center" onDoubleClick={() => setShow(true)}>
      {courseCode || "X"} <br /> {courseTeacher}
      <Modal
        title="My Modal"
        w50={true}
        onClose={() => setShow(false)}
        show={show}
      >
        <EditRoutineCellModal />
      </Modal>
    </td>
  );
};
export default RoutineTable;
