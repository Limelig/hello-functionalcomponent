import React from "react";

export const HelloFunction = (props) => {
  // [ n, setN ]
  const [number, setNumber] = React.useState(0);
  const onMinus = React.useCallback(() => setNumber((value) => value - 1), []);
  const onPlus = React.useCallback(() => setNumber((value) => value + 1), []);

  React.useEffect(() => {
    console.log("componentDidMount와 같음");

    return () => console.log("componentWillUnmount와 같음");
  }, []);

  React.useEffect(() => {
    console.log("componentDidUpdate와 비슷함");
  }, [number]);

  return (
    <>
      <button onClick={onMinus}>-</button>
      <div>{number}</div>
      <button onClick={onPlus}>+</button>
      {props.children}
    </>
  );
};
