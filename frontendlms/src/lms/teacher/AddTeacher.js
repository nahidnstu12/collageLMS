import { Input, InputFile, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { batchLists, designation, sessionLists } from "../../store/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, postData, patchData } from "../../hooks/axios";

export default function AddTeacher() {
  const [lists, setLists] = useState([]);
  const [teacher, setTeacher] = useState({});
  const [placeholdar, setPlaceholder] = useState("Image File");
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

    // const data = {
    //   ...formdata,
    //   teacher_infos: { t_id: formdata.t_id, designation: formdata.designation },
    // };
    // console.log(data);

    // return isAddMode ? createTeacher(formdata) : updateTeacher(id, formdata);
  };

  async function createTeacher(data) {
    try {
      const res = await postData("/teacher", data);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function updateTeacher(id, data) {
    try {
      const res = await patchData(`/teacher/${id}`, data);

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(async () => {
    if (!isAddMode) {
      // get user and set form fields
      try {
        // const res = await getData(`/teacher/${id}`);
        const fields = [
          "full_name",
          "teacher_infos.t_id",
          "email",
          "phone",
          "teacher_infos.designation",
          "address",
          "image",
        ];
        // fields.forEach((field) => setValue(field, res[field]));
        // setTeacher(res);
        // console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  return (
    <section className="es-form-area">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white mb-0">Add New Teacher</h2>
        </header>
        <div className="card-body">
          <form className="es-form es-add-form" onSubmit={handleSubmit(submit)}>
            <div className="row">
              <Input
                id={"name"}
                name={"full_name"}
                type={"text"}
                placeholder={"eg. Mazharul Islam"}
                label={"Teacher's Name"}
                register={register}
                required="Input field can not be empty"
                error={errors.name}
              />
              <Input
                id={"sid"}
                name={"teacher_infos.t_id"}
                type={"text"}
                placeholder={"eg. 1701054"}
                label={"Teacher's ID"}
                register={register}
                required="Input field can not be empty"
                error={errors.sid}
              />
              <Input
                id={"email"}
                name={"email"}
                type={"email"}
                placeholder={"eg. mazhar@student.nstu.edu.bd"}
                label={"Teacher's Email"}
                register={register}
                required="Input field can not be empty"
                error={errors.email}
              />
              <Input
                id={"phone"}
                name={"phone"}
                type={"text"}
                placeholder={"eg. 1701054"}
                label={"Teacher's Phone"}
                register={register}
                required="Input field can not be empty"
                error={errors.phone}
              />

              <Select
                id={"designation"}
                name={"teacher_infos.designation"}
                lists={designation}
                label={"Teacher's designation"}
                register={register}
                required="Input field can not be empty"
                error={errors.designation}
                full={true}
              />
              <Input
                id={"address"}
                name={"address"}
                type={"text"}
                placeholder={"eg. Noakhali"}
                label={"Teacher's Address"}
                register={register}
                required="Input field can not be empty"
                error={errors.address}
              />
              <InputFile
                id={"customFile"}
                name={"image"}
                type={"file"}
                placeholder={placeholdar}
                label={"Teacher's Image"}
                register={register}
                value={placeholdar}
                required="Input field can not be empty"
                error={errors.image}
                onChange={(e) => setPlaceholder(e.target.value)}
              />

              <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
                <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
                  Add Teacher
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
