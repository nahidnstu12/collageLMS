import { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthConsumer from "../hooks/useAuth";

export default function Profile({home}) {
  const history = useHistory();
  const { logout, profile } = AuthConsumer();
  const capitalize = (s) =>
    (s && s[0].toUpperCase() + s.slice(1).toLowerCase()) || "Test User";

  const logoutUser = () => {
    logout(() => history.push(`/${profile.role}/login`));
  };
  return (
    <div className="dropdown ml-2">
      <a
        className="link-muted d-flex align-items-center us-u-avatar-wrap"
        href="#!"
        role="button"
        id="dropdownMenuLink"
        aria-haspopup="true"
        aria-expanded="false"
        data-toggle="dropdown"
      >
        <img
          className="u-avatar--xs img-fluid rounded-circle mr-2 bg-gradient"
          src="/assets/img/avatars/img1.png"
          alt="User Profile"
        />
        {/* <span className="d-none d-sm-inline-block text-danger">
          <small className="fas fa-ellipsis-v"></small>
        </span> */}
      </a>

      <div
        className="dropdown-menu dropdown-menu-right border-0 py-0 mt-3"
        aria-labelledby="dropdownMenuLink"
        style={{ width: "260px" }}
      >
        <div className="card">
          <div className="card-header py-3">
            <div className="d-flex align-items-center">
              <span className="h4 text-muted text-uppercase mb-0">
                {profile?.name || "Test Name"}
              </span>

              <div className="ml-auto text-dark">
                {capitalize(profile?.role)}
              </div>
            </div>
          </div>

          <div className="card-body">
            {home === "home" ? (
              <ul className="list-unstyled mb-0">
                <ProfileItem
                  label={"Admin Login"}
                  icon={"fa-user-circle"}
                  onClick={() => history.push("/super_admin/login")}
                />
                <ProfileItem
                  label={"Teacher Login"}
                  icon={"fa-user-circle"}
                  onClick={() => history.push("/teacher/login")}
                />
                <ProfileItem
                  label={"Student Login"}
                  icon={"fa-user-circle"}
                  onClick={() => history.push("/student/login")}
                />
              </ul>
            ) : (
              <ul className="list-unstyled mb-0">
                <ProfileItem label={"Settings"} icon={"fa-list-alt"} />
                <ProfileItem label={"View Profile"} icon={"fa-user-circle"} />
                <ProfileItem
                  label={"Logout"}
                  icon={"fa-share-square"}
                  onClick={logoutUser}
                />
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProfileItem = ({ label, icon, onClick }) => {
  return (
    <li className="mb-4" onClick={onClick} style={{cursor:"pointer"}}>
      {/* <Link className="d-flex align-items-center link-dark" to="/student/login"> */}
      <span className="h3 mb-0">
        <i className={"far text-muted mr-3 " + icon}></i>
      </span>
      {label}
      {/* </Link> */}
    </li>
  );
};
