import Button from "../common/Button";
import { Input } from "../common/Input";
import "./login.scss";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthConsumer from "../hooks/useAuth";
import { postData } from "../hooks/axios";
import Cookies from "js-cookie";

export default function Login() {
  const location = useLocation();
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  const { authed, login } = AuthConsumer();
  // console.log({ authed });

  const handleSignIn = async (formdata) => {
    const cred = {
      email: formdata.email,
      password: formdata.password,
    };
    const data = await postData("/student-login", cred);
    console.log(data);

    // save cookie
    Cookies.set("login-token", data.token, { expires: 1 });
    // redirect private route
    if (data.token) {
      login().then(() => {
        const { from } = location.state || { from: { pathname: "/dashboard" } };
        history.replace(from);
      });
    }
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
                  value: 3,
                  message: "Password will be more than 3 character",
                }}
                error={errors.password}
              />

              <Button label={"Login"} />
              <Link to={"/forget-pass"} className="forget-pass">
                <span>Forget password</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
