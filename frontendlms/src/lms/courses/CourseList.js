import React, { useEffect, useMemo, useState } from "react";
import Modal, { CourseModal } from "../../common/Modal";
import Table from "../../common/Table";
import { getData } from "../../hooks/axios";
import { courseColumns, courseData } from "../../store/columnlevel";

export default function CourseList({ role }) {
  const [courses, setCourses] = useState([]);
  //  let data
  const data = useMemo(() => courses, [courses]);
  const columns = useMemo(() => courseColumns, []);
  const [show, setShow] = useState(false);

  useEffect(async () => {
    const data = await getData("/courses");
    setCourses(data);
    console.log(data);
  }, []);
  return (
    <div>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">Course Lists</h2>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="/assets/img/breadcumb-marks.png" alt="" />
          </div>
        </div>
      </section>
      <section className="es-form-area">
        <div className="card">
          <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
            {role === "admin" && (
              <a
                href=""
                className="btn btn-sm btn-pill btn-outline-light ml-auto"
              >
                + Add New
              </a>
            )}
            {/* test modal */}

          </header>
          <div className="card-body">
            <div className="attendances-list-wrap mt-5">
              <Table columns={columns} data={data} select={"course"}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
