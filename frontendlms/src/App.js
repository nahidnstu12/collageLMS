import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./lms/Dashboard";
import Homelist from "./Homelist";
import Login from "./auth/Login";
import Test2 from "./Test2";
import Layout from "./lms/layout/Layout";
import Student from "./lms/student/Student";
import AddStudent from "./lms/student/AddStudent";
import Test from "./lms/student/Test";
function App() {
  // const [cool,setCool] = useState(false)
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route path={`/dashboard`} exact>
              <Dashboard />
            </Route>
            <Route path={`/login`} exact>
              <Login />
            </Route>
            <Route
              path="/student"
              render={({ match: { url } }) => (
                <>
                  <Route path={`${url}/`} component={Student} exact />
                  <Route path={`${url}/add`} component={AddStudent} /> 
                  {/* <Route path={`${url}/test`} component={Test} />  */}
                </>
              )}
            />
            {/* <Route path={`/student`} exact component={Student} />
            <Route path={`/student/add`} exact component={AddStudent} /> */}

            <Route path={`/test`} exact>
              <Test2 />
            </Route>

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
