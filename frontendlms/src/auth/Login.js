import Button from "../common/Button";
import { Input } from "../common/Input";
import "./login.scss";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleSignIn = async (formdata) => {
    const cred = {
      username: formdata.email,
      password: formdata.password,
    };
    console.log(cred);
  };
  return (
    <section className="es-form-area section-center">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white m-auto  mb-0">Login</h2>
        </header>
        <div className="card-body">
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="es-form es-add-form"
          >
            <div className="row">
              <Input
                id={"email"}
                name={"email"}
                type={"email"}
                placeholder={"eg. xyz@teacher.nstu.bd"}
                label={"User's Email"}
                register={register}
                required="Input field can not be empty"
                // pattern={{
                //   value: /@\(teacher|student)\.nstu\.edu\.bd/,
                //   message: "Must be login with edu mail",
                // }}
                
                error={errors.email}
              />
              <Input
                id={"password"}
                name={"password"}
                type={"password"}
                placeholder={"User's Password"}
                label={"Password"}
                register={register}
                required="Input field can not be empty"
                maxLength={{
                  value: 10,
                  message: "Password will be less than 10 character",
                }}
                minLength={{
                  value: 4,
                  message: "Password will be more than 4 character",
                }}
                error={errors.password}
              />

              <Button label={"Login"} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
