import { Input, InputFile, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { batchLists, sessionLists } from "../../store/data";
import { useState } from "react";

export default function AddStudent() {
  const [placeholdar,setPlaceholder]=useState("Image File")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const submit = async (formdata) => {
    console.log(formdata);
    const image = formdata.image[0].name;
    console.log(image);
  };
  console.log(placeholdar)
  const onChangeHandler=(e)=>{
    e.preventDeafault();
    // setPlaceholder(e.target)
    console.log(e.target)
    console.log("object")

  }
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
                name={"name"}
                type={"text"}
                placeholder={"eg. Mazharul Islam"}
                label={"Student's Name"}
                register={register}
                required="Input field can not be empty"
                error={errors.name}
              />
              <Input
                id={"sid"}
                name={"sid"}
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
                onChange={e=>setPlaceholder(e.target.value)}
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
