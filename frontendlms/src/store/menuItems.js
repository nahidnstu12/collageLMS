export const adminMenuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "fa-tachometer-alt",
  },
  {
    name: "Courses",
    exact: true,
    to: `#`,
    iconClassName: "fa-book",
    subMenus: [
      { label: " Courses Lists", to: "/course/lists" },
      { label: " Courses Add", to: "/course/add" },
    ],
  },
  {
    name: "Attendances",
    exact: true,
    to: `#`,
    iconClassName: "fa-user-check",
    subMenus: [
      { label: "Attendances List", to: "/attendance/lists" },
      { label: "Attendances Reports", to: "/attendance/reports" },
    ],
  },
  {
    name: "Routine",
    exact: true,
    to: `#`,
    iconClassName: "fa-stopwatch",
    subMenus: [
      { label: " Full Routine", to: "/routine/full" },
      { label: " todays", to: "/routine/todays" },
    ],
  },
  {
    name: "Marks",
    exact: true,
    to: `#`,
    iconClassName: "fa-clipboard",
    subMenus: [
      { label: "MarkSheet", to: "/marks" },
    ],
  },
  {
    name: "Students",
    exact: true,
    to: `#`,
    iconClassName: "fa-user-graduate",
    subMenus: [
      { label: " Student Lists", to: "/student/lists" },
      { label: " Verified Students", to: "/student/verified" },
      // { label: " Student details", to: "/student/:id" },
      { label: " Student Add", to: "/student/add" },
    ],
  },
  {
    name: "Teacher",
    exact: true,
    to: `#`,
    iconClassName: "fa-chalkboard-teacher",
    subMenus: [
      { label: " Teacher Lists", to: "/teacher/lists" },
      // { label: " Teacher Details", to: "/teacher/:id" },
      { label: " Teacher Add", to: "/teacher/add" },
    ],
  },
  {
    name: "Profile",
    exact: true,
    to: `#`,
    iconClassName: "fa-user",
    subMenus: [
      { label: " My Profile", to: "/my-profile" },
      { label: " Edit Profile", to: "/my-profile/edit" },
    ],
  },
];

// teacher
export const teacherMenuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "fa-tachometer-alt",
  },
  {
    name: "Courses",
    exact: true,
    to: `#`,
    iconClassName: "fa-book",
    subMenus: [
      { label: " Courses Lists", to: "/course/lists" },
      // { label: " Courses details", to: "/course/:id" },
    ],
  },
  {
    name: "Attendances",
    exact: true,
    to: `#`,
    iconClassName: "fa-user-check",
    subMenus: [
      { label: "Attendances List", to: "/attendance/lists" },
      { label: "Attendances Reports", to: "/attendance/reports" },
    ],
  },
  {
    name: "Routine",
    exact: true,
    to: `#`,
    iconClassName: "fa-stopwatch",
    subMenus: [
      { label: " Full Routine", to: "/routine/full" },
      { label: " todays", to: "/routine/todays" },
    ],
  },
  {
    name: "Marks",
    exact: true,
    to: `#`,
    iconClassName: "fa-clipboard",
    subMenus: [
      { label: "MarkSheet", to: "/marks" },
      // { label: " Add Marks", to: "/marks/add" },
    ],
  },
  {
    name: "Students",
    exact: true,
    to: `#`,
    iconClassName: "fa-user-graduate",
    subMenus: [
      { label: " Student Lists", to: "/student/verified" },
      // { label: " Student details", to: "/student/:id" },
    ],
  },
  {
    name: "Teacher",
    exact: true,
    to: `#`,
    iconClassName: "fa-chalkboard-teacher",
    subMenus: [
      { label: " Teacher Lists", to: "/teacher/lists" },
      // { label: " Teacher Details", to: "/teacher/:id" },
    ],
  },
  {
    name: "Profile",
    exact: true,
    to: `#`,
    iconClassName: "fa-user",
    subMenus: [
      { label: " My Profile", to: "/my-profile" },
      { label: " Edit Profile", to: "/my-profile/edit" },
    ],
  },
];

// student
export const studentMenuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/dashboard",
    iconClassName: "fa-tachometer-alt",
  },
  {
    name: "Courses",
    exact: true,
    to: `#`,
    iconClassName: "fa-book",
    subMenus: [
      { label: " Courses Lists", to: "/course/lists" },
      // { label: " Courses details", to: "/course/:id" },
    ],
  },
  {
    name: "Attendances",
    exact: true,
    to: `#`,
    iconClassName: "fa-user-check",
    subMenus: [
      { label: "Attendances List", to: "/attendance/lists" },
      { label: "Attendances Reports", to: "/attendance/reports" },
    ],
  },
  {
    name: "Routine",
    exact: true,
    to: `#`,
    iconClassName: "fa-stopwatch",
    subMenus: [
      { label: " Full Routine", to: "/routine/full" },
      { label: " todays", to: "/routine/todays" },
    ],
  },
  {
    name: "Marks",
    exact: true,
    to: `#`,
    iconClassName: "fa-clipboard",
    subMenus: [{ label: "MarkSheet", to: "/marks" }],
  },
  {
    name: "Students",
    exact: true,
    to: `#`,
    iconClassName: "fa-user-graduate",
    subMenus: [
      { label: " Student Lists", to: "/student/verified" },
      // { label: " Student details", to: "/student/:id" },
    ],
  },
  {
    name: "Teacher",
    exact: true,
    to: `#`,
    iconClassName: "fa-chalkboard-teacher",
    subMenus: [
      { label: " Teacher Lists", to: "/teacher/lists" },
      // { label: " Teacher Details", to: "/teacher/:id" },
    ],
  },
  {
    name: "Profile",
    exact: true,
    to: `#`,
    iconClassName: "fa-user",
    subMenus: [
      { label: " My Profile", to: "/my-profile" },
      { label: " Edit Profile", to: "/my-profile/edit" },
    ],
  },
];
