import React from "react";

export const CountContext = React.createContext(null);

export const CountContextProvider = (props) => {
  const [number, setNumber] = React.useState(0);
  const onMinus = React.useCallback(() => setNumber((value) => value - 1), []);
  const onPlus = React.useCallback(() => setNumber((value) => value + 1), []);
  const value = {
    number,
    onMinus,
    onPlus,
  };

  return (
    <CountContext.Provider value={value}>
      {props.children}
    </CountContext.Provider>
  );
};
