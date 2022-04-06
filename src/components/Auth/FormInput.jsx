const FormInput = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  inputHandler,
}) => {
  return (
    <div className="form-group">
      <label className="form-label txt-sbold" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-input"
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={inputHandler}
        required
      />
    </div>
  );
};

export { FormInput };
