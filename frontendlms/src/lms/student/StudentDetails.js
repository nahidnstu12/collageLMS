import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../common/Spinner";
import { getData } from "../../hooks/axios";
import { studentInfo } from "../profile/MyProfile";
export default function StudentDetails() {
  const [user, setUser] = useState({});
  const {id} = useParams()
  useEffect(async () => {
    const res = await getData(`/students/${id}`);
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
            <img src={user?.image || studentInfo.profileImg} alt="" />
          </div>
          <div className="user-about">
            <h2 className="text-danger">
              {user?.full_name || studentInfo.name}
            </h2>
            <p>
              <strong>
                {user?.student_infos?.s_id || studentInfo.roll} {"  |  "}{" "}
                {user?.student_infos?.yt || studentInfo.currentYear}
              </strong>
            </p>
            <h4 className="additonal-info">Additonal Information</h4>
            <p>Batch: {user?.student_infos?.batch || studentInfo.batch} batch</p>
            <p>
              Session: {user?.student_infos?.session || studentInfo.sesseion}{" "}
            </p>
            {/* <p>Credit Complete: {studentInfo.creditCompleted} </p> */}
            <br />
            <br />
            <p>Email: {user?.email || studentInfo.email} </p>
            <p>Phone: {user?.phone || studentInfo.phone} </p>
            <p>Address: {user?.address || studentInfo.address} </p>

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
