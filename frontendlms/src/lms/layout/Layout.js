import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const { pathname } = useLocation();
  
  const publicRoute = [
    "/forget-pass",
    "/login",
    "/teacher/login",
    "/student/login",
    "/admin/login",
  ];
  const routing = publicRoute.find((p) => p === pathname);
  // const routing = undefined;
  // console.log({ pathname,  routing });
  return routing  ? (
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
