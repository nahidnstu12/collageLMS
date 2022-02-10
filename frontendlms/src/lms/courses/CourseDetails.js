import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../hooks/axios";
export const courseInfo = {
  course_code: "CSTE41444c",
  teacher_id: 4,
  course_title: "Computer Fundamentals",
  credit_hour: "3",
  yt: "Y2-T1",
  profile_img: "/dummy-course.jpg",
  course_description:
    "Numquam quo ut ea repudiandae blanditiis. Fuga voluptas iusto eum. Omnis maxime dignissimos eos quia.",

  teacher: {
    full_name: "Super User",
  },
};
export default function CourseDetails() {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  useEffect(async () => {
    const res = await getData(`/courses/${id}`);
    setCourse(res);
    console.log(res);
  }, []);
  // console.log(courseInfo.course_code);
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
            <img src={courseInfo.profile_img} alt="" />
          </div>
          <div className="user-about">
            <h2 className="text-danger">
              {course?.course_code || courseInfo.course_code}
            </h2>
            <p>
              <strong>
                {courseInfo.course_title} {"  |  "} {courseInfo.credit_hour}
              </strong>
            </p>
            <h4 className="additonal-info">Additonal Information</h4>
            <p>Course Title: {courseInfo.course_title} </p>
            <p>Course Description: {courseInfo.course_description} </p>
            <p>Credit Hour: {courseInfo.credit_hour} </p>
            <p>Year Term: {courseInfo.yt} </p>
            <p>Assigned Teacher: {courseInfo.teacher.full_name} </p>
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
