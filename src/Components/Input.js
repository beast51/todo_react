import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.value || "",
    };
  }

  mainInputTextHandler = ({ target: { value } }) => {
    this.setState({ inputValue: value });
  };

  keyPressHandler = ({ key }) => {
    if (key === "Enter") {
      this.props.onEnter(this.state.inputValue);
      this.setState({ inputValue: "" });
    }
  };

  handlerOnBlur = () => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(this.state.inputValue);
    }
  };

  render() {
    const { className, placeholder, autoFocus } = this.props;
    return (
      <input
        className={className}
        placeholder={placeholder}
        type="text"
        value={this.state.inputValue}
        onChange={this.mainInputTextHandler}
        onKeyPress={this.keyPressHandler}
        onBlur={this.handlerOnBlur}
        autoFocus={autoFocus}
      />
    );
  }
}

export default Input;
