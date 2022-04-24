import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getData } from "../../hooks/axios";
import AuthConsumer from "../../hooks/useAuth";

export const studentInfo = {
  type: "Student",
  name: "Mazharul Islam Nahid",
  currentYear: "Year 4 Term 2",
  roll: "ASH1701054M",
  sesseion: "2016-17",
  batch: "12th",
  email: "nahid@nstu.edu.com",
  phone: "0162176123",
  profileImg: "/dummy-profile.png",
  status: "Regular",
  creditCompleted: 140,
  address: "Noakhali",
};
export const adminInfo = {
  type: "Admin",
  name: "Dalim Mia",
  email: "hannan@nstu.edu.com",
  phone: "0162176123",
  profileImg: "/dummy-profile.png",
  address: "DHK",
  designation: "OFFICE STAFF",
};

export default function MyProfile() {
  const [user, setProfile] = useState({});
  // const [profileType, setProfileType] = useState();
  const { profile } = AuthConsumer();
  console.log(profile?.role);

  useEffect(async () => {
    const { profile } = await getData("/profile");
    setProfile(profile);
    console.log(profile);
    //  console.log(profile.full_name);
  }, []);

  const profileType =
    profile?.role === "super_admin" ? (
      <AdminProfile user={user} adminInfo={adminInfo} />
    ) : profile?.role === "teacher" ? (
      <TeacherProfile user={user} />
    ) : (
      <StudentProfile user={user} studentInfo={studentInfo} />
    );

  // console.log({ profileType, role: profile?.role });
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
            <img src={user?.image } alt="" />
          </div>
          <div className="user-about">
            <h2 className="text-danger">
              {user?.full_name }
            </h2>

            {profileType}
            <br />
            <br />
            <p>Email: {user?.email } </p>
            <p>Phone: {user?.phone || studentInfo.phone} </p>
            <p>Address: {studentInfo.address} </p>

            <br />
            <br />
            <Link
              className="btn btn-outline-danger pl-4 pr-4"
              to="/my-profile/edit"
            >
              Edit
            </Link>
            {/* <a href="" className="btn btn-outline-danger pl-4 pr-4">
              Edit
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
const StudentProfile = ({ studentInfo }) => {
  const [user, setProfile] = useState({});
  useEffect(async () => {
    const data = await getData("/students");
    console.log(data);
    setProfile(data);
  }, []);
  return (
    <>
      <p>
        <strong>
          {user?.student_infos?.s_id } {"  |  "}{" "}
          {user?.student_infos?.yt }
        </strong>
      </p>
      <h4 className="additonal-info">Additonal Information</h4>
      <p>Batch: {user?.student_infos?.batch } batch</p>
      <p>Session: {user?.student_infos?.session } </p>
    </>
  );
};
const TeacherProfile = ({ user }) => {
  return (
    <>
      <p>
        <strong>
          {user?.t_id} {"  |  "} {user?.designation}
        </strong>
      </p>
      <h4 className="additonal-info">Additonal Information</h4>
      <p>Full Name: {user?.teacher?.full_name} </p>
      <p>Designation: {user?.designation} </p>
    </>
  );
};
const AdminProfile = ({ adminInfo }) => {
  return (
    <>
      <p>
        <strong>
          {adminInfo?.type} {"  |  "} {adminInfo?.designation}
        </strong>
      </p>
      <h4 className="additonal-info">Additonal Information</h4>
      <p>Full Name: {adminInfo?.name} </p>
      <p>Designation: {adminInfo?.designation} </p>
    </>
  );
};
