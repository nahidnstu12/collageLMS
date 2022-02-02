import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { marksLists } from "../store/columnlevel";
import { Input } from "./Input";

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
          <th scope="col" className="tbl-head">
            Total Marks
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const submit = async (formdata) => {
    console.log(formdata);
  };
  //   console.log({ item });
  const [ct1, setct1] = useState(false);
  const [ct2, setct2] = useState(false);
  const [ct3, setct3] = useState(false);
  const [attendance, setAttendance] = useState(false);
  const [written, setWritten] = useState(false);
  return (
    <tr>
      <td className="text-center">{item.sid}</td>
      <td className="text-center" onDoubleClick={() => setct1(true)}>
        {!ct1 ? (
          item.ct1
        ) : (
          <Input
            id={"ct1"}
            name={"ct1"}
            type={"number"}
            placeholder={"eg. ct1"}
            margin={true}
            register={register}
          />
        )}
      </td>
      <td className="text-center" onDoubleClick={() => setct2(true)}>
        {!ct2 ? (
          item.ct2
        ) : (
          <Input
            id={"ct2"}
            name={"ct2"}
            type={"number"}
            placeholder={"eg. ct2"}
            margin={true}
            register={register}
          />
        )}
      </td>
      <td className="text-center" onDoubleClick={() => setct3(true)}>
        {!ct3 ? (
          item.ct3
        ) : (
          <Input
            id={"ct3"}
            name={"ct3"}
            type={"number"}
            placeholder={"eg. ct3"}
            margin={true}
            register={register}
            // min max error handling
          />
        )}
      </td>
      <td className="text-center">22</td>
      <td className="text-center" onDoubleClick={() => setAttendance(true)}>
        {!attendance ? (
          item.attendance
        ) : (
          <Input
            id={"attendance"}
            name={"attendance"}
            type={"number"}
            placeholder={"eg. attendance marks"}
            margin={true}
            register={register}
            // min max error handling
          />
        )}
      </td>
      <td className="text-center" onDoubleClick={() => setWritten(true)}>
        {!written ? (
          item.written
        ) : (
          <Input
            id={"written"}
            name={"written"}
            type={"number"}
            placeholder={"eg. written marks"}
            margin={true}
            register={register}
            // min max error handling
          />
        )}
      </td>
      <td className="text-center">{item.total}</td>
    </tr>
  );
};

export default MarksTable;
