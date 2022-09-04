import React from "react";
import { MdThumbUp } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import History from "./History";

const Item = ({ lists, onLiked, onDelete }) => {
  const { id, text, liked } = lists;
  let message = "いいね!";

  return (
    <div>
      {
        <div>
          <AiOutlineCheckCircle />
          {text + "               "}
          <MdThumbUp onClick={() => onLiked(id)} />
          {liked && <b style={{ color: "blue" }}>{message}</b>}
          <MdDelete onClick={() => onDelete(id)} />
        </div>
      }
      <History />
    </div>
  );
};
export default Item;
