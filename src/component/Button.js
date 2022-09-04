import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";

const Button = ({ onSubmit, onBack }) => {
  return (
    <div>
      <button onClick={onSubmit}>追加</button>
      <b>Back</b>
      <RiArrowGoBackFill onClick={onBack} />
    </div>
  );
};
export default Button;
