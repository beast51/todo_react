import React from "react";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.completed
    };
  }

  onChange = () => {
    this.props.checkboxToggle(this.state.inputValue);
    this.setState({inputValue: !this.state.inputValue})
  };

  render() {
    const { className} = this.props;

    return (
      <input
        className={className}
        type="checkbox"
        value={this.state.inputValue}
        onChange={this.onChange}
        checked={this.props.checked}
      />
    );
  }
}

export default Checkbox;
