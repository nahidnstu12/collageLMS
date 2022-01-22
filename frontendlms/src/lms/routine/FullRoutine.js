import RoutineTable from "../../common/RoutineTable";

export default function FullRoutine() {
  return (
    <div>
      <section class="breadcumb-area card bg-gradient mb-5">
        <div class="bread-cumb-content card-body d-flex align-items-center">
          <div class="breadcumb-heading">
            <h2 class="text-white">My Class Routines</h2>
          </div>
          <div class="breadcumb-image ml-auto">
            <img src="/assets/img/breadcumb-routines.png" alt="" />
          </div>
        </div>
      </section>
      <RoutineTable />
    </div>
  );
}
