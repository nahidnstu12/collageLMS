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
