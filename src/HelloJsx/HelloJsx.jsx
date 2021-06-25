import React from "react";

export const Element = () => <h1>Hello World</h1>;

export const HelloJsx = () =>
  React.createElement("h1", { children: "hello world!" });
