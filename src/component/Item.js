import React from "react";
import { MdThumbUp } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const Item = ({ lists, onLiked, onDelete, back }) => {
  const { id, text, liked } = lists;
  let message = "いいね!";

  return (
    <div>
      {console.log("ItemBack:" + back)}
      {back ? (
        <div>
          {console.log("aaaaaaaaa")}
          <AiOutlineCheckCircle />
          {text + "               "}
          <MdThumbUp onClick={() => onLiked(id)} />
          {liked && <b style={{ color: "blue" }}>{message}</b>}
          <MdDelete onClick={() => onDelete(id)} />
        </div>
      ) : null}
    </div>
  );
};
export default Item;
