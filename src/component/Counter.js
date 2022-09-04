import React from "react"; //export

class Counter extends React.Component {
  //一番最初に実行されるメソッド
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      toggle: false,
    };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }

  handlePlus() {
    this.setState({ number: this.state.number + 1 });
  }
  handleMinus() {
    this.setState({ number: this.state.number - 1 });
  }

  //２番目に実行されるメソッド、かつ必ず実行しなければならないメソッド
  render() {
    const { number, toggle } = this.state;
    return (
      <div>
        <p>{number}</p>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          show
        </button>
      </div>
    );
  }
  //レンダーが行われた後、実装されるメソッド（最初の一回だけ）
  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}
}
export default Counter;
