import { useMemo } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import Table from "../../common/Table";
import { studentColumns } from "../../store/columnlevel";
import STUDENT_DATA from "../../store/STUDENT_MOCK_DATA.json"
import AddStudent from "./AddStudent";

export default function Student() {
    const data = useMemo(() => STUDENT_DATA, []);
    const columns = useMemo(()=> studentColumns, [])
    let { path, url } = useRouteMatch();
    console.log({path})
    
  return (
    <>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">All Students</h2>
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
            <form action="#" className="es-form">
              <div className="row align-items-center">
                <div className="col">
                  <label for="class">Class</label>
                  <select id="class" className="">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Some option</option>
                    <option value="2">Another option</option>
                    <option value="3" disabled>
                      A disabled option
                    </option>
                    <option value="4">Potato</option>
                  </select>
                </div>
                <div className="col">
                  <label for="section">Section</label>
                  <select id="section" className="">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Some option</option>
                    <option value="2">Another option</option>
                    <option value="3" disabled>
                      A disabled option
                    </option>
                    <option value="4">Potato</option>
                  </select>
                </div>
                <div className="col">
                  <a
                    href=""
                    className="es-form-btn btn btn-block bg-gradient text-white"
                  >
                    View
                  </a>
                </div>
                <div className="col"></div>
              </div>
            </form>

            <div className="attendances-list-wrap mt-5">
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
