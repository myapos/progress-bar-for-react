import React from "react";
import ProgressBar from "../components/ProgressBar";

const ToolTip = (name) => (
  <div id="container">
    <ProgressBar percentage={50} tooltip="demo text" />
  </div>
);

export default ToolTip;
