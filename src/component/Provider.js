import React from "react";
export const MContext = React.createContext();
class Provider extends React.Component {
  render() {
    return <Provider>{this.props.childrens}</Provider>;
  }
}
export default Provider;
