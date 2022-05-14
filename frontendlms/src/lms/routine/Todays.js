import RoutineTable from "../../common/RoutineTable";

export default function Todays() {
  const today = () => {
    const arrayOfWeekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thusday",
      "Friday",
      "Saturday",
    ];

    const weekdayNumber = new Date().getDay();

    return arrayOfWeekdays[weekdayNumber];
    // return new Date().toLocaleString("default", { weekday: "long" });
  };
  const renderRoutine = () => {
    // const day = "Sunday";
    const day = today();
    console.log(day)
    if (day === "Friday" || day === "Saturday") {
      return (
        <section className="profile-area card">
          <div className="profile-content card-body d-flex">
            <h2 className="m-auto" style={{ fontSize: "40px" }}>
              Today is your holiday! Enjoy yourself
            </h2>
          </div>
        </section>
      );
    } else {
      return <RoutineTable today={day} />;
    }
  };

  return (
    <div>
      <section class="breadcumb-area card bg-gradient mb-5">
        <div class="bread-cumb-content card-body d-flex align-items-center">
          <div class="breadcumb-heading">
            <h2 class="text-white">{today()}</h2>
          </div>
          <div class="breadcumb-heading ml-auto">
            <h2 class="text-white">{new Date().toLocaleDateString()}</h2>
          </div>
          {/* <div class="breadcumb-image ml-auto">
              <img src="/assets/img/breadcumb-routines.png" alt="" />
            </div> */}
        </div>
      </section>
      {renderRoutine()}
      {/* <RoutineTable today={renderRoutine()}/> */}
    </div>
  );
}
