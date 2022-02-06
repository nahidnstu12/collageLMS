import Button from "../common/Button";
import { Input } from "../common/Input";
import "./login.scss";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom"

export default function ForgetPass() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const handleSignIn = async (formdata) => {
    const cred = {
      username: formdata.email,
    };
    console.log(cred);
  };
  return (
    <section className="es-form-area forget-pass-container">
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white m-auto  mb-0">Forget Password</h2>
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
                error={errors.email}
              />

              <Button label={"Forget Password"} />
              <Link to={"/login"} className="forget-pass">
                <span>Login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
