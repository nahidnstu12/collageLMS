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
function App() {
  // const [cool,setCool] = useState(false)
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            {/* dashboard */}
            <Route path={`/dashboard`} exact>
              <Dashboard />
            </Route>
            {/* auth */}
            <Route path={`/login`} exact>
              <Login />
            </Route>
            <Route path={`/forget-pass`} exact component={ForgetPass} />

            {/* attendance */}
            <Route
              path={`/attendance/lists`}
              exact
              component={AttendanceList}
            />
            <Route
              path={`/attendance/reports`}
              exact
              component={AttendanceReport}
            />

            {/* routine */}
            <Route path={`/routine`} exact component={FullRoutine} />
            <Route path={`/routine/todays`} exact component={Todays} />
            {/* marks */}
            <Route path={`/marks`} exact component={MarkSheet} />
            <Route path={`/marks/add`} exact component={AddMarks} />
            {/* teacher */}
            <Route path={`/teacher/lists`} exact component={TeacherList} />
            <Route path={`/teacher/:id`} exact component={TeacherDetails} />
            <Route path={`/teacher/add`} exact component={AddTeacher} />
            {/* student */}
            <Route path={`/student/lists`} exact component={StudentList} />
            <Route path={`/student/:id`} exact component={StudentDetails} />
            <Route path={`/student/add`} exact component={AddStudent} />
            {/* profile */}
            <Route path={`/my-profile`} exact component={MyProfile} />
            <Route path={`/my-profile/edit`} exact component={EditProfile} />

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
