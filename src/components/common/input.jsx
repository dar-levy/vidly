import React from "react";

const Input = ({
  name,
  label,
  value,
  onChange,
  autoFocus,
  type,
  error,
  placeholder,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        autoFocus={autoFocus}
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
        name={name}
        id={name}
        placeholder={placeholder}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
