import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../hooks/axios";
import { studentInfo } from "../profile/MyProfile";

export default function TeacherDetails() {
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    const res = await getData(`/teachers/${id}`);
    setUser(res[0]);
    console.log(res);
  }, []);
  return (
    <div>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            {/* <h2 className="text-white">My Profile</h2> */}
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="assets/img/breadcumb-dashboard.png" alt="" />
          </div>
        </div>
      </section>
      <section className="profile-area card">
        <div className="profile-content card-body d-flex">
          <div className="user-image-wrap mr-5">
            <img src={user?.teacher?.image || studentInfo.profileImg} alt="" />
          </div>
          <div className="user-about">
            <h2 className="text-danger">
              {user?.teacher?.full_name || studentInfo.name}
            </h2>
            <p>
              <strong>
                {user?.t_id} {"  |  "} {user?.designation}
              </strong>
            </p>
            <h4 className="additonal-info">Additonal Information</h4>
            <p>Full Name: {user?.teacher?.full_name} </p>
            <p>Designation: {user?.designation} </p>
            {/* <p>Email: {user?.teacher?.email} </p> */}
            <br />
            <br />
            <p>Email: {user?.teacher?.email || studentInfo.email} </p>
            <p>Phone: {user?.teacher?.phone || studentInfo.phone} </p>
            <p>Address: {user?.teacher?.address || studentInfo.address} </p>

            <br />
            <br />

            {/* <a href="" className="btn btn-outline-danger pl-4 pr-4">
              Edit
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
