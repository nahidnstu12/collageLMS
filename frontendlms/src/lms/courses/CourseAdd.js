import { Input, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { yearTerm } from "../../store/data";
import { teacherlists } from "../../hooks/lib";
import { useEffect, useState } from "react";
import { getData, postData, putData } from "../../hooks/axios";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function CoureseAdd(props) {
  // const [placeholdar, setPlaceholder] = useState("Image File");
  const [lists, setLists] = useState([]);
  const [course, setCourse] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const courseObj = {
    course_code: "",
    course_title: "",
    credit_hour: "",
    course_description: "",
    yt: "",
    teacher_id: "",
  };
  const isAddMode = !id;
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
  });
  // react hook form submit data
  const submit = async (formdata) => {
    console.log(formdata);

    return isAddMode ? createCourse(formdata) : updateCourse(id, formdata);
  };
  /**
   * Create a course
   * @param {object} data
   */
  async function createCourse(data) {
    try {
      setLoading(true);
      console.log(loading);
      const res = await postData("/courses", data);
      console.log(data);
      toast.success(res.msg);
      // toast.success("success");
      reset({ ...courseObj });
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.error);
      setLoading(false);
    }
  }
  /**
   * Update a course
   * @param {string} id
   * @param {object} data
   */
  async function updateCourse(id, data) {
    try {
      setLoading(true);
      const res = await putData(`/courses/${id}`, data);
      console.log(data);
      toast.success(res.msg);
      reset({ ...courseObj });
      setLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.error);
      setLoading(false);
    }
  }
  // form data feed
  useEffect(() => {
    const fillFormData = async () => {
      const fields = [
        "course_code",
        "course_title",
        "credit_hour",
        "course_description",
        "yt",
        "teacher_id",
      ];
      if (!isAddMode) {
        // get user and set form fields
        try {
          const res = await getData(`/courses/${id}`);
          fields.forEach((field) => setValue(field, res[field]));
          setCourse(res);
          console.log(res);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          fields.forEach((field) => setValue(field, ""));
          setCourse({});
        } catch (err) {
          console.log(err);
        }
      }
    };
    fillFormData();
  }, [isAddMode]);

  useEffect(() => {
    const getTeacher = async () => {
      const data = await teacherlists();
      setLists(data);
      console.log(data);
    };
    getTeacher();
  }, [isAddMode]);

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
                <button
                  disabled={loading}
                  className="btn btn-danger btn-block bg-gradient border-0 text-white"
                  type="submit"
                >
                  {isAddMode
                    ? `Add${loading ? "ing" : ""} New Course`
                    : `Edit${loading ? "ing" : ""} Course`}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
