import { Input, InputFile, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { batchLists, sessionLists, yearTerm } from "../../store/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, postData, patchData } from "../../hooks/axios";

export default function AddStudent() {
  const [placeholdar, setPlaceholder] = useState("Image File");
  const [lists, setLists] = useState([]);
  const [student, setStudent] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ mode: "all" });

  const { id } = useParams();
  const isAddMode = !id;

  const submit = async (formdata) => {
    console.log(formdata);
    const image = formdata.image[0].name;
    // console.log(image);
    return isAddMode ? createStudent(formdata) : updateStudent(id, formdata);
  };

  async function createStudent(data) {
    try {
      // const res = await postData("/student", data);
      // console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function updateStudent(id, data) {
    try {
      const res = await patchData(`/student/${id}`, data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(async () => {
    if (!isAddMode) {
      // get user and set form fields
      try {
        const res = await getData(`/student/${id}`);
        const fields = [
          "full_name",
          "student_infos.s_id",
          "email",
          "phone",
          "student_infos.designation",
          "address",
          "image",
        ];
        fields.forEach((field) => setValue(field, res[field]));
        setStudent(res);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <section className="es-form-area">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white mb-0">Add New Student</h2>
        </header>
        <div className="card-body">
          <form className="es-form es-add-form" onSubmit={handleSubmit(submit)}>
            <div className="row">
              <Input
                id={"name"}
                name={"full_name"}
                type={"text"}
                placeholder={"eg. Mazharul Islam"}
                label={"Student's Name"}
                register={register}
                required="Input field can not be empty"
                error={errors.name}
              />
              <Input
                id={"sid"}
                name={"student_infos.s_id"}
                type={"text"}
                placeholder={"eg. 1701054"}
                label={"Student's ID"}
                register={register}
                required="Input field can not be empty"
                error={errors.sid}
              />
              <Input
                id={"email"}
                name={"email"}
                type={"email"}
                placeholder={"eg. mazhar@student.nstu.edu.bd"}
                label={"Student's Email"}
                register={register}
                required="Input field can not be empty"
                error={errors.email}
              />
              <Input
                id={"phone"}
                name={"phone"}
                type={"text"}
                placeholder={"eg. 1701054"}
                label={"Student's Phone"}
                register={register}
                required="Input field can not be empty"
                error={errors.phone}
              />
              <Select
                id={"session"}
                name={"student_infos.session"}
                full={true}
                lists={sessionLists}
                label={"Student's Session"}
                register={register}
                required="Input field can not be empty"
                error={errors.session}
              />
              <Select
                id={"batch"}
                name={"student_infos.batch"}
                lists={batchLists}
                label={"Student's batch"}
                register={register}
                required="Input field can not be empty"
                error={errors.batch}
                full={true}
              />
              <Select
                id={"batch"}
                name={"student_infos.yt"}
                lists={yearTerm}
                label={"Student's Year Term"}
                register={register}
                required="Input field can not be empty"
                error={errors.batch}
                full={true}
              />
              <Input
                id={"address"}
                name={"address"}
                type={"text"}
                placeholder={"eg. Noakhali"}
                label={"Student's Address"}
                register={register}
                required="Input field can not be empty"
                error={errors.address}
              />
              <InputFile
                id={"customFile"}
                name={"image"}
                type={"file"}
                placeholder={placeholdar}
                label={"Student's Image"}
                register={register}
                value={placeholdar}
                required="Input field can not be empty"
                error={errors.image}
                onChange={(e) => setPlaceholder(e.target.value)}
              />

              <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
                <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
