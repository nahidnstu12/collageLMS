import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthConsumer from "../../hooks/useAuth";
import {
  studentMenuItems,
  teacherMenuItems,
  adminMenuItems,
} from "../../store/menuItems";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  const [inactive, setInactive] = useState(false);
  const { profile } = AuthConsumer();

  const menuItems = (role) =>
    role === "teacher"
      ? teacherMenuItems
      : role === "student"
      ? studentMenuItems
      : adminMenuItems;
  // console.log(menuItems(profile.role));

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    // props.onCollapse(inactive);
  }, [inactive]);

  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  //
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        //  console.log(next);
        //  console.log(el);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <aside id="sidebar" className="u-sidebar">
      <div className="u-sidebar-inner bg-gradient bdrs-30">
        <header className="u-sidebar-header">
          <Link to={"/"} className="u-sidebar-logo">
            <img
              className="img-fluid"
              src="assets/img/logo.png"
              width="124"
              alt="Stream Dashboard"
            />
          </Link>
        </header>

        <nav className="u-sidebar-nav">
          <ul className="u-sidebar-nav-menu u-sidebar-nav-menu--top-level">
            {menuItems(profile?.role).map((menuItem, index) => (
              <MenuItem
                key={index}
                name={menuItem.name}
                exact={`${menuItem.exact}`}
                to={menuItem.to}
                subMenus={menuItem.subMenus || []}
                iconClassName={menuItem.iconClassName}
                onClick={(e) => {
                  // console.log("click")
                  if (inactive) {
                    setInactive(false);
                  }
                }}
              />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
