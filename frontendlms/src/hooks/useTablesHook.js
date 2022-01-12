import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";

export default function useTablesHook({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
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
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );
  return {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
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
  };
}
