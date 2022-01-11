import React from "react";
// import "./dasboard.css";

export default function Dashboard() {
  return (
    <header className="u-header">
      <div className="u-header-left">
        <a className="u-header-logo" href="index.html">
          <img
            className="u-logo-desktop"
            src="assets/img/logo.png"
            width="160"
            alt="Stream Dashboard"
          />
          <img
            className="img-fluid u-logo-mobile"
            src="assets/img/logo-mobile.png"
            width="50"
            alt="Stream Dashboard"
          />
        </a>
      </div>

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
        <div className="dropdown mr-4">
          <a
            className="text-danger"
            href="#!"
            role="button"
            id="dropdownMenuLink"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
          >
            <span className="h3">
              <i className="far fa-envelope"></i>
            </span>
            <span className="u-indicator u-indicator-top-right u-indicator--xxs bg-success"></span>
          </a>

          <div
            className="dropdown-menu dropdown-menu-right border-0 py-0 mt-4"
            aria-labelledby="dropdownMenuLink"
            style={{ width: "360px" }}
          >
            <div className="card">
              <div className="card-header d-flex align-items-center py-3">
                <h2 className="h4 card-header-title">Activities</h2>
                <a className="ml-auto" href="#">
                  Clear all
                </a>
              </div>

              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <img
                        className="u-avatar--sm rounded-circle mr-3"
                        src="assets/img/avatars/img1.png"
                        alt="Image description"
                      />

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Chad Cannon</h4>
                          <small className="text-muted ml-auto">
                            23 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: " 250px" }}
                        >
                          We've just done the project.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <img
                        className="u-avatar--sm rounded-circle mr-3"
                        src="assets/img/avatars/img2.jpg"
                        alt="Image description"
                      />

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Jane Ortega</h4>
                          <small className="text-muted ml-auto">
                            18 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          <span className="text-primary">@Bruce</span>{" "}
                          advertising your project is not good idea.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <img
                        className="u-avatar--sm rounded-circle mr-3"
                        src="assets/img/avatars/user-unknown.jpg"
                        alt="Image description"
                      />

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Stella Hoffman</h4>
                          <small className="text-muted ml-auto">
                            15 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          When the release date is expexted for the advacned
                          settings?
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <img
                        className="u-avatar--sm rounded-circle mr-3"
                        src="assets/img/avatars/img4.jpg"
                        alt="Image description"
                      />

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Htmlstream</h4>
                          <small className="text-muted ml-auto">
                            05 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          Adwords Keyword research for beginners
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card-footer py-3">
                <a className="btn btn-block btn-outline-primary" href="#">
                  View all activities
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown mr-3">
          <a
            className="text-danger"
            href="#!"
            role="button"
            id="dropdownMenuLink"
            aria-haspopup="true"
            aria-expanded="false"
            data-toggle="dropdown"
          >
            <span className="h3">
              <i className="far fa-bell"></i>
            </span>
            <span className="u-indicator u-indicator-top-right u-indicator--xxs bg-danger"></span>
          </a>

          <div
            className="dropdown-menu dropdown-menu-right border-0 py-0 mt-4"
            aria-labelledby="dropdownMenuLink"
            style={{ width: "360px" }}
          >
            <div className="card">
              <div className="card-header d-flex align-items-center py-3">
                <h2 className="h4 card-header-title">Notifications</h2>
                <a className="ml-auto" href="#">
                  Clear all
                </a>
              </div>

              <div className="card-body p-0">
                <div className="list-group list-group-flush">
                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <div className="u-icon u-icon--sm rounded-circle bg-danger text-white mr-3">
                        <i className="fab fa-dribbble"></i>
                      </div>

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Dribbble</h4>
                          <small className="text-muted ml-auto">
                            23 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          <span className="text-primary">@htmlstream</span> just
                          liked your post!
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <div className="u-icon u-icon--sm rounded-circle bg-info text-white mr-3">
                        <i className="fab fa-twitter"></i>
                      </div>

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Twitter</h4>
                          <small className="text-muted ml-auto">
                            18 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          Someone mentioned you on the tweet.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <div className="u-icon u-icon--sm rounded-circle bg-success text-white mr-3">
                        <i className="fab fa-spotify"></i>
                      </div>

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Spotify</h4>
                          <small className="text-muted ml-auto">
                            18 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          You've just recived $25 free gift card.
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="list-group-item list-group-item-action"
                    href="#"
                  >
                    <div className="media align-items-center">
                      <div className="u-icon u-icon--sm rounded-circle bg-info text-white mr-3">
                        <i className="fab fa-facebook-f"></i>
                      </div>

                      <div className="media-body">
                        <div className="d-flex align-items-center">
                          <h4 className="mb-1">Facebook</h4>
                          <small className="text-muted ml-auto">
                            18 Jan 2018
                          </small>
                        </div>

                        <p
                          className="text-truncate mb-0"
                          style={{ maxWidth: "250px" }}
                        >
                          <span className="text-primary">@htmlstream</span>{" "}
                          commented in your post.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="card-footer py-3">
                <a className="btn btn-block btn-outline-primary" href="#">
                  View all notifications
                </a>
              </div>
            </div>
          </div>
        </div>

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
              src="assets/img/avatars/img1.png"
              alt="User Profile"
            />
            <span className="d-none d-sm-inline-block text-danger">
              <small className="fas fa-ellipsis-v"></small>
            </span>
          </a>

          <div
            className="dropdown-menu dropdown-menu-right border-0 py-0 mt-3"
            aria-labelledby="dropdownMenuLink"
            style={{ width: "260px" }}
          >
            <div className="card">
              <div className="card-header py-3">
                <div className="d-flex align-items-center mb-3">
                  <span className="h6 text-muted text-uppercase mb-0">
                    Storage
                  </span>

                  <div className="ml-auto text-muted">
                    <strong className="text-dark">60gb</strong> / 100gb
                  </div>
                </div>

                <div className="progress" style={{ height: "4px" }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "65%" }}
                    aria-valuenow="65"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>

              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  <li className="mb-4">
                    <a
                      className="d-flex align-items-center link-dark"
                      href="#!"
                    >
                      <span className="h3 mb-0">
                        <i className="far fa-user-circle text-muted mr-3"></i>
                      </span>{" "}
                      View Profile
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="d-flex align-items-center link-dark"
                      href="#!"
                    >
                      <span className="h3 mb-0">
                        <i className="far fa-list-alt text-muted mr-3"></i>
                      </span>{" "}
                      Settings
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="d-flex align-items-center link-dark"
                      href="#!"
                    >
                      <span className="h3 mb-0">
                        <i className="far fa-laugh-wink text-muted mr-3"></i>
                      </span>{" "}
                      Invite your friends
                    </a>
                  </li>
                  <li>
                    <a
                      className="d-flex align-items-center link-dark"
                      href="#!"
                    >
                      <span className="h3 mb-0">
                        <i className="far fa-share-square text-muted mr-3"></i>
                      </span>{" "}
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
