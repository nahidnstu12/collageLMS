export const studentColumns = [
  {
    Header: "SID",
    accessor: "student_infos.s_id",
  },
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Session",
    accessor: "student_infos.session",
  },
  {
    Header: "Year-Term",
    accessor: "student_infos.yt",
  },
  {
    Header: "Batch",
    accessor: "student_infos.batch",
  },
  {
    Header: "Address",
    accessor: "Address",
  },
];

// teacher
export const teacherColumns = [
  {
    Header: "TID",
    accessor: "teacher_infos.t_id",
  },
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    accessor: "phone",
  },
  {
    Header: "Designation",
    accessor: "teacher_infos.designation",
  },
];

export const teacherData = [
  {
    tid: "123-000",
    name: "Asadun Nabi",
    designation: "Professior",
    email: "asadun@teacher.com",
    phone: "0173425632",
    // profilePic: "../"
  },
  {
    tid: "123-001",
    name: "Humuyun Kabir",
    designation: "Professior",
    email: "hk@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-002",
    name: "Jabed Hossen",
    designation: "Professior",
    email: "jabed@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-003",
    name: "Hasnar Riaz",
    designation: "Assistant Professior",
    email: "asadun@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-004",
    name: "Nazai Mazadi",
    designation: "Assistant Professior",
    email: "asadun@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-005",
    name: "Ratna Dip Kuri",
    designation: "Lecturer",
    email: "kuri@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-006",
    name: "Akaas Pathan",
    designation: "Lecturer",
    email: "asadun@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-007",
    name: "Nadia Akter",
    designation: "Professior",
    email: "asadun@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-008",
    name: "Abul Kalam Azad",
    designation: "Professior",
    email: "asadun@teacher.com",
    phone: "0173425632",
  },
  {
    tid: "123-008",
    name: "Mohammad Rana",
    designation: "Assitant Professior",
    email: "rana@teacher.com",
    phone: "0173425632",
  },
];
// course data
export const courseColumns = [
  {
    Header: "Course Id",
    accessor: "course_code",
  },
  {
    Header: "Course Title",
    accessor: "course_title",
  },
  {
    Header: "Course Teacher",
    accessor: "teacher.full_name",
  },
  {
    Header: "Credit Hour",
    accessor: "credit_hour",
  },
  {
    Header: "Year-Term",
    accessor: "yt",
  },
];
export const courseData = [
  {
    courseId: "CSTE1101",
    courseTitle: "Computer Fundamentals",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "1-1",
    // asignee: 1, //teacher id
  },
  {
    courseId: "CSTE1103",
    courseTitle: "Programming Fundamentals",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "1-1",
  },
  {
    courseId: "CSTE2101",
    courseTitle: "Semiconductors",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "2-1",
  },
  {
    courseId: "CSTE2103",
    courseTitle: "Electronic Circuits",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "2-1",
  },
  {
    courseId: "CSTE3101",
    courseTitle: "Data Structure and Algorithm",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "3-1",
  },
  {
    courseId: "CSTE3105",
    courseTitle: "Compiler Construction",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "3-1",
  },
  {
    courseId: "CSTE4101",
    courseTitle: "Image Processing",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "4-1",
  },
  {
    courseId: "CSTE4105",
    courseTitle: "Artificial Intelligent",
    creditHour: "3",
    courseDescription:
      "Computer fundamental Computer fundamental Computer fundamental Computer fundamental",
    yt: "4-1",
  },
];
export const fullRoutine = [
  { courseCode: "CSTE3201", courseTeacher: "Pathan", time: "A", day: "sunday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "B", day: "sunday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "C", day: "sunday" },
  { courseCode: null, courseTeacher: null, time: "D", day: "sunday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "E", day: "sunday" },
  { courseCode: "CSTE3201", courseTeacher: "Pathan", time: "F", day: "sunday" },
  { courseCode: "CSTE3201", courseTeacher: "Pathan", time: "F", day: "sunday" },

  // monday
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "A", day: "monday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "B", day: "monday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "C", day: "monday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "D", day: "monday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "E", day: "monday" },
  { courseCode: "CSTE3201", courseTeacher: "Hasnat", time: "F", day: "monday" },
  { courseCode: null, courseTeacher: null, time: "D", day: "monday" },
  // tuesday

  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "A",
    day: "tuesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "B",
    day: "tuesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "C",
    day: "tuesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "D",
    day: "tuesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "E",
    day: "tuesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "F",
    day: "tuesday",
  },
  { courseCode: null, courseTeacher: null, time: "D", day: "tuesday" },
  // wednesday
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "A",
    day: "wednesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "B",
    day: "wednesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "C",
    day: "wednesday",
  },
  { courseCode: null, courseTeacher: null, time: "D", day: "wednesday" },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "D",
    day: "wednesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "E",
    day: "wednesday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "F",
    day: "wednesday",
  },
  // thursday
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "A",
    day: "thursday",
  },
  { courseCode: null, courseTeacher: null, time: "D", day: "thursday" },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "B",
    day: "thursday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "C",
    day: "thursday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "D",
    day: "thursday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Hasnat",
    time: "E",
    day: "thursday",
  },
  {
    courseCode: "CSTE3201",
    courseTeacher: "Pathan",
    time: "F",
    day: "thursday",
  },
];

