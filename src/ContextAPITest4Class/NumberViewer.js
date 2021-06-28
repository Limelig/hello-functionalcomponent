import React from "react";
import { CountContext } from "./CountContext";

// export const NumberViewer = () => {
//   const { number } = React.useContext(CountContext);

//   return <div>{number}</div>;
// };

export class NumberViewer extends React.Component {
  render() {
    return (
      <CountContext.Consumer>
        {(context) => {
          return <div>{context.number}</div>;
        }}
      </CountContext.Consumer>
    );
  }
}
