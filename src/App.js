import React from "react";
import "./App.css";
import Items from "./Components/Items";
import Input from "./Components/Input";
import { connect } from "react-redux";
import {
  addTodo,
  getTodoFromLS,
  setTodoToLS,
  deleteTodo,
  todoEditModeToggle,
  editTodo
} from "./redux/actions";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
    this.props.getTodoFromLS();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todoList !== this.props.todoList) {
      this.props.setTodoToLS();
    }
  }

  //Enter text on main input
  mainInputTextChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  //Add element Todo
  addTodo = (text) => {
    this.props.addTodo({
      id: Date.now(),
      text: text,
      completed: false,
      edit: false,
    });
  };

  //Delete Todo elemet
  deleteItem = (id) => () => {
    this.props.deleteTodo(id);
  };

  //Show / Hide input for edit element todo on Double Click
  itemEditModeToggleOnDblClick = (id) => () => {
    this.props.todoEditModeToggle(id);
  };

  //Edit text in element Todo
  itemInputChangeText = (id) => (text) => {
    this.props.editTodo(id,text);
  };

  render() {
    return (
      <div className="todo">
        <h1>Todo</h1>
        <Input
          className="todo__input"
          placeholder="Введите название дела"
          onChange={this.mainInputTextChange}
          onEnter={this.addTodo}
        />
        <p className="todo-out__title">
          {this.props.todoList.length > 0
            ? "Список дел:"
            : "Запланируй что-то)"}
        </p>
        <Items
          todoList={this.props.todoList}
          deleteItem={this.deleteItem}
          itemEditModeToggleOnDblClick={this.itemEditModeToggleOnDblClick}
          itemInputChangeText={this.itemInputChangeText}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
  getTodoFromLS,
  setTodoToLS,
  deleteTodo,
  todoEditModeToggle,
  editTodo
};

const mapStateToProps = (state) => {
  return { todoList: state.todoList.todoList };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
