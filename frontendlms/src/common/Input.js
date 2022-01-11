export const Input = ({
  label,
  type,
  id,
  placeholder,
  name,
  register,
  required,
  minLength,
  maxLength,
  validate,
  pattern,
  error,
}) => {
  return (
    <div className="col-lg-8 offset-lg-2 col-md-12 mb-4">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name, {
          required,
          minLength,
          maxLength,
          validate,
          pattern,
        })}
      />

      {/* className={error ? "error-msg" : "hide"} */}
      {error && <p className={"error-msg"}>{error?.message}</p>}
    </div>
  );
};
export const courseList = [
  { courseName: "Physics Lab", courseCode: "1" },
  { courseName: "Chemistry", courseCode: "2" },
  { courseName: "Biology", courseCode: "3" },
  { courseName: "Zoology", courseCode: "4" },
];
export const Select = ({ label }) => {
  return (
    <div className="col-lg-8 offset-lg-2 col-md-12 mb-4">
      <label htmlFor="subject">{label}</label>

      <select id="subject" className="es-add-select">
        {courseList.map((item) => (
          <option key={item.courseCode} value={item.courseCode}>
            {item.courseName}
          </option>
        ))}
      </select>
    </div>
  );
};

// export const Select = () =>{
//     return(

//     )
// }
