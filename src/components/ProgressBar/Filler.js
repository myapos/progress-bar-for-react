import React from "react";
import PropTypes from "prop-types";

const Filler = ({ percentage, extraStyles, classes }) => {
  const options = {
    className: classes.filler,
    style: {
      width: `${percentage}%`,
    },
  };

  if (extraStyles) {
    options.style = {
      ...options.style,
      ...extraStyles,
    };
  }

  return <div {...options} />;
};

Filler.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
};
export default Filler;
