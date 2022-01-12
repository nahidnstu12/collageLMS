import { Link } from "react-router-dom";

export default function Homelist() {
    return (
      <div>
        Home Page
        <div className="d-flex justify-content-around flex-wrap">
          <Link to={"/dashboard"}>Dashboard</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
    );
}
