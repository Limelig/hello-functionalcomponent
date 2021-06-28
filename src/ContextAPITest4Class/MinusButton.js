import React from "react";
import { CountContext } from "./CountContext";

// export const MinusButton = () => {
//   const { onMinus } = React.useContext(CountContext);

//   return <button onClick={onMinus}>-</button>;
// };

export class MinusButton extends React.Component {
  render() {
    return (
      <CountContext.Consumer>
        {(context) => {
          return <button onClick={context.onMinus}>-</button>;
        }}
      </CountContext.Consumer>
    );
  }
}
