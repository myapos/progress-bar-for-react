import React from "react";
import ProgressBar from "./ProgressBar";
import "../css/css.styl";

const App = (name) => (
  <div id="container">
    <ProgressBar percentage={50} />
  </div>
);

export default App;
