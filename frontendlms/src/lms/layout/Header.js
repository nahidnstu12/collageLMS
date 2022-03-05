import Notification from "../../common/Notification";
import Profile from "../../common/Profile";

export default function Header({home}) {
  return (
    <header className="u-header">
      {/* logo */}
      <div className="u-header-left">
        <a className="u-header-logo" href="/">
          <img
            className="u-logo-desktop logo-header"
            src="/logo-full-1.png"
            width="160"
            alt="Stream Dashboard"
          />
          <img
            className="img-fluid u-logo-mobile logo-header"
            src="/logo.png"
            width="50"
            alt="Stream Dashboard"
          />
        </a>
      </div>
      {/* middle search */}
      <div className="u-header-middle">
        <a
          className="js-sidebar-invoker u-sidebar-invoker text-danger"
          href="#!"
          data-is-close-all-except-this="true"
          data-target="#sidebar"
        >
          <i className="fa fa-bars u-sidebar-invoker__icon--open"></i>
          <i className="fa fa-times u-sidebar-invoker__icon--close"></i>
        </a>

        <div
          className="u-header-search"
          data-search-mobile-invoker="#headerSearchMobileInvoker"
          data-search-target="#headerSearch"
        >
          <a
            id="headerSearchMobileInvoker"
            className="btn btn-link input-group-prepend u-header-search__mobile-invoker"
            href="#!"
          >
            <i className="fa fa-search"></i>
          </a>

          <div id="headerSearch" className="u-header-search-form">
            <form>
              <div className="input-group">
                <input
                  className="form-control u-header-search__field"
                  type="search"
                  placeholder="Search"
                />
                <button type="submit" className="bg-gradient text-white">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="u-header-right">
        {/* notification */}
        <Notification label={"Notification"} home={home}/>

        <Profile home={home}/>
      </div>
    </header>
  );
}
