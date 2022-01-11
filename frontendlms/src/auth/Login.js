import Button from "../common/Button";
import {Input,Select} from "../common/Input";
import "./login.scss";

export default function Login() {
  return (
    <section class="es-form-area section-center">
      <div class="card">
        <header class="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 class="text-white m-auto  mb-0">Login</h2>
        </header>
        <div class="card-body">
          <form action="" class="es-form es-add-form">
            <div class="row">
              <Input
                id={"name"}
                type={"email"}
                placeholder={"User's Mail"}
                label={"Teacher's Email"}
              />
              <Input
                id={"name"}
                type={"text"}
                placeholder={"Hasnat Riaz"}
                label={"Teacher's Name"}
              />
              <div class="col-lg-8 offset-lg-2 col-md-12 mb-4">
                <label for="description">Description</label>
                <input id="description" type="text" placeholder="Alexander" />
              </div>
              <div class="col-lg-8 offset-lg-2 col-md-12 mb-4">
                <label for="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div class="col-lg-8 offset-lg-2 col-md-12 mb-4">
                <label for="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+99123456780" />
              </div>
              {/* <div class="col-lg-8 offset-lg-2 col-md-12 mb-4">
                <label for="subject">Subject</label>
                <select id="subject" class="es-add-select">
                  <option data-display="Physics">Physics</option>
                  <option value="1">Chemistry</option>
                  <option value="2">Biology</option>
                  <option value="3">Zoology</option>
                </select>
              </div> */}
              <Select label={"Courses"} />
              {/* <div class="col-lg-4 offset-lg-4 col-md-12 text-center">
                <a
                  href=""
                  class="btn btn-danger btn-block bg-gradient border-0 text-white"
                >
                  Login
                </a>
              </div> */}
              <Button label={"Login"}/>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
