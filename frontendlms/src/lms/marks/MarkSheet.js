import { useForm } from "react-hook-form";
import FilterBatch from "../../common/FilterBatch";
import MarksTable from "../../common/MarksTable";
export default function MarkSheet() {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm({ mode: "all" });
  return (
    <>
      <section class="breadcumb-area card bg-gradient mb-5">
        <div class="bread-cumb-content card-body d-flex align-items-center">
          <div class="breadcumb-heading">
            <h2 class="text-white">All Students Marks</h2>
          </div>
          <div class="breadcumb-image ml-auto">
            <img src="/assets/img/breadcumb-marks.png" alt="" />
          </div>
        </div>
      </section>

      <section class="es-form-area">
        <div class="card">
          <header class="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
            <a href="" class="btn btn-sm btn-pill btn-outline-light ml-auto">
              + Add New
            </a>
          </header>
          <div class="card-body">
            <FilterBatch />

            <div class="attendances-list-wrap mt-5">
              <div class="show-option d-flex align-items-center mb-4">
                <div class="search-student ml-auto">
                  <form action="" class="search-student-form">
                    <input type="text" placeholder="Student Name" />
                    <button class="btn btn-lg btn-pill bg-gradient text-white">
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
