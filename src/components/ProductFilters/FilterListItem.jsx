const FilterListItem = ({
  id,
  label,
  value,
  type,
  changeHandler,
  name,
  isChecked,
}) => {
  return (
    <>
      <li className="form-group" key={id}>
        <label className="form-label" htmlFor={id}>
          <input
            id={id}
            type={type}
            className="form-input mr-sm"
            onChange={() => changeHandler(value)}
            name={name}
            value={value}
            checked={isChecked(value)}
          />
          {label}
        </label>
      </li>
    </>
  );
};

export { FilterListItem };
