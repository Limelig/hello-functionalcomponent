import React from "react";
import { CountContext } from "./CountContext";

// export const PlusButton = () => {
//   const { onPlus } = React.useContext(CountContext);

//   return <button onClick={onPlus}>+</button>;
// };

export class PlusButton extends React.Component {
  render() {
    return (
      <CountContext.Consumer>
        {(context) => {
          return <button onClick={context.onPlus}>+</button>;
        }}
      </CountContext.Consumer>
    );
  }
}
