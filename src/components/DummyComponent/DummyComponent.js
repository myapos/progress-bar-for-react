import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

const InnerDummyComponent = () => (
  <div> This is a DummyComponent for testing npm </div>
);

const DummyComponent = () => {
  const Styled = withStyles(styles)(InnerDummyComponent);
  return <Styled />;
};

export default DummyComponent;
// export default withStyles(styles)(DummyComponent);
