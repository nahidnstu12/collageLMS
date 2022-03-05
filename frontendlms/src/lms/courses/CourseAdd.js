import { Input, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { teacherLists, yearTerm } from "../../store/data";
import { teacherlists } from "../../hooks/lib";
import { useEffect, useMemo, useState } from "react";
import { getData, patchData, postData, putData } from "../../hooks/axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function CoureseAdd(props) {
  // const [placeholdar, setPlaceholder] = useState("Image File");
  const [lists, setLists] = useState([]);
  const [course, setCourse] = useState({});

  const { id } = useParams();
  // console.log(props);
  // console.log({ id });
  const isAddMode = !id;
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });
  // react hook form submit data
  const submit = async (formdata) => {
    console.log(formdata);
    // const data = await postData("/courses", formdata);
    // console.log(data);
    return isAddMode ? createCourse(formdata) : updateCourse(id, formdata);
  };
  async function createCourse(data) {
    try {
      const res = await postData("/courses", data);
      console.log(res);
      toast.success(res.msg);
    } catch (err) {
      console.log(err);
      toast.error(err.error);
    }
  }
  async function updateCourse(id, data) {
    try {
      const res = await putData(`/courses/${id}`, data);
      console.log(res);
      toast.success(res.msg);
    } catch (err) {
      console.log(err);
      toast.error(err.error);
    }
  }
  // form data feed
  useEffect(async () => {
    if (!isAddMode) {
      // get user and set form fields
      try {
        const res = await getData(`/courses/${id}`);
        const fields = [
          "course_code",
          "course_title",
          "credit_hour",
          "course_description",
          "yt",
          "teacher_id",
        ];
        fields.forEach((field) => setValue(field, res[field]));
        setCourse(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  useEffect(async () => {
    const data = await teacherlists();
    setLists(data);
    console.log(data);
  }, []);

  return (
    <section className="es-form-area">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white mb-0">
            {isAddMode ? "Add New Course" : "Edit Course"}
          </h2>
        </header>
        <div className="card-body">
          <form
            className="es-form es-add-form"
            onSubmit={handleSubmit(submit)}
            onReset={reset}
          >
            <div className="row">
              <Input
                id={"cid"}
                name={"course_code"}
                type={"text"}
                placeholder={"eg. CSTE1101"}
                label={"Course Code"}
                register={register}
                required="Input field can not be empty"
                error={errors.course_code}
              />
              <Input
                id={"ctitle"}
                name={"course_title"}
                type={"text"}
                placeholder={"eg. Computer Fundamentals"}
                label={"Course Title"}
                register={register}
                required="Input field can not be empty"
                error={errors.course_title}
              />
              <Input
                id={"credit"}
                name={"credit_hour"}
                type={"number"}
                placeholder={"eg. 3"}
                label={"Credit Hour"}
                register={register}
                required="Input field can not be empty"
                error={errors.credit_hour}
              />
              <Input
                id={"course_description"}
                name={"course_description"}
                type={"text"}
                placeholder={"eg. "}
                label={"Course Description"}
                register={register}
                required="Input field can not be empty"
                error={errors.course_description}
              />
              <Select
                id={"yt"}
                name={"yt"}
                full={true}
                lists={yearTerm}
                label={"Year Term"}
                register={register}
                required="Input field can not be empty"
                error={errors.yt}
              />

              <Select
                id={"assignee"}
                name={"teacher_id"}
                full={true}
                lists={lists}
                label={"Assigned Teacher"}
                register={register}
                required="Input field can not be empty"
                error={errors.teacher_id}
              />

              <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
                <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
                  {isAddMode ? "Add New Course" : "Edit Course"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
