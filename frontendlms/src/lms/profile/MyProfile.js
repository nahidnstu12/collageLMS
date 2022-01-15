import { Link } from "react-router-dom";

export const studentInfo = {
  type: "Student",
  name: "Mazharul Islam Nahid",
  currentYear: "Year 4 Term 2",
  roll: "ASH1701054M",
  sesseion: "2016-17",
  batch: "12th",
  email: "nahid@nstu.edu.com",
  phone: "0162176123",
  profileImg: "/assets/img/nahid-2.png",
  status: "Regular",
  creditCompleted: 140,
  address:"Noakhali",
};

export default function MyProfile() {
  return (
    <div>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">My Profile</h2>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="assets/img/breadcumb-dashboard.png" alt="" />
          </div>
        </div>
      </section>
      <section className="profile-area card">
        <div className="profile-content card-body d-flex">
          <div className="user-image-wrap mr-5">
            <img src={studentInfo.profileImg} alt="" />
          </div>
          <div className="user-about">
            <h2 className="text-danger">{studentInfo.name}</h2>
            <p>
              <strong>
                {studentInfo.roll} {"  |  "} {studentInfo.currentYear}
              </strong>
            </p>
            <h4 className="additonal-info">Additonal Information</h4>
            <p>Batch: {studentInfo.batch} batch</p>
            <p>Session: {studentInfo.sesseion} </p>
            <p>Credit Complete: {studentInfo.creditCompleted} </p>
            <br />
            <br />
            <p>Email: {studentInfo.email} </p>
            <p>Phone: {studentInfo.phone} </p>
            <p>Address: {studentInfo.address} </p>

            <br />
            <br />
            <Link className="btn btn-outline-danger pl-4 pr-4" to="/my-profile/edit">Edit</Link>
            {/* <a href="" className="btn btn-outline-danger pl-4 pr-4">
              Edit
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
