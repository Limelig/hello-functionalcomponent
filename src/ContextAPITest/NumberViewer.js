import React from "react";
import { CountContext } from "./CountContext";

export const NumberViewer = () => {
  const { number } = React.useContext(CountContext);

  return <div>{number}</div>;
};
