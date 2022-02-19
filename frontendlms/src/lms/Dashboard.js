import React, { useEffect, useState } from "react";

import AuthConsumer from "../hooks/useAuth";

export default function Dashboard() {
  const { authed, login, profile } = AuthConsumer();
  console.log(profile?.role);
  // console.log(Cookies.get("login-token-2"));

  return (
    <>
      <section className="breadcumb-area card bg-gradient mb-5">
        <div className="bread-cumb-content card-body d-flex align-items-center">
          <div className="breadcumb-heading">
            <h2 className="text-white">Dashboard</h2>
          </div>
          <div className="breadcumb-image ml-auto">
            <img src="assets/img/breadcumb-dashboard.png" alt="" />
          </div>
        </div>
      </section>
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="single-asset-counting-list-box bg-gradient bg-gradient-purple card border-0 text-center">
            <div className="card-body">
              <div className="single-asset-counting-list-image-wrap">
                <img src="assets/img/student.png" alt="" />
              </div>
              <h2 className="text-white mb-0">
                160 <small className="d-block mt-2">Students</small>
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-asset-counting-list-box bg-gradient bg-gradient-blue card border-0 text-center">
            <div className="card-body">
              <div className="single-asset-counting-list-image-wrap">
                <img src="assets/img/teacher.png" alt="" />
              </div>
              <h2 className="text-white mb-0">
                15 <small className="d-block mt-2">Teachers</small>
              </h2>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="single-asset-counting-list-box bg-gradient bg-gradient-yellow card border-0 text-center">
            <div className="card-body">
              <div className="single-asset-counting-list-image-wrap">
                <img src="assets/img/staff.png" alt="" />
              </div>
              <h2 className="text-white mb-0">
                10 <small className="d-block mt-2">Staff</small>
              </h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="single-asset-counting-list-box bg-gradient bg-gradient-green card border-0 text-center">
            <div className="card-body">
              <div className="single-asset-counting-list-image-wrap">
                <img src="assets/img/parent.png" alt="" />
              </div>
              <h2 className="text-white mb-0">
                1 <small className="d-block mt-2">Super Admin</small>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
