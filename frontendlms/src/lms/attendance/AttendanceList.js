import AttendanceTable from "../../common/AttendanceTable";

export default function AttendanceList() {
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
      <AttendanceTable />
      <div className="submit-response">
        <button className="btn btn-outline-success">Submit Attendance</button>
        <button className="btn btn-outline-info">Edit Attendance</button>
      </div>
    </>
  );
}
