import React from 'react';
import PropTypes from 'prop-types';

export const Filler = ({ percentage, fillerExtraStyles, classes }) => {
  const options = {
    className: classes.filler,
    style: {
      width: `${percentage}%`,
    },
  };

  if (fillerExtraStyles) {
    options.style = {
      ...options.style,
      ...fillerExtraStyles,
    };
  }

  return <div {...options} />;
};

Filler.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
};
// export default Filler;
