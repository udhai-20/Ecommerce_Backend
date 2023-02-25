import React from "react";

function CustomeInput({ type, name, className, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
      />
    </>
  );
}

export default CustomeInput;
