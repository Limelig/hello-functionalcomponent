import React from "react";
import { CountContext } from "./CountContext";

export const MinusButton = () => {
  const { onMinus } = React.useContext(CountContext);

  return <button onClick={onMinus}>-</button>;
};
