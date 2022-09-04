import React from "react";
import { calResult } from "./Util";

class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: Math.ceil(Math.random() * 9),
      number1: Math.ceil(Math.random() * 9),
    };
  }

  render() {
    const { number, number1 } = this.state;
    const { input } = this.props.cal;
    const result = number * number1;

    return (
      <div>
        <div>
          <b style={{ color: "red" }}>問題: </b>
          <span style={{ color: "blue" }}>
            {number}×{number1}=?
          </span>
        </div>
        {input !== "" &&
          (calResult(result, input)
            ? // if(dbvalue.equals(result)) → NullPointer Exception
              // if(result.equals(dbvalue)) →　false // try catch

              (alert("OK！！次の問題に続けますか？"),
              this.setState({
                number: Math.ceil(Math.random() * 9),
                number1: Math.ceil(Math.random() * 9),
              }),
              this.props.cal.onInput(""))
            : alert("NG!"))}
      </div>
    );
  }
}
export default Calculate;
