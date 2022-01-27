import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function PrivateRoute(props) {
  const location = useLocation();

  const { authed } = useAuth();
  // console.log({ authed });
  
  return authed ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: location },
      }}
    />
  );
}
