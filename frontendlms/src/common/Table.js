import { useAsyncDebounce } from "react-table";
import { useState } from "react";
import useTablesHook from "../hooks/useTablesHook";

function Table({ columns, data }) {
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
  // console.log({ state, page });

  // Render the UI for your table
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
                <th scope="col" className="text-white text-center">
                  Option
                </th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td className="text-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                  <td className="text-center">
                    <a href="" className="btn btn-outline-danger es-am-btn">
                      Edit
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
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
    </>
  );
}

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
          placeholder="Student Name"
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
  console.log({ state, page, pageCount, pageOptions });
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
