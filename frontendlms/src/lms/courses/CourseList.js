import React, { useMemo } from 'react';
import Table from '../../common/Table';
import { courseColumns, courseData } from '../../store/columnlevel';

export default function CourseList() {
  const data = useMemo(() => courseData, []);
  const columns = useMemo(() => courseColumns, []);
  return (
    <div>
      <section class="breadcumb-area card bg-gradient mb-5">
        <div class="bread-cumb-content card-body d-flex align-items-center">
          <div class="breadcumb-heading">
            <h2 class="text-white">Course Lists</h2>
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
            <form action="#" class="es-form">
              <div class="row align-items-center">
                <div class="col">
                  <label for="class">Class</label>
                  <select id="class" class="">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Some option</option>
                    <option value="2">Another option</option>
                    <option value="3" disabled>
                      A disabled option
                    </option>
                    <option value="4">Potato</option>
                  </select>
                </div>
                <div class="col">
                  <label for="section">Section</label>
                  <select id="section" class="">
                    <option data-display="Select">Nothing</option>
                    <option value="1">Some option</option>
                    <option value="2">Another option</option>
                    <option value="3" disabled>
                      A disabled option
                    </option>
                    <option value="4">Potato</option>
                  </select>
                </div>

                <div class="col">
                  <a
                    href=""
                    class="es-form-btn btn btn-block bg-gradient text-white"
                  >
                    View
                  </a>
                </div>
              </div>
            </form>

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
              {/* <MarksTable /> */}
              <Table columns={columns} data={data} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
