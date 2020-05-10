import React from "react";
import ProgressBar from "../components/ProgressBar";

const Complex = (name) => (
  <div id="container">
    <ProgressBar
      percentage={50}
      tooltip="this is a long text tooltip example"
      extraStyles={{
        backgroundColor: "red",
      }}
    />
  </div>
);

export default Complex;
