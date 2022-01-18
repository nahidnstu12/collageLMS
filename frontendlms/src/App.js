import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./lms/Dashboard";
import Homelist from "./Homelist";
import Login from "./auth/Login";
import Layout from "./lms/layout/Layout";
import AddStudent from "./lms/student/AddStudent";
import AttendanceList from "./lms/attendance/AttendanceList";
import AttendanceReport from "./lms/attendance/AttendanceReport";
import FullRoutine from "./lms/routine/FullRoutine";
import Todays from "./lms/routine/Todays";
import AddMarks from "./lms/marks/AddMarks";
import MarkSheet from "./lms/marks/MarkSheet";
import MyProfile from "./lms/profile/MyProfile";
import EditProfile from "./lms/profile/EditProfile";
import AddTeacher from "./lms/teacher/AddTeacher";
import TeacherDetails from "./lms/teacher/TeacherDetails";
import TeacherList from "./lms/teacher/TeacherList";
import StudentList from "./lms/student/StudentList";
import ForgetPass from "./auth/ForgetPass";
import StudentDetails from "./lms/student/StudentDetails";
import PrivateRoute from "./hooks/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        {/* auth */}

        <Route path={`/login`} exact component={Login} />

        <Route path={`/forget-pass`} exact component={ForgetPass} />

        <Layout>
          <Switch>
            {/* dashboard */}
            <PrivateRoute path={`/dashboard`} exact>
              <Dashboard />
            </PrivateRoute>

            {/* attendance */}
            <PrivateRoute
              path={`/attendance/lists`}
              exact
              component={AttendanceList}
            />
            <PrivateRoute
              path={`/attendance/reports`}
              exact
              component={AttendanceReport}
            />

            {/* routine */}
            <PrivateRoute
              path={`/routine/full`}
              exact
              component={FullRoutine}
            />
            <PrivateRoute path={`/routine/todays`} exact component={Todays} />
            {/* marks */}
            <PrivateRoute path={`/marks`} exact component={MarkSheet} />
            <PrivateRoute path={`/marks/add`} exact component={AddMarks} />
            {/* teacher */}
            <PrivateRoute
              path={`/teacher/lists`}
              exact
              component={TeacherList}
            />
            <PrivateRoute
              path={`/teacher/:id`}
              exact
              component={TeacherDetails}
            />
            <PrivateRoute path={`/teacher/add`} exact component={AddTeacher} />
            {/* student */}
            <PrivateRoute
              path={`/student/lists`}
              exact
              component={StudentList}
            />
            <PrivateRoute path={`/student/add`} exact component={AddStudent} />
            <PrivateRoute path={`/student/:id`} component={StudentDetails} />

            {/* profile */}
            <PrivateRoute path={`/my-profile`} exact component={MyProfile} />
            <PrivateRoute
              path={`/my-profile/edit`}
              exact
              component={EditProfile}
            />

            <Route path={`/`}>
              <Homelist />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
