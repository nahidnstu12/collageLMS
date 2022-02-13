import { Input, InputFile, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { batchLists, sessionLists, yearTerm } from "../../store/data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, postData, patchData, putData } from "../../hooks/axios";

export default function AddStudent() {
  const [placeholdar, setPlaceholder] = useState("Image File");
  const [lists, setLists] = useState([]);
  const [student, setStudent] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "all" });

  const { id } = useParams();
  const isAddMode = !id;
  // console.log(isAddMode);
  const submit = async (formdata) => {
    
    const { s_id, image, ...updateData } = formdata;
    // console.log(updateData);
    console.log(formdata);
    // console.log(image);
    return isAddMode ? createStudent(formdata) : updateStudent(id, updateData);
  };

  async function createStudent(data) {
    try {
      const res = await postData("/students", data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  async function updateStudent(id, data) {
    try {
      console.log(data);
      const res = await postData(`student/update/${id}`, data);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset({});
  //   }
  // }, [reset]);
  useEffect(async () => {
    if (!isAddMode) {
      // get user and set form fields
      try {
        const res = await getData(`/students/${id}`);
        let r = res[0].student_infos;
        let response = {
          ...res[0],
          s_id: r.s_id,
          session: r.session,
          batch: r.batch,
          yt: r.yt,
        };
        // response = response.student_infos;
        console.log(response);
        const fields = [
          "full_name",
          "s_id",
          "email",
          "phone",
          "session",
          "batch",
          "yt",
          "address",
          // "image",
        ];
        fields.forEach((field) => setValue(field, response[field]));
        setStudent(response);
        // console.log(res[0]);
      } catch (err) {
        console.log(err);
      }
    }
  }, [isAddMode]);

  return (
    <section className="es-form-area">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white mb-0">
            {isAddMode ? "Add New Student" : "Edit Student"}
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
                name={"s_id"}
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
                // required="Input field can not be empty"
                error={errors.phone}
              />
              <Select
                id={"session"}
                name={"session"}
                full={true}
                lists={sessionLists}
                label={"Student's Session"}
                register={register}
                required="Input field can not be empty"
                error={errors.session}
              />
              <Select
                id={"batch"}
                name={"batch"}
                lists={batchLists}
                label={"Student's batch"}
                register={register}
                required="Input field can not be empty"
                error={errors.batch}
                full={true}
              />
              <Select
                id={"yt"}
                name={"yt"}
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
                // required="Input field can not be empty"
                error={errors.address}
              />
              {/* <InputFile
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
              /> */}

              <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
                <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
                  {isAddMode ? "Add New Student" : "Edit Student"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
