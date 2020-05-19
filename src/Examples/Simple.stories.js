import React from "react";
import ProgressBar from "../components/ProgressBar";

export default { title: "Simple" };

export const Simple = () => (
  <div id="container">
    <ProgressBar percentage={50} />
  </div>
);
