import React from "react";
import ProgressBar from "../components/ProgressBar";

const ProgressBarStyles = (name) => (
  <div id="container">
    <ProgressBar
      percentage={50}
      progressBarExtraStyles={{
        position: "relative",
        height: "5px",
        width: "200px",
        borderRadius: "1px",
        border: "1px solid blue",
      }}
    />
  </div>
);

export default ProgressBarStyles;
