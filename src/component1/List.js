import React from "react";
import Item from "./Item";

const List = ({ list, onLiked, onDelete }) => {
  return (
    <div>
      {list.map((lists) => (
        <Item
          lists={lists}
          key={lists.id}
          onLiked={onLiked}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
export default List;
