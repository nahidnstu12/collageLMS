import { useAsyncDebounce } from "react-table";
import { useState } from "react";
import useTablesHook from "../hooks/useTablesHook";
import { Link, useHistory } from "react-router-dom";
import Spinner from "./Spinner";
import AuthConsumer from "../hooks/useAuth";
import { useEffect } from "react";
import { getData } from "../hooks/axios";

function Table({ columns, data, select, ckUrl }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    // global filter
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
    // pagination
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
  } = useTablesHook({
    columns,
    data,
  });
  const history = useHistory();
  // const [datas, setData] = useState([]);
  // useEffect(() => {
  //   setData(data);
  // }, [datas]);

  const {
    profile: { role },
  } = AuthConsumer();

  const handleVerify = async (id) => {
    const res = await getData(`/verify/student/${id}`);
    console.log(res);
    // let unverifiedData = await getData("/unverified/students");
    // unverifiedData = unverifiedData.filter((item) => item.student_infos);
    // setData(unverifiedData);
    // console.log(unverifiedData);
  };
  return (
    <>
      <div className="show-option d-flex align-items-center mb-4">
        <ShowPage state={state} setPageSize={setPageSize} />
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <div className="table-responsive">
        {data.length === 0 ? (
          <Spinner />
        ) : (
          <table {...getTableProps()} className="table table-sm mb-0">
            <thead className="bg-gradient">
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      className="text-white text-center"
                      {...column.getHeaderProps()}
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                  {role === "super_admin" && (
                    <th scope="col" className="text-white text-center">
                      Option
                    </th>
                  )}
                  {role === "super_admin" && select === "student" && ckUrl && (
                    <th scope="col" className="text-white text-center">
                      Verify
                    </th>
                  )}
                </tr>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row, i) => {
                prepareRow(row);
                // console.log( encodeURIComponent(row.cells[0].value));
                return (
                  // <Link to={`/${select}/${row.cells[0].value}`}>
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        //  <Link to={`/${select}/${row.cells[0].value}`}>
                        <td
                          className="text-center"
                          {...cell.getCellProps()}
                          onDoubleClick={() =>
                            history.push(`/${select}/${row.cells[0].value}`)
                          }
                        >
                          {cell.render("Cell")}
                        </td>
                        // </Link>
                      );
                    })}
                    {role === "super_admin" && (
                      <EditBtn
                        url={`/${select}/edit/${encodeURIComponent(
                          row.cells[0].value
                        )}`}
                        text={"Edit"}
                      />
                    )}
                    {role === "super_admin" &&
                      select === "student" &&
                      ckUrl && (
                        <EditBtn
                          text={"Verify"}
                          handleVerify={() =>
                            handleVerify(
                              `${encodeURIComponent(row.cells[0].value)}`
                            )
                          }
                        />
                      )}
                  </tr>
                  // </Link>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      {data.length !== 0 && (
        <Pagination
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageOptions={pageOptions}
          pageCount={pageCount}
          gotoPage={gotoPage}
          nextPage={nextPage}
          previousPage={previousPage}
          setPageSize={setPageSize}
          state={state}
          page={page}
        />
      )}
    </>
  );
}
export const EditBtn = ({ url, text, network, handleVerify }) => {
  // console.log(text[0].value);
  // useEffect(async () => {
  //   const data = await getData(network);
  //   console.log(data);
  // }, []);
  return (
    <td className="text-center">
      <Link
        to={url}
        className="btn btn-outline-danger es-am-btn"
        onClick={handleVerify}
      >
        {text}
      </Link>
    </td>
  );
};
export const GlobalFilter = ({ globalFilter, setGlobalFilter }) => {
  //   const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="search-student ml-auto">
      <form action="" className="search-student-form">
        <input
          type="text"
          placeholder="Search "
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
        />
        <button className="btn btn-lg btn-pill bg-gradient text-white">
          Search
        </button>
      </form>
    </div>
  );
};

export const Pagination = ({
  canPreviousPage,
  canNextPage,
  pageOptions,
  pageCount,
  nextPage,
  previousPage,
  state,
  page,
}) => {
  // console.log({ state, page, pageCount, pageOptions });
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <nav
          aria-label="Bootstrap Pagination"
          className="mt-5 text-center d-inline-block"
        >
          <ul className="pagination mb-0">
            <li className="page-item">
              <button
                className="btn btn-outline-danger prev"
                disabled={!canPreviousPage}
                onClick={() => previousPage()}
              >
                <span className="ml-1 d-none d-xl-inline-block">Previous</span>
              </button>
            </li>
            <li className="page-item">
              <a className="btn btn-danger bg-gradient text-white ml-4 mr-4">
                {state.pageIndex + 1} of {pageOptions.length}
              </a>
            </li>
            <li className="page-item">
              <button
                className="btn btn-outline-danger next"
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <span className="mr-1 d-none d-xl-inline-block">Next</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
export const ShowPage = ({ state, setPageSize }) => {
  return (
    <div className="show-list-count">
      <p>
        show
        <select
          id="section"
          className=""
          value={state.pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize}
            </option>
          ))}
        </select>
        items
      </p>
    </div>
  );
};
export default Table;
