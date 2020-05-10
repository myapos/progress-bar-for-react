import React from "react";
import ProgressBar from "../components/ProgressBar";

const ExtraStyles = (name) => (
  <div id="container">
    <ProgressBar
      percentage={50}
      extraStyles={{
        backgroundColor: "red",
      }}
    />
  </div>
);

export default ExtraStyles;
