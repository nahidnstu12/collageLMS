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
import CourseList from "./lms/courses/CourseList";
import CourseAdd from "./lms/courses/CourseAdd";
import CourseDetails from "./lms/courses/CourseDetails";
import TeacherLogin from "./auth/TeacherLogin";
import StudentLogin from "./auth/StudentLogin";
import AdminLogin from "./auth/AdminLogin";
import AuthConsumer from "./hooks/useAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { profile } = AuthConsumer();
  return (
    <div className="App">
      <Router>
        {/* auth */}

        <Route path={`/login`} exact component={Login} />
        {/* teacherlogin */}
        <Route path={`/teacher/login`} exact component={TeacherLogin} />
        <Route path={`/student/login`} exact component={StudentLogin} />
        <Route path={`/super_admin/login`} exact component={AdminLogin} />

        <Route path={`/forget-pass`} exact component={ForgetPass} />

        <Layout>
          <Switch>
            {/* dashboard */}
            <PrivateRoute path={`/dashboard`} exact>
              <Dashboard />
            </PrivateRoute>

            {/* course */}
            <PrivateRoute path={`/course/lists`} exact>
              <CourseList role={profile?.role} />
            </PrivateRoute>
            <PrivateRoute path={`/course/add`} exact>
              <CourseAdd />
            </PrivateRoute>
            <PrivateRoute path={`/course/edit/:id`} exact>
              <CourseAdd />
            </PrivateRoute>
            <PrivateRoute path={`/course/:id`}>
              <CourseDetails />
            </PrivateRoute>

            {/* attendance */}
            <PrivateRoute path={`/attendance/lists`} exact>
              <AttendanceList />
            </PrivateRoute>
            <PrivateRoute path={`/attendance/reports`} exact>
              <AttendanceReport />
            </PrivateRoute>

            {/* routine */}
            <PrivateRoute path={`/routine/full`} exact>
              <FullRoutine />
            </PrivateRoute>
            <PrivateRoute path={`/routine/todays`} exact>
              <Todays />
            </PrivateRoute>

            {/* marks */}
            <PrivateRoute path={`/marks`} exact>
              <MarkSheet role={profile?.role} />
            </PrivateRoute>
            <PrivateRoute path={`/marks/add`} exact>
              <AddMarks />
            </PrivateRoute>

            {/* teacher */}
            <PrivateRoute path={`/teacher/lists`} exact>
              <TeacherList />
            </PrivateRoute>
            <PrivateRoute path={`/teacher/add`} exact>
              <AddTeacher />
            </PrivateRoute>
            <PrivateRoute path={`/teacher/edit/:id`} exact>
              <AddTeacher />
            </PrivateRoute>
            <PrivateRoute path={`/teacher/:id`} exact>
              <TeacherDetails />
            </PrivateRoute>

            {/* student */}
            <PrivateRoute path={`/student/lists`} exact>
              <StudentList />
            </PrivateRoute>
            <PrivateRoute path={`/student/verified`} exact>
              <StudentList />
            </PrivateRoute>

            <PrivateRoute path={`/student/add`} exact>
              <AddStudent />
            </PrivateRoute>
            <PrivateRoute path={`/student/edit/:id`} exact>
              <AddStudent />
            </PrivateRoute>
            <PrivateRoute path={`/student/:id`}>
              <StudentDetails />
            </PrivateRoute>
            {/* profile */}
            <PrivateRoute path={`/my-profile`} exact>
              <MyProfile />
            </PrivateRoute>
            <PrivateRoute path={`/my-profile/edit`} exact>
              <EditProfile />
            </PrivateRoute>
          </Switch>
          {/* toast */}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            // rtl={false}
            // pauseOnFocusLoss
            draggable
            // pauseOnHover
            toastStyle={{
              backgroundColor: "#333",
              color: "#eee",
            }}
            progressClassName="toastProgress"
          />
        </Layout>
        <Route path={`/`} exact>
          <Homelist />
        </Route>
      </Router>
    </div>
  );
}

export default App;


