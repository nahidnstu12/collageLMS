import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const MainBar = ({ navigateTo, label, icon, dataTarget, options }) => {
  return (
    <li className="u-sidebar-nav-menu__item">
      <NavLink
        to={navigateTo || "#"}
        // className="u-sidebar-nav-menu__link"
        className="u-sidebar-nav-menu__link"
        data-target={`#${dataTarget}`}
        // href="#!"
        // activeClassName="active"
      >
        <i className={"fas u-sidebar-nav-menu__item-icon " + icon}></i>
        <span className="u-sidebar-nav-menu__item-title">{label}</span>
      </NavLink>
      {options && (
        <ul
          id={dataTarget}
          className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
          style={{ display: "none" }}
        >
          {options?.map((item) => (
            <li className="u-sidebar-nav-menu__item" key={item.to}>
              <NavLink to={item.to || "#"} className="u-sidebar-nav-menu__link">
                <span className="u-sidebar-nav-menu__item-title">
                  {item.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
const SingleBar = ({ navigateTo, label, icon }) => {
  return (
    <li className="u-sidebar-nav-menu__item">
      <NavLink to={navigateTo} className="u-sidebar-nav-menu__link">
        <i className={"fas u-sidebar-nav-menu__item-icon " + icon}></i>
        <span className="u-sidebar-nav-menu__item-title">{label}</span>
      </NavLink>
    </li>
  );
};
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/",
    iconClassName: "fa-tachometer-alt",
  },
  {
    name: "Attendances",
    exact: true,
    to: `/content`,
    iconClassName: "fa-user-check",
    subMenus: [
      { label: "Attendances List", to: "/attendance/lists" },
      { label: "Attendances Reports", to: "/attendance/reports" },
    ],
  },
  {
    name: "Routine",
    exact: true,
    to: `/routine`,
    iconClassName: "fa-stopwatch",
    subMenus: [
      { label: " Full Routine", to: "/routine" },
      { label: " todays", to: "/routine/todays" },
    ],
  },
];
const optionsLists = {
  attendance: [
    {
      label: " Attendances List",
      to: "/attendance/lists",
    },
    {
      label: " Attendances Reports",
      to: "/attendance/reports",
    },
  ],
  routine: [
    { label: " Full Routine", to: "/routine" },
    { label: " todays", to: "/routine/todays" },
  ],
  marks: [
    { label: " Marks", to: "/marks" },
    { label: " Add Marks", to: "/marks/add" },
  ],
  student: [
    { label: " Student Lists", to: "/student/lists" },
    { label: " Student details", to: "/student/:id" },
    { label: " Student Add", to: "/student/add" },
  ],
  teacher: [
    { label: " Teacher Lists", to: "/teacher/lists" },
    { label: " Teacher Details", to: "/teacher/:id" },
    { label: " Teacher Add", to: "/teacher/add" },
  ],
  profile: [
    { label: " My Profile", to: "/my-profile" },
    { label: " Edit Profile", to: "/my-profile/edit" },
  ],
};
export default function Sidebar() {
  return (
    <aside id="sidebar" className="u-sidebar">
      <div className="u-sidebar-inner bg-gradient bdrs-30">
        <header className="u-sidebar-header">
          <Link to={"/"} className="u-sidebar-logo">
            <img
              className="img-fluid"
              src="assets/img/logo.png"
              width="124"
              alt="Stream Dashboard"
            />
          </Link>
        </header>

        <nav className="u-sidebar-nav">
          <ul className="u-sidebar-nav-menu u-sidebar-nav-menu--top-level">
            <SingleBar
              navigateTo={"/dashboard"}
              label={"Dashboard"}
              icon={"fa-tachometer-alt"}
            />
            <MainBar
              // navigateTo={"#!"}
              label={"Attendances"}
              icon={"fa-user-check"}
              dataTarget={"attendances"}
              options={optionsLists.attendance}
            />

            <MainBar
              navigateTo={"/routine"}
              label={"My Routines"}
              icon={"fa-stopwatch"}
              dataTarget={"subMenu1"}
              options={optionsLists.routine}
            />

            <MainBar
              navigateTo={"/marks"}
              label={"Marks"}
              icon={"fa-clipboard"}
              dataTarget={"marks"}
              options={optionsLists.marks}
            />
            <MainBar
              navigateTo={"/student"}
              label={"Students"}
              icon={"fa-user-graduate"}
              dataTarget={"students"}
              options={optionsLists.student}
            />

            <MainBar
              navigateTo={"/profile-me"}
              label={"My Profile"}
              icon={"fa-user"}
              dataTarget={"profile"}
              options={optionsLists.profile}
            />

            {/* <li className="u-sidebar-nav-menu__item">
              <a
                className="u-sidebar-nav-menu__link"
                href="#!"
                data-target="#homework"
              >
                <i className="fas fa-home u-sidebar-nav-menu__item-icon"></i>
                <span className="u-sidebar-nav-menu__item-title">Homework</span>
                <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                <span className="u-sidebar-nav-menu__indicator"></span>
              </a>

              <ul
                id="homework"
                className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                style={{ display: "none" }}
              >
                <li className="u-sidebar-nav-menu__item">
                  <a
                    className="u-sidebar-nav-menu__link"
                    href="homework-blank.html"
                  >
                    <span className="u-sidebar-nav-menu__item-title">
                      Homework Blank
                    </span>
                  </a>
                </li>
                <li className="u-sidebar-nav-menu__item">
                  <a className="u-sidebar-nav-menu__link" href="homework.html">
                    <span className="u-sidebar-nav-menu__item-title">
                      Homework
                    </span>
                  </a>
                </li>
                <li className="u-sidebar-nav-menu__item">
                  <a
                    className="u-sidebar-nav-menu__link"
                    href="homework-add-new.html"
                  >
                    <span className="u-sidebar-nav-menu__item-title">
                      Add New Homework
                    </span>
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
