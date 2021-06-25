import React from "react";
import { MinusButton } from "./MinusButton";
import { NumberViewer } from "./NumberViewer";
import { PlusButton } from "./PlusButton";
import { CountContextProvider } from "./CountContext";

export const ContextAPITest = (props) => {
  // [ n, setN ]

  return (
    <CountContextProvider>
      <MinusButton />
      <NumberViewer />
      <PlusButton />
      {props.children}
    </CountContextProvider>
  );
};
