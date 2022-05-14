import { getData } from "./axios";

export const teacherlists = async () => {
  const data = await getData("/teachers");

  const lists = data.map((item) => {
    return {
      code: item.id,
      title: item.full_name,
      //   designation: item?.teacher_infos?.designation,
    };
  });

  //   return lists.filter((item) => item.designation !== undefined);
  return lists.slice(0, 5);
};

/**
 * Get Sorted weekly classes basaed on timeslot
 * @param {array} week
 * @param {array} arr
 * @returns {array}
 */
export const sortedWeekdata = (week, arr) => {
  const timeSlotArray = [
    "9-9:45",
    "10-10:45",
    "11-11:45",
    "12-12:45",
    "2-2:245",
    "3-3:45",
    "4-4:45",
  ];
  let flag = 0
  const ids = week?.map((item) => item.timeslot);
  // console.log(ids);
  const filtered = week?.filter(
    ({ timeslot }, index) => !ids?.includes(timeslot, index + 1)
  );
  for (let time of timeSlotArray) {
    for (let course of filtered) {
      if (time === course.timeslot) {
        arr.push(course);
        //   console.log(time)
        flag = 1;
      }
    }
    flag === 0 ? arr.push({}) : (flag = 0);
  }
  return arr;
};

export const shortName = (str) => str.split(" ").slice(0, 2).join(" ");
