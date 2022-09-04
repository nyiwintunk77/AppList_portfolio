import React from "react";
import Item1 from "./Item1";

const List1 = ({ onLiked, onDelete, list1, back }) => {
  return (
    <div>
      {list1.map((lists1) => (
        <Item1
          lists1={lists1}
          key={lists1.id}
          onLiked={onLiked}
          onDelete={onDelete}
          back={back}
        />
      ))}
    </div>
  );
};
export default List1;
