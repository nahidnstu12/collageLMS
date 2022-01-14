import { Link, NavLink } from "react-router-dom";

const MenuItem = (props) => {
  const { name, subMenus, iconClassName, onClick, to, exact } = props;
  //   const [expand, setExpand] = useState(false);

  return (
    <li onClick={onClick} className="u-sidebar-nav-menu__item">
      <Link
        exact
        to={to}
        className={`menu-item u-sidebar-nav-menu__link`}
      >
        <div className="menu-icon">
          <i
            className={"fas u-sidebar-nav-menu__item-icon " + iconClassName}
          ></i>
        </div>
        <span className="u-sidebar-nav-menu__item-title">{name}</span>
      </Link>
      {subMenus && subMenus.length > 0 ? (
        <ul
          className={`sub-menu u-sidebar-nav-menu u-sidebar-nav-menu--second-level`}
        >
          {subMenus.map((menu, index) => (
            <li key={index} className="u-sidebar-nav-menu__item">
              <NavLink to={menu.to} className="u-sidebar-nav-menu__link">
                <span className="u-sidebar-nav-menu__item-title">
                  {menu.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};
export default MenuItem;
