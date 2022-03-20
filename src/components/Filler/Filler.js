import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const FillerContainer = styled.div`
  background: black;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${({ percentage }) => `${percentage}%`};
`;

export const Filler = ({ percentage, fillerExtraStyles }) => {
  const options = {};

  if (fillerExtraStyles) {
    options.style = {
      ...fillerExtraStyles,
    };
  }

  return (
    <FillerContainer
      data-testid="filler"
      {...options}
      percentage={percentage}
    />
  );
};

Filler.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  fillerExtraStyles: PropTypes.object,
};
