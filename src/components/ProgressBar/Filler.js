import React from "react";
import PropTypes from "prop-types";

const Filler = ({ percentage, fillerExtraStyles, classes }) => {
  const options = {
    // className: classes.filler,
    style: {
      width: `${percentage}%`,
    },
  };

  if (fillerExtraStyles) {
    debugger;
    options.style = {
      ...options.style,
      ...fillerExtraStyles,
    };
  }

  console.log("options 123", options);

  return <div {...options} className="filler" />;
};

Filler.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
};
export default Filler;
