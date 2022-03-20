import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
// import { decamelize } from 'components/utils/decamelize';

/*
filler: {
    background: 'black', // default background color
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width .2s ease-in',
  },
*/

const FillerContainer = styled.div`
  background: black;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${({ percentage, ...rest }) => {
    console.log('rest', rest, ' percentage', percentage);

    return `${percentage}%`;
  }};
`;

export const Filler = ({ percentage, fillerExtraStyles }) => {
  const options = {
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

  return <FillerContainer {...options} percentage={percentage} />;
};

Filler.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  classes: PropTypes.object,
  fillerExtraStyles: PropTypes.object,
};
