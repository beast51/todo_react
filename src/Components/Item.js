import React, { memo } from "react";

function Item(props) {
  return (
    <li className="todo-out__item item">
      <label
        className="item-input"
        onDoubleClick={() => props.editModeHandler(props.item.id)}
      >
        <input
          className="item-input__checkbox"
          onChange={() => props.checkboxHandler(props.item.id)}
          type="checkbox"
          checked={props.item.completed}
        />
        {props.item.edit ? (
          <input className="item-input__input" 
                 onChange={(event) =>props.itemInputChangeHandler(props.item.id, event)} 
                 value={props.item.text}
                 onKeyDown={ (event) => props.itemInputEditModeChangeHandler(event, props.item.id, props.item.text)}
                 onBlur={() => props.editModeHandler(props.item.id)}
                 autoFocus
                 />
        ) : (
          <span>{props.item.text}</span>
        )}
      </label>
      <button
        className="item-input__button"
        onClick={() => props.deleteHandler(props.item.id)}
      >
        Удалить
      </button>
    </li>
  );
}

export default Item;
