import React from "react";

export class HelloClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { number: 0 };
  }

  componentDidMount() {
    console.log("Mount");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  onMinus() {
    this.setState({ number: this.state.number - 1 });
  }
  onPlus() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <>
        <button onClick={() => this.onMinus()}>-</button>
        <div>{this.state.number}</div>
        <button onClick={() => this.onPlus()}>+</button>
      </>
    );
  }
}
