import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { GrHistory } from "react-icons/gr";

const Button = ({ onSubmit, onBack, onHistory }) => {
  return (
    <div>
      <button onClick={onSubmit}>追加</button>
      <b>Back</b>
      <RiArrowGoBackFill onClick={onBack} />
      <b style={{ paddingLeft: "10px" }}>履歴</b>
      <GrHistory style={{ paddingLeft: "4px" }} onClick={onHistory} />
    </div>
  );
};
export default Button;
