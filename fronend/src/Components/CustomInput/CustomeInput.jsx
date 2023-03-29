import React from "react";

function CustomeInput({
  type,
  name,
  className,
  placeholder,
  value,
  onChange,
  onBlur,
}) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}

export default CustomeInput;
