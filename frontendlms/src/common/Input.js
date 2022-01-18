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

export const Select = ({ label, lists, name, register, required, id }) => {
  return (
    <div className="col-lg-8 offset-lg-2 col-md-12 mb-4">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        className="es-add-select "
        // custom-select custom-select-lg mb-3
        {...register(name, {
          required,
        })}
        // style={{display:"none"}}
      >
        {lists.map((item) => (
          <option key={item.code} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export const InputFile = ({
  label,
  id,
  name,
  register,
  required,
  error,
  onChange,
}) => {
  return (
    <div className="custom-file col-lg-8 offset-lg-2 col-md-12 mb-4 ">
      <input
        onChange={e=>onChange(e)}
        id={id}
        type={"file"}
        name={name}
        {...register(name, {
          required,
        })}
        className="custom-file-input"
      />
      <label className="custom-file-label" htmlFor={id}>
        {label}
      </label>
      {error && <p className={"error-msg"}>{error?.message}</p>}
    </div>
  );
};
