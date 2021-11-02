const Input = ({ name, label, id, value, handleChange }) => {
  return (
    <div className="mt-1">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          id={id}
          value={value}
          onChange={(e) => handleChange(e.target)}
          className="form-input"
          name={name}
          required
        />
      </div>
    </div>
  );
};

export default Input;
