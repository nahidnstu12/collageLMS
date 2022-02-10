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
return lists.slice(0,5)
};
