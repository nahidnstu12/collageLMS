import Header from "./lms/layout/Header";

export default function Homelist() {
  return (
    <div>
      <Header home={"home"} />

      <main className="u-main" role="main" style={{padding:"0 6rem"}}>
        <div className="u-content">
          <div className="u-body">
            <section className="es-form-area section-center">
              <div className="card">
                <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
                  <h2 className="text-white m-auto  mb-0">User Manual</h2>
                </header>
                <div className="card-body">
                  <div className="row" style={{ padding: "1rem" }}>
                    <div className="co">{userManual.des}</div>

                    <br />
                    <br />
                    <div className="col">
                      <div className="row">
                        <p>Abaialble features are:</p>

                        <ul>
                          {userManual.features.map((itm, i) => (
                            <li key={i}>{itm}</li>
                          ))}
                        </ul>
                        <p>Working features are:</p><br/>

                        <ul>
                          {userManual.workingFeature.map((itm, i) => (
                            <li key={i}>{itm}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="col">
                      <p>Given Credentials:</p>

                      <ul>
                        {userManual.cred.map((itm, i) => (
                          <li key={i}>{itm}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="col">
                      <p>important url: </p>

                      <ul>
                        {userManual.routes.map((itm, i) => (
                          <li key={i}>{itm}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <h2>Some Website Snippets</h2>
                  <div className="row">
                    {siteImgArray.map((item) => (
                      <SiteImg imgUrl={item.imgUrl} label={item.label} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
const siteImgArray = [
  { imgUrl: "admin login.png", label: "Admin Login" },
  { imgUrl: "admin dashboard.png", label: "Admin Dahboard" },
  { imgUrl: "course lists.png", label: "Course Lists" },
  { imgUrl: "course add.png", label: "Course Add" },
  { imgUrl: "course edit.png", label: "Course Edit" },
  { imgUrl: "student list.png", label: "Student Lists" },
  { imgUrl: "verified student list.png", label: "Verified Student Lists" },
  { imgUrl: "teacher lists.png", label: "Teacher Lists" },
  { imgUrl: "student profile.png", label: "Student Profile" },
];

const SiteImg = ({ imgUrl, label }) => {
  return (
    <div className="col-4">
      <img src={`/siteIMG/${imgUrl}`} alt="site img" className="site-img" />
      <label className="img-label">{label}</label>
    </div>
  );
};

const userManual = {
  des: "This is CollageLMS where we can manage students, teacher and course materials. This software have managed three roles. 1) Super Admin 2) Student 3) Teacher.  These three types of user can login different interface.",
  features: [
    "User Specific Dashboard",
    "Course Add/Edit/Single View",
    "Student Management",
    "Teacher Management",
    "Profile Management",
    "Routine Management",
    "Attendance Mangement",
    "Marks Management",
  ],
  workingFeature: [
    "Routine Management",
    "User Specific Dashboard",
    "Chart for specific domain",
    "Attendance Mangement",
    "Marks Management",
  ],
  cred: [
    "Super Admin Email: admin@mail.com password: 123",
    "Teacher Email: ogrimes@example.net password: 123",
    "Student Email: janae49@example.net password: 123",
  ],
  routes: [
    "super admin login : http://localhost:3000/super_admin/login",
    "Teacher login: http://localhost:3000/teacher/login",
    "Student login: http://localhost:3000/student/login",
    "Dahsboard: http://localhost:3000/dashboard",
  ],
};
