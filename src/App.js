import React from "react";
import "./App.css";
import Items from "./Components/Items";
import { connect } from "react-redux";
import { createTodo, deleteTodo, isCompletedTodo, editTodo, isEditMode, getTodoFromLS } from "./redux/actions";

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
      console.log('work1')
      localStorage.setItem("todoList", JSON.stringify(this.props.todoList));
    }
  }

  inputTextChangeHandler = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  keyDownHandler = (event) => {
    if (event.key === "Enter" && this.state.inputValue.trim() !== "") {
      this.props.createTodo({
        id: Date.now(),
        text: this.state.inputValue,
        completed: false,
        edit: false,
      });
      this.setState({ inputValue: "" });
    }
  };

  checkboxHandler = (id) => {
    this.props.isCompletedTodo(id);
  };

  deleteHandler = (id) => {
    this.props.deleteTodo(id);
  };

  editModeHandler = (id) => {
    this.props.isEditMode(id);
  };

  itemInputChangeHandler = (id, event) => {
    this.props.editTodo(id, event.target.value)
  };

  itemInputEditModeChangeHandler = (event, id, text) => {
    if (event.key === "Enter" && text.trim() !== "") {
      this.props.isEditMode(id);
    }
  };

  render() {
    return (
      <div className="todo">
        <h1>Todo</h1>
        <input
          className="todo__input"
          type="text"
          placeholder="Введите название дела"
          value={this.state.inputValue}
          onChange={this.inputTextChangeHandler}
          onKeyDown={this.keyDownHandler}
        />
        <p className="todo-out__title">
          {this.props.todoList.length > 0
            ? "Список дел:"
            : "Запланируй что-то)"}
        </p>
        <Items
          todoList={this.props.todoList}
          deleteHandler={this.deleteHandler}
          checkboxHandler={this.checkboxHandler}
          editModeHandler={this.editModeHandler}
          itemInputChangeHandler={this.itemInputChangeHandler}
          itemInputEditModeChangeHandler={this.itemInputEditModeChangeHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  createTodo,
  deleteTodo,
  isCompletedTodo,
  editTodo,
  isEditMode,
  getTodoFromLS
};

const mapStateToProps = state => {
  console.log(state)
  return {
    todoList: state.todoList.todoList
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
