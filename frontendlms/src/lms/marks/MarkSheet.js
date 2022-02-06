import { useForm } from "react-hook-form";
import FilterBatch from "../../common/FilterBatch";
import MarksTable from "../../common/MarksTable";
export default function MarkSheet({role}) {
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
            <h2 className="text-white">All Students Marks</h2>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="/assets/img/breadcumb-marks.png" alt="" />
          </div>
        </div>
      </section>

      <section className="es-form-area">
        <div className="card">
          <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
            {role === "teacher" && (
              <a
                href=""
                className="btn btn-sm btn-pill btn-outline-light ml-auto"
              >
                + Add New
              </a>
            )}
          </header>
          <div className="card-body">
            <FilterBatch />

            <div className="attendances-list-wrap mt-5">
              <div className="show-option d-flex align-items-center mb-4">
                <div className="search-student ml-auto">
                  <form action="" className="search-student-form">
                    <input type="text" placeholder="Student Name" />
                    <button className="btn btn-lg btn-pill bg-gradient text-white">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              <MarksTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
