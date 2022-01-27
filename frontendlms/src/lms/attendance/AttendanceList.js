import { useForm } from "react-hook-form";
import AttendanceTable from "../../common/AttendanceTable";
import FilterBatch from "../../common/FilterBatch";

export default function AttendanceList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  return (
    <>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">Manage Attendances</h2>
            <h3 className="text-white" style={{ fontSize: "30px" }}>
              22/01/2022
            </h3>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="/assets/img/breadcumb-manage-attendances.png" alt="" />
          </div>
        </div>
      </section>
      <div className="card-body">
        <FilterBatch />
        <div className="attendances-list-wrap mt-5">
          <AttendanceTable />
        </div>
        <div className="submit-response">
          <button className="btn btn-outline-success">Submit Attendance</button>
          <button className="btn btn-outline-info">Edit Attendance</button>
        </div>
      </div>
    </>
  );
}