export const routineColumns = [
  {
    Header: "Day",
    accessor: "day",
  },
  {
    Header: "9.00-9:45",
    accessor: "timeA",
  },
  {
    Header: "10.00-10:45",
    accessor: "timeB",
  },
  {
    Header: "11.00-11:45",
    accessor: "timeC",
  },
  {
    Header: "12.00-12:45",
    accessor: "timeD",
  },
  {
    Header: "2.00-2:45",
    accessor: "timeE",
  },
  {
    Header: "3.00-3:45",
    accessor: "timeF",
  },
  {
    Header: "4.00-4:45",
    accessor: "timeG",
  },
];

// db fullroutine
export const fullRoutineLists = [
  {
    id: 1,
    timeslot: "10-10:45",
    weekday: "Friday",
    course_code: "CSTEab8d51",
    course_name: "est",
    t_id: "5af1b2",
    teacher_name: "Miss Rozella Gutmann",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 2,
    timeslot: "10-10:45",
    weekday: "Tuesday",
    course_code: "CSTEab8d51",
    course_name: "sequi",
    t_id: "993f72",
    teacher_name: "Amina Smitham",
    yt: "Y4-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 3,
    timeslot: "3-3:45",
    weekday: "Tuesday",
    course_code: "CSTE624fa9",
    course_name: "tempore",
    t_id: "5de610",
    teacher_name: "Skye Gleichner",
    yt: "Y4-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 4,
    timeslot: "4-4:45",
    weekday: "Friday",
    course_code: "CSTE166373",
    course_name: "id",
    t_id: "b57392",
    teacher_name: "Kyla Vandervort",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 5,
    timeslot: "12-12:45",
    weekday: "Saturday",
    course_code: "CSTE99624c",
    course_name: "rerum",
    t_id: "28f95d",
    teacher_name: "Dr. Rylan Toy",
    yt: "Y2-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 6,
    timeslot: "3-3:45",
    weekday: "Sunday",
    course_code: "CSTE565e20",
    course_name: "id",
    t_id: "00b533",
    teacher_name: "Mr. Andres Langosh I",
    yt: "Y1-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 7,
    timeslot: "10-10:45",
    weekday: "Tuesday",
    course_code: "CSTE28ed21",
    course_name: "sint",
    t_id: "03e67e",
    teacher_name: "Ottilie Bailey PhD",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 8,
    timeslot: "10-10:45",
    weekday: "Wednesday",
    course_code: "CSTEab8d51",
    course_name: "rerum",
    t_id: "528205",
    teacher_name: "Lennie Greenholt I",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 9,
    timeslot: "2-2:245",
    weekday: "Tuesday",
    course_code: "CSTEa5439c",
    course_name: "natus",
    t_id: "f4db6b",
    teacher_name: "Mrs. Eldridge Davis",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 10,
    timeslot: "2-2:245",
    weekday: "Friday",
    course_code: "CSTE3ce2c4",
    course_name: "ut",
    t_id: "120cf2",
    teacher_name: "Prof. Griffin Lang III",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 11,
    timeslot: "3-3:45",
    weekday: "Sunday",
    course_code: "CSTE28494c",
    course_name: "autem",
    t_id: "424d60",
    teacher_name: "Suzanne Labadie III",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 12,
    timeslot: "9-9:45",
    weekday: "Tuesday",
    course_code: "CSTE61df56",
    course_name: "quis",
    t_id: "424d60",
    teacher_name: "Bailee Glover",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 13,
    timeslot: "10-10:45",
    weekday: "Saturday",
    course_code: "CSTE565e20",
    course_name: "pariatur",
    t_id: "31c88a",
    teacher_name: "Dr. Marisa Cormier",
    yt: "Y2-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 14,
    timeslot: "4-4:45",
    weekday: "Friday",
    course_code: "CSTE64676a",
    course_name: "sit",
    t_id: "5e5081",
    teacher_name: "Allen Daugherty",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 15,
    timeslot: "4-4:45",
    weekday: "Monday",
    course_code: "CSTEe44edf",
    course_name: "iusto",
    t_id: "9a841c",
    teacher_name: "Mr. Bailey Glover",
    yt: "Y4-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 16,
    timeslot: "12-12:45",
    weekday: "Monday",
    course_code: "CSTEa5439c",
    course_name: "unde",
    t_id: "5de610",
    teacher_name: "Cheyanne Weber",
    yt: "Y1-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 17,
    timeslot: "12-12:45",
    weekday: "Monday",
    course_code: "CSTE6efef7",
    course_name: "ducimus",
    t_id: "bd67d3",
    teacher_name: "Shane Williamson",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 18,
    timeslot: "11-11:45",
    weekday: "Monday",
    course_code: "CSTE624fa9",
    course_name: "officia",
    t_id: "a107ed",
    teacher_name: "Miss Shannon O'Conner I",
    yt: "Y4-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 19,
    timeslot: "9-9:45",
    weekday: "Thusday",
    course_code: "CSTE3ce2c4",
    course_name: "vitae",
    t_id: "de238f",
    teacher_name: "Katrina Hagenes PhD",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 20,
    timeslot: "11-11:45",
    weekday: "Saturday",
    course_code: "CSTE28ed21",
    course_name: "sint",
    t_id: "690020",
    teacher_name: "Arielle Franecki",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 21,
    timeslot: "10-10:45",
    weekday: "Sunday",
    course_code: "CSTEdfc02e",
    course_name: "fugiat",
    t_id: "73b36d",
    teacher_name: "Ms. Maggie Wisozk V",
    yt: "Y4-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 22,
    timeslot: "4-4:45",
    weekday: "Monday",
    course_code: "CSTE565e20",
    course_name: "et",
    t_id: "dac1dc",
    teacher_name: "Mr. Cecil Homenick PhD",
    yt: "Y4-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 23,
    timeslot: "2-2:245",
    weekday: "Sunday",
    course_code: "CSTEa5439c",
    course_name: "accusantium",
    t_id: "df550c",
    teacher_name: "Erik Effertz",
    yt: "Y1-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 24,
    timeslot: "10-10:45",
    weekday: "Sunday",
    course_code: "CSTE46fbba",
    course_name: "quos",
    t_id: "1c594c",
    teacher_name: "Dr. Edward Bahringer V",
    yt: "Y1-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 25,
    timeslot: "4-4:45",
    weekday: "Wednesday",
    course_code: "CSTEdfc02e",
    course_name: "necessitatibus",
    t_id: "8d3ce3",
    teacher_name: "Corbin Cassin Jr.",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 26,
    timeslot: "4-4:45",
    weekday: "Thusday",
    course_code: "CSTEe44edf",
    course_name: "amet",
    t_id: "00b533",
    teacher_name: "Ms. Billie Kilback PhD",
    yt: "Y1-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 27,
    timeslot: "4-4:45",
    weekday: "Monday",
    course_code: "CSTEa5439c",
    course_name: "ullam",
    t_id: "2b0427",
    teacher_name: "Ms. Katlynn Graham",
    yt: "Y4-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 28,
    timeslot: "12-12:45",
    weekday: "Tuesday",
    course_code: "CSTE798328",
    course_name: "fuga",
    t_id: "52ed70",
    teacher_name: "Mrs. Pink Blanda",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 29,
    timeslot: "9-9:45",
    weekday: "Thusday",
    course_code: "CSTEe44edf",
    course_name: "perferendis",
    t_id: "7ced9b",
    teacher_name: "Noemy Spencer I",
    yt: "Y2-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 30,
    timeslot: "12-12:45",
    weekday: "Wednesday",
    course_code: "CSTEe44edf",
    course_name: "saepe",
    t_id: "41afba",
    teacher_name: "Prof. Kameron Jaskolski",
    yt: "Y4-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 31,
    timeslot: "10-10:45",
    weekday: "Friday",
    course_code: "CSTE3ce2c4",
    course_name: "quia",
    t_id: "bd67d3",
    teacher_name: "Mrs. Arlene Jacobi",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 32,
    timeslot: "11-11:45",
    weekday: "Tuesday",
    course_code: "CSTEa5439c",
    course_name: "optio",
    t_id: "f4db6b",
    teacher_name: "Lourdes Walker",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 33,
    timeslot: "2-2:245",
    weekday: "Thusday",
    course_code: "CSTE61df56",
    course_name: "nulla",
    t_id: "488b01",
    teacher_name: "Marion Johnston",
    yt: "Y2-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 34,
    timeslot: "3-3:45",
    weekday: "Monday",
    course_code: "CSTE8ca8a7",
    course_name: "nihil",
    t_id: "f8448e",
    teacher_name: "Elda Herzog",
    yt: "Y2-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 35,
    timeslot: "10-10:45",
    weekday: "Friday",
    course_code: "CSTE5ac24e",
    course_name: "sed",
    t_id: "395e3e",
    teacher_name: "Prof. Tyrique Walter Sr.",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 36,
    timeslot: "9-9:45",
    weekday: "Friday",
    course_code: "CSTE64676a",
    course_name: "similique",
    t_id: "5049fc",
    teacher_name: "Brennan Price",
    yt: "Y1-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 37,
    timeslot: "2-2:245",
    weekday: "Saturday",
    course_code: "CSTE798328",
    course_name: "dolorem",
    t_id: "42e22c",
    teacher_name: "Verdie Langosh",
    yt: "Y4-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 38,
    timeslot: "3-3:45",
    weekday: "Thusday",
    course_code: "CSTE624fa9",
    course_name: "et",
    t_id: "28f95d",
    teacher_name: "Alfreda McCullough",
    yt: "Y4-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 39,
    timeslot: "10-10:45",
    weekday: "Saturday",
    course_code: "CSTE61df56",
    course_name: "nemo",
    t_id: "cae290",
    teacher_name: "Cristina Littel",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 40,
    timeslot: "11-11:45",
    weekday: "Monday",
    course_code: "CSTEab8d51",
    course_name: "dolores",
    t_id: "1b4512",
    teacher_name: "Porter Wilderman",
    yt: "Y2-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 41,
    timeslot: "9-9:45",
    weekday: "Tuesday",
    course_code: "CSTE64676a",
    course_name: "cumque",
    t_id: "de238f",
    teacher_name: "Hertha Luettgen",
    yt: "Y4-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 42,
    timeslot: "3-3:45",
    weekday: "Monday",
    course_code: "CSTE565e20",
    course_name: "blanditiis",
    t_id: "79a238",
    teacher_name: "Daren Stark I",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 43,
    timeslot: "2-2:245",
    weekday: "Tuesday",
    course_code: "CSTE798328",
    course_name: "dolorem",
    t_id: "488b01",
    teacher_name: "Mrs. Malvina Wintheiser PhD",
    yt: "Y4-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 44,
    timeslot: "11-11:45",
    weekday: "Sunday",
    course_code: "CSTEdfc02e",
    course_name: "iusto",
    t_id: "5161d1",
    teacher_name: "Verlie VonRueden V",
    yt: "Y2-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 45,
    timeslot: "2-2:245",
    weekday: "Tuesday",
    course_code: "CSTE5ac24e",
    course_name: "voluptate",
    t_id: "a107ed",
    teacher_name: "Catalina Torp DVM",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 46,
    timeslot: "11-11:45",
    weekday: "Sunday",
    course_code: "CSTE28494c",
    course_name: "animi",
    t_id: "cae290",
    teacher_name: "Winnifred Hilpert",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 47,
    timeslot: "11-11:45",
    weekday: "Sunday",
    course_code: "CSTE258132",
    course_name: "dolores",
    t_id: "00b533",
    teacher_name: "Mr. Fern Jacobson PhD",
    yt: "Y3-T2",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 48,
    timeslot: "11-11:45",
    weekday: "Wednesday",
    course_code: "CSTE624fa9",
    course_name: "voluptatibus",
    t_id: "f8448e",
    teacher_name: "Dr. Lemuel Aufderhar Jr.",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 49,
    timeslot: "3-3:45",
    weekday: "Sunday",
    course_code: "CSTEe5fa25",
    course_name: "nesciunt",
    t_id: "7ced9b",
    teacher_name: "Dr. Clay Kris DDS",
    yt: "Y2-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
  {
    id: 50,
    timeslot: "3-3:45",
    weekday: "Monday",
    course_code: "CSTE8ca8a7",
    course_name: "dolorem",
    t_id: "424d60",
    teacher_name: "Mrs. Sydnee Christiansen",
    yt: "Y3-T1",
    created_at: "2022-02-18T12:11:53.000000Z",
    updated_at: "2022-02-18T12:11:53.000000Z",
  },
];

// attendance lists
export const attendanceLists = [
  { sid: "1701001", totalClass: "20", attendedClass: "10", yt: "Y1-T1" },
  { sid: "1701003", totalClass: "20", attendedClass: "5", yt: "Y1-T1" },
  { sid: "1701004", totalClass: "20", attendedClass: "7", yt: "Y1-T1" },
  { sid: "1701005", totalClass: "20", attendedClass: "1", yt: "Y2-T1" },
  { sid: "1701007", totalClass: "20", attendedClass: "11", yt: "Y2-T1" },
  { sid: "1701008", totalClass: "20", attendedClass: "7", yt: "Y1-T1" },
  { sid: "1701009", totalClass: "20", attendedClass: "7", yt: "Y1-T1" },
  { sid: "1701010", totalClass: "20", attendedClass: "10", yt: "Y1-T1" },
  { sid: "1701011", totalClass: "20", attendedClass: "10", yt: "Y1-T1" },
  { sid: "1701011", totalClass: "20", attendedClass: "10", yt: "Y1-T1" },
];

// marks lists
export const marksLists = [
  {
    sid: "1701001",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
    yt: "Y1-T1",
  },
  {
    sid: "1701003",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
    yt: "Y1-T1",
  },
  {
    sid: "1701004",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701005",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701007",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701008",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701009",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701010",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701011",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
  {
    sid: "1701012",
    ct1: "20",
    ct2: "18",
    ct3: "15",
    attendance: "4",
    written: "55",
    total: "70",
  },
];
