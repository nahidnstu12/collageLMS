import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginActions } from "./redux/actions";
import Header from "./lms/layout/Header";

export default function Homelist() {
  // const [user, setUser] = useState({});
  // function onChangeHandler(event) {
  //   const { name, value } = event.target;
  //   setUser((prevCourse) => ({
  //     ...prevCourse,
  //     [name]: name === "authorId" ? parseInt(value, 10) : value,
  //   }));
  // }
  // const dispatch = useDispatch();
  // const { isAuth, username } = useSelector((state) => state.auth);
  // console.log(isAuth);
  return (
    <div>
      <Header />
      {/* Home Page
      <div className="d-flex justify-content-around flex-wrap">
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/login"}>Login</Link>
      </div>
      {isAuth ? (
        <h3>WelCome {username}</h3>
      ) : (
        <div>
          <h3>Login</h3>
          <input
            type={"text"}
            name="phone"
            value={user.phone}
            onChange={(e) => onChangeHandler(e)}
            placeholder="phone"
          />
          <input
            type={"text"}
            name="username"
            value={user.username}
            onChange={onChangeHandler}
            placeholder="username"
          />
          <button onClick={() => dispatch(loginActions(user))}>Login</button>
        </div>
      )} */}
      <main className="u-main" role="main">
        <div className="u-content">
          <div className="u-body">
            <section className="es-form-area section-center">
              <div className="card">
                <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
                  <h2 className="text-white m-auto  mb-0">User Manual</h2>
                </header>
                <div className="card-body">
                  <div className="row" style={{ padding: "1rem" }}>
                    <div className="co">{userManual.des}</div>

                    <br />
                    <br />
                    <div className="col">
                      <div className="row">
                        <p>Abaialble features are:</p>

                        <ul>
                          {userManual.features.map((itm, i) => (
                            <li key={i}>{itm}</li>
                          ))}
                        </ul>
                        <p>Working features are:</p>

                        <ul>
                          {userManual.workingFeature.map((itm, i) => (
                            <li key={i}>{itm}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <p>Given Credentials:</p>

                      <ul>
                        {userManual.cred.map((itm, i) => (
                          <li key={i}>{itm}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col">
                      <p>important url: </p>

                      <ul>
                        {userManual.routes.map((itm, i) => (
                          <li key={i}>{itm}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <img src="" alt="" />
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
const userManual = {
  des: "This is CollageLMS where we can manage students, teacher and course materials. This software have managed three roles. 1) Super Admin 2) Student 3) Teacher.  These three types of user can login different interface.",
  features: [
    "User Specific Dashboard",
    "Course Add/Edit/Single View",
    "Student Management",
    "Teacher Management",
    "Profile Management",
    "Routine Management",
    "Attendance Mangement",
  ],
  workingFeature: ["Routine Management", "Attendance Mangement"],
  cred: [
    "Super Admin Email: admin@mail.com password: 123",
    "Teacher Email: ogrimes@example.net password: 123",
    "Student Email: janae49@example.net password: 123",
  ],
  routes: [
    "super admin login : http://localhost:3000/super_admin/login",
    "Teacher login: http://localhost:3000/teacher/login",
    "Student login: http://localhost:3000/student/login",
    "Dahsboard: http://localhost:3000/dashboard",
  ],
};
const userManual2 = `This is CollageLMS where we can manage students, teacher and course materials. This software have managed three roles. 1) Super Admin 2) Student 3) Teacher.  These three types of user can login different interface. 
Abaialble features are: 
-Course Add/Edit/Single View
-Routine Management
-Attendance Mangement
-Student Management
-Teacher Management
-Profile Management

Given Credentials
Super Admin Email: admin@mail.com password: 123
Teacher Email:ogrimes@example.net password: 123
Student Email: janae49@example.net password: 123

important url
super admin login : http://localhost:3000/super_admin/login
Teacher login: http://localhost:3000/teacher/login
Student login: http://localhost:3000/student/login
Dahsboard: http://localhost:3000/dashboard

`;
