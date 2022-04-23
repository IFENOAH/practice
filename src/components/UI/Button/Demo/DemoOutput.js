import React from "react";
import { Paragraph } from "../../../Paragraph";

const DemoOutput = (props) => {
  return <Paragraph>{props.show ? "This is New!" : ""}</Paragraph>;
};

export default DemoOutput;
