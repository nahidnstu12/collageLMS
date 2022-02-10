import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { getData } from "../hooks/axios";
import { yearTerm } from "../store/data";
import { Select } from "./Input";

export default function FilterBatch({ setStudents }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const submit = async (formData) => {
    console.log(formData);
    let url =
      formData.yt === "all"
        ? "/unverified/students"
        : `students/yt/${formData.yt}`;
    let res = await getData(url);
    res = res.filter((item) => item?.student_infos);
    setStudents(res);
    console.log(res);
  };
  return (
    <form className="es-form" onSubmit={handleSubmit(submit)}>
      <div className="row align-items-center">
        <Select
          label={"Year-Term"}
          id={"attendance"}
          name={"yt"}
          lists={yearTerm}
          register={register}
        />

        <div className="col">
          <button className="es-form-btn btn btn-block bg-gradient text-white">
            View
          </button>
        </div>
        <div className="col"></div>
      </div>
    </form>
  );
}
