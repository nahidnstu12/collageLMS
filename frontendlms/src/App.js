import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./lms/Dashboard";
import Homelist from "./Homelist";
import Login from "./auth/Login";
function App() {
  // const [cool,setCool] = useState(false)
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={`/dashboard`}>
            <Dashboard />
          </Route>
          <Route path={`/login`}>
            <Login />
          </Route>

          <Route path={`/`}>
            <Homelist />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
