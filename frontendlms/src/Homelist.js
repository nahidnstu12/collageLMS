import { Link } from "react-router-dom";

export default function Homelist() {
    return (
      <div>
        Home Page
        <Link to={"/dashboard"}>Dashboard</Link>
        <Link to={"/login"}>Login</Link>
      </div>
    );
}
