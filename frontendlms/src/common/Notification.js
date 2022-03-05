export default function Notification({ label, home }) {
  return (
    !(home === "home") && (
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
              <h2 className="h4 card-header-title">{label}</h2>
              <a className="ml-auto" href="#">
                Clear all
              </a>
            </div>

            <div className="card-body p-0">
              <div className="list-group list-group-flush">
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
                <NotificationItem />
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
    )
  );
}

export const NotificationItem = () => {
  return (
    <a className="list-group-item list-group-item-action" href="#">
      <div className="media align-items-center">
        <div className="media-body">
          <div className="d-flex align-items-center">
            <h4 className="mb-1">Md Hasnat Riaz</h4>
            <small className="text-muted ml-auto">23 Jan 2022</small>
          </div>

          <p className="text-truncate mb-0" style={{ maxWidth: "250px" }}>
            {/* <span className="text-primary">@htmlstream</span> just liked your
              post! */}
            Your assignment is due tommorrow
          </p>
        </div>
      </div>
    </a>
  );
};
