import React from "react";
import Item from "../Components/Item";

function Items(props) {
  return (
    <ul className="todo-out__items">
      {props.todoList.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteHandler={props.deleteHandler}
            checkboxHandler={props.checkboxHandler}
            editModeHandler={props.editModeHandler}
            itemInputChangeHandler={props.itemInputChangeHandler}
            itemInputEditModeChangeHandler={props.itemInputEditModeChangeHandler}
          />
        ))}
    </ul>
  );
}

export default Items;
