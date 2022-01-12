import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
      <aside id="sidebar" className="u-sidebar">
        <div className="u-sidebar-inner bg-gradient bdrs-30">
          <header className="u-sidebar-header">
            <a className="u-sidebar-logo" href="#">
              <img
                className="img-fluid"
                src="assets/img/logo.png"
                width="124"
                alt="Stream Dashboard"
              />
            </a>
          </header>

          <nav className="u-sidebar-nav">
            <ul className="u-sidebar-nav-menu u-sidebar-nav-menu--top-level">
              <li className="u-sidebar-nav-menu__item">
                <Link to="/dashboard">
                  <a className="u-sidebar-nav-menu__link active" href="#">
                    <i className="fas fa-tachometer-alt u-sidebar-nav-menu__item-icon"></i>
                    <span className="u-sidebar-nav-menu__item-title">
                      Dashboard
                    </span>
                  </a>
                </Link>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#attendances"
                >
                  <i className="fas fa-user-check u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    Attendances
                  </span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="attendances"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="attendances-blank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Attendances Blank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="attendances-list.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Attendances List
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="attendances-report-blank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Attendances Report Blank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="attendances-report.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Attendances Report
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#subMenu1"
                >
                  <i className="fas fa-stopwatch u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    My Routines
                  </span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="subMenu1"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="routines-mathmetics.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Routines Mathmetics
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="routines-mathmetics-add.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Add Routines Mathmetics
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="routines-accounting.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Routines Accounting
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="routines-accounting-add.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Add Routines Accounting
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#homework"
                >
                  <i className="fas fa-home u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    Homework
                  </span>
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
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="homework.html"
                    >
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
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#questions"
                >
                  <i className="fas fa-question u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    Questions
                  </span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="questions"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="questions-blank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Questions Blank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="questions-bank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Questions Bank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="questions-add.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Add Questions
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#online-exam"
                >
                  <i className="fas fa-diagnoses u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    Online Exam
                  </span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="online-exam"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="online-exam-blank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Online Exam Blank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="online-exams.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Online Exams
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="online-exam-add.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Add Online Exam
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#marks"
                >
                  <i className="far fa-clipboard u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">Marks</span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="marks"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="marks-blank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Marks Blank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a className="u-sidebar-nav-menu__link" href="marks.html">
                      <span className="u-sidebar-nav-menu__item-title">
                        Marks
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="marks-add.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Add Marks
                      </span>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#students"
                >
                  <i className="fas fa-user-graduate u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    Students
                  </span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="students"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="students-all-blank.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        All Student Blank
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <Link to={"/student"}>
                      <a
                        className="u-sidebar-nav-menu__link"
                        href="students-all.html"
                      >
                        <span className="u-sidebar-nav-menu__item-title">
                          All Student
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <Link to={"/student/add"}>
                      <a
                        className="u-sidebar-nav-menu__link"
                        href="students-add.html"
                      >
                        <span className="u-sidebar-nav-menu__item-title">
                          Add Student
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="u-sidebar-nav-menu__item">
                <a
                  className="u-sidebar-nav-menu__link"
                  href="#!"
                  data-target="#profile"
                >
                  <i className="fa fa-user u-sidebar-nav-menu__item-icon"></i>
                  <span className="u-sidebar-nav-menu__item-title">
                    My Profile
                  </span>
                  <i className="fa fa-angle-right u-sidebar-nav-menu__item-arrow"></i>
                  <span className="u-sidebar-nav-menu__indicator"></span>
                </a>

                <ul
                  id="profile"
                  className="u-sidebar-nav-menu u-sidebar-nav-menu--second-level"
                  style={{ display: "none" }}
                >
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="my-profile.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        My Profile
                      </span>
                    </a>
                  </li>
                  <li className="u-sidebar-nav-menu__item">
                    <a
                      className="u-sidebar-nav-menu__link"
                      href="edit-my-profile.html"
                    >
                      <span className="u-sidebar-nav-menu__item-title">
                        Edit Profile
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    );
}
