import React from "react";
import Item from "./Item";

const List = ({ list, onLiked, onDelete, back, show }) => {
  return (
    <div>
      {list.map((lists) => (
        <Item
          lists={lists}
          key={lists.id}
          onLiked={onLiked}
          onDelete={onDelete}
          back={back}
        />
      ))}
    </div>
  );
};
export default List;
