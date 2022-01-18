import { useMemo } from "react";
import RoutineTable from "../../common/RoutineTable";
import Table from "../../common/Table";
import { routineColumns } from "../../store/columnlevel";

export default function FullRoutine() {
  const data = useMemo(() => FullRoutine, []);
  const columns = useMemo(() => routineColumns, []);
  return (
    <div>
      <RoutineTable />
    </div>
  );
}


