import React from "react";
import ProgressBar from "../components/ProgressBar";

const ExtraStyles = (name) => (
  <div id="container">
    <ProgressBar
      percentage={50}
      fillerExtraStyles={{
        backgroundColor: "red",
      }}
    />
  </div>
);

export default ExtraStyles;
