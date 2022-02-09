import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import AuthConsumer from "../../hooks/useAuth";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { profile } = AuthConsumer();
  const history = useHistory();
  const [role, setRole] = useState(profile?.role);
  const publicRoute = [
    "/forget-pass",
    "/login",
    "/teacher/login",
    "/student/login",
    "/super_admin/login",
  ];
  const routing = publicRoute.find((p) => p === pathname);

  useEffect(() => {
    if (profile?.role === undefined) {
      // history?.push(`/${role}/login`);
      // history?.push(`/student/login`);
    }
  }, []);
  return routing ? (
    <></>
  ) : (
    <div>
      <Header />
      <main className="u-main" role="main">
        <Sidebar />
        <div className="u-content">
          <div className="u-body">{children}</div>
        </div>
      </main>
    </div>
  );
}
