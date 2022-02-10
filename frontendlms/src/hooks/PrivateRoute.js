import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
export default function PrivateRoute(props) {
  const location = useLocation();

  const { authed, profile } = useAuth();
  // console.log({ authed });

  return authed ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: `/${profile.role}/login`,
        state: { from: location },
      }}
    />
  );
}
