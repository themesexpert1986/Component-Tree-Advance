import React from "react";
import ToDoItem from "./ToDoItem";

function ListArea(props) {
  return (
    <div>
      <ul>
        {props.items.map((todoItem, index) => (
          <ToDoItem
            key={index}
            id={index}
            text={todoItem}
            onDelete={props.onDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListArea;
