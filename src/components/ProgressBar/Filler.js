import React from 'react';
import PropTypes from 'prop-types';

const Filler = ({ percentage, backgroundColor, classes }) => {
  const options = {
    className: classes.filler,
    style: {
      width: `${percentage}%`,
    },
  };

  if (backgroundColor) {
    options.style = {
      ...options.style,
      backgroundColor,
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
