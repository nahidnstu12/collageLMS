import { useEffect, useMemo } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import FilterBatch from "../../common/FilterBatch";
import Table from "../../common/Table";
import {  teacherColumns, teacherData } from "../../store/columnlevel";
// import $ from "jquery";

export default function TeacherLists() {
  const data = useMemo(() => teacherData, []);
  const columns = useMemo(() => teacherColumns, []);
  let { path, url } = useRouteMatch();
  console.log({ path });


  return (
    <>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">All Teachers</h2>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="assets/img/breadcumb-students.png" alt="" />
          </div>
        </div>
      </section>

      <section className="es-form-area max-container">
        <div className="card">
          <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
            <Link to={`${url}/add`}>
              <a
                href=""
                className="btn btn-sm btn-pill btn-outline-light ml-auto"
              >
                + Add New
              </a>
            </Link>
          </header>

          <div className="card-body">
           {/* <FilterBatch /> */}

            <div className="attendances-list-wrap mt-5">
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
