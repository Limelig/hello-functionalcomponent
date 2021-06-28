import React, { Component } from "react";

export const CountContext = React.createContext(null);

// export const CountContextProvider = (props) => {
//   const [number, setNumber] = React.useState(0);
//   const onMinus = React.useCallback(() => setNumber((value) => value - 1), []);
//   const onPlus = React.useCallback(() => setNumber((value) => value + 1), []);
//   const value = {
//     number,
//     onMinus,
//     onPlus,
//   };

//   return (
//     <CountContext.Provider value={value}>
//       {props.children}
//     </CountContext.Provider>
//   );
// };

export class CountContextProvider extends Component {
  state = { number: 0 };

  onMinus() {
    this.setState({ number: this.state.number - 1 });
  }

  onPlus() {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    const value = {
      number: this.state.number,
      onMinus: () => this.onMinus(),
      onPlus: () => this.onPlus(),
    };

    return (
      <CountContext.Provider value={value}>
        {this.props.children}
      </CountContext.Provider>
    );
  }
}
