import React from "react";
import Item from "../Components/Item";

class Items extends React.Component {
  render() {
    return (
      <ul className="todo-out__items">
        {this.props.todoList.map((item) => (
            <Item
              key={item.id}
              todoList={this.props.todoList}
              item={item}
              deleteItem={this.props.deleteItem}
              itemEditModeToggleOnDblClick={
                this.props.itemEditModeToggleOnDblClick
              }
              itemInputChangeText={this.props.itemInputChangeText(item.id)}
            />
          ))}
      </ul>
    );
  }
}

export default Items;
