import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { CSSTransition } from "react-transition-group";
import { sessionLists } from "../store/data";
import { Input, Select } from "./Input";
import "./modal.scss";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal-c" onClick={props.onClose}>
        <div
          className="modal-c-content"
          onClick={(e) => e.stopPropagation()}
          style={{ width: props.w80 ? "80%" : "" }}
        >
          {/* <div className="modal-c-body">{props.children}</div> */}
          <div className="modal-c-body">
            {React.cloneElement(props.children, { ...props })}
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};
export const CourseModal = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const submit = async (formdata) => {
    console.log(formdata);
  };
  return (
    <section className="es-form-area" style={{ marginTop: "16rem" }}>
      <div className="card">
        <header className="card-header bg-gradient border-0 pt-5 pb-5 d-flex align-items-center">
          <h2 className="text-white mb-0">Add New Student</h2>
          <button
            onClick={props.onClose}
            className="btn btn-outline-warning ml-auto text-white"
          >
            Close
          </button>
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
                lists={sessionLists}
                label={"Student's Session"}
                register={register}
                required="Input field can not be empty"
                error={errors.session}
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
};

export const EditRoutineCellModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  const submit = async (formdata) => {
    console.log(formdata);
  };
  return (
    <section className="es-form-area">
      <div className="card" style={{padding: "1rem"}}>
        <form className="es-form es-add-form" onSubmit={handleSubmit(submit)}>
          <div className="row">
            <Input
              id={"course_code"}
              name={"course_code"}
              type={"text"}
              placeholder={"eg. CSTE 1101"}
              label={"Course Code"}
              register={register}
              required="Input field can not be empty"
              error={errors.course_code}
            />
            <Input
              id={"course_teacher"}
              name={"course_teacher"}
              type={"text"}
              placeholder={"eg. Pathan"}
              label={"Course Teacher"}
              register={register}
              required="Input field can not be empty"
              error={errors.course_teacher}
            />
            <div className="col-lg-4 offset-lg-4 col-md-12 text-center">
              <button className="btn btn-danger btn-block bg-gradient border-0 text-white">
                Updata
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};





export default Modal;
