import React from "react";
import { MdThumbUp } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Item1 = ({ onLiked, onDelete, lists1, back }) => {
  const { id, text, liked } = lists1;
  let message = "いいね!";

  return (
    <div>
      {console.log("Back:" + back)}
      {back ? null : (
        <div>
          <AiOutlineCheckCircle />
          {text + "               "}
          <MdThumbUp onClick={() => onLiked(id)} />
          {liked && <b style={{ color: "blue" }}>{message}</b>}
          <MdDelete onClick={() => onDelete(id)} />
        </div>
      )}
    </div>
  );
};
export default Item1;
