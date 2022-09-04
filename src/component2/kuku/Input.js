import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.onCal(e)}>
          <input
            type="number"
            value={this.state.inputValue}
            onChange={(e) => this.onChange(e)}
          />
          <button type="submit">Play</button>
        </form>
        {console.log(this.state.inputValue)}
      </div>
    );
  }

  onChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }
  onCal(e) {
    this.props.data.onCheck(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
    e.preventDefault();
  }
}
export default Input;
