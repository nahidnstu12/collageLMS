import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import FilterBatch from "../../common/FilterBatch";
import Table from "../../common/Table";
import { getData } from "../../hooks/axios";
import { teacherlists } from "../../hooks/lib";
import AuthConsumer from "../../hooks/useAuth";
import { studentColumns } from "../../store/columnlevel";
import STUDENT_DATA from "../../store/STUDENT_MOCK_DATA.json";
// import $ from "jquery";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  // const [getUrl,setUrl] = useState("")
  const data = useMemo(() => students, [students]);
  const columns = useMemo(() => studentColumns, []);
  let { url } = useRouteMatch();
  const { profile } = AuthConsumer();
  // console.log({ url });
  const ckUrl = url === "/student/lists";
  useEffect(async () => {
    let getUrl = ckUrl ? "/unverified/students" : "/students";

    console.log(getUrl);
    let res = await getData(getUrl);
    res = res.filter((item) => item.student_infos);
    setStudents(res);
    console.log(res);
  }, [url]);

  return (
    <>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">
              {ckUrl ? "All Students(Unverified)" : "Verified Students"}
            </h2>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="assets/img/breadcumb-students.png" alt="" />
          </div>
        </div>
      </section>

      <section className="es-form-area">
        <div className="card">
          <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
            {profile?.role === "super_admin" && (
              <Link to={`/student/add`}>
                <a
                  href=""
                  className="btn btn-sm btn-pill btn-outline-light ml-auto"
                >
                  + Add New
                </a>
              </Link>
            )}
          </header>

          <div className="card-body">
            <FilterBatch setStudents={setStudents}/>
            <div className="attendances-list-wrap mt-5">
              <Table
                columns={columns}
                data={data}
                select={"student"}
                ckUrl={ckUrl}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
