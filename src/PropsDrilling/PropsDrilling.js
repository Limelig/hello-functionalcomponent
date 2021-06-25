import React from "react";

export const PropsDrilling = (props) => {
  // [ n, setN ]
  const [number, setNumber] = React.useState(0);
  const onMinus = React.useCallback(() => setNumber((value) => value - 1), []);
  const onPlus = React.useCallback(() => setNumber((value) => value + 1), []);

  return (
    <>
      <button onClick={onMinus}>-</button>
      <div>{number}</div>
      <button onClick={onPlus}>+</button>
      {props.children}
    </>
  );
};
