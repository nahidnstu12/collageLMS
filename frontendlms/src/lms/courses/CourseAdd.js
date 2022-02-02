import { Input, Select } from "../../common/Input";
import { useForm } from "react-hook-form";
import { teacherLists, yearTerm } from "../../store/data";

export default function CoureseAdd() {
  // const [placeholdar, setPlaceholder] = useState("Image File");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const submit = async (formdata) => {
    console.log(formdata);
   
  };
  // const onChangeHandler = (e) => {
  //   e.preventDeafault();
  //   // setPlaceholder(e.target)
  //   console.log(e.target);
  //   console.log("object");
  // };
  return (
    <section className="es-form-area">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white mb-0">Add New Course</h2>
        </header>
        <div className="card-body">
          <form className="es-form es-add-form" onSubmit={handleSubmit(submit)}>
            <div className="row">
              <Input
                id={"cid"}
                name={"cid"}
                type={"text"}
                placeholder={"eg. CSTE1101"}
                label={"Course Code"}
                register={register}
                required="Input field can not be empty"
                error={errors.cid}
              />
              <Input
                id={"ctitle"}
                name={"ctitle"}
                type={"text"}
                placeholder={"eg. Computer Fundamentals"}
                label={"Course Title"}
                register={register}
                required="Input field can not be empty"
                error={errors.ctitle}
              />
              <Input
                id={"credit"}
                name={"credit"}
                type={"number"}
                placeholder={"eg. 3"}
                label={"Credit Hour"}
                register={register}
                required="Input field can not be empty"
                error={errors.credit}
              />
              <Input
                id={"cdescription"}
                name={"cdescription"}
                type={"text"}
                placeholder={"eg. "}
                label={"Course Description"}
                register={register}
                required="Input field can not be empty"
                error={errors.cdescription}
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
                name={"assignee"}
                full={true}
                lists={teacherLists}
                label={"Assigned Teacher"}
                register={register}
                required="Input field can not be empty"
                error={errors.assignee}
              />

              <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
                <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
                  Add Course
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
