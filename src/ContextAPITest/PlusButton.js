import React from "react";
import { CountContext } from "./CountContext";

export const PlusButton = () => {
  const { onPlus } = React.useContext(CountContext);

  return <button onClick={onPlus}>+</button>;
};
