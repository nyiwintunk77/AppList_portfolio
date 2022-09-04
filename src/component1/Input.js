import React from "react";

const Input = ({ onChange, value, error }) => {
  return (
    <div>
      <input placeholder="入力欄" value={value} onChange={onChange} />
      {error && <p style={{ color: "red", display: "block" }}>{error}</p>}
    </div>
  );
};
export default Input;
