import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
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
