import React from "react";
import { connect } from "react-redux";
import Input from "./Input";
import {isCompleteTodo} from "../redux/actions";

class Item extends React.Component {
  checkboxHandler = () => {
    this.props.isCompleteTodo(this.props.item.id);
  };
  render() {
    const {
      itemEditModeToggleOnDblClick,
      item,
      itemInputChangeText,
      deleteItem,
    } = this.props;
    return (
      <li className="todo-out__item item">
        <div className="item-input">
          <input
            className="item-input__checkbox"
            type="checkbox"
            value={item.completed}
            checked={item.completed}
            onChange={this.checkboxHandler}
          />
          {item.edit ? (
            <Input
              className="item-input__input"
              value={item.text}
              onEnter={itemInputChangeText}
              onBlur={itemInputChangeText}
              autoFocus
            />
          ) : (
            <span
              className="item-input__text"
              onDoubleClick={itemEditModeToggleOnDblClick(item.id)}
            >
              {item.text}
            </span>
          )}
        </div>
        <button
          className="item-input__button"
          onClick={deleteItem(this.props.item.id)}
        >
          Удалить
        </button>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return { todoList: state.todoList.todoList };
};

const mapDispatchToProps = {
  isCompleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);
