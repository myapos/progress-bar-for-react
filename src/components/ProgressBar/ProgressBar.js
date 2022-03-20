import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Filler } from '../Filler/Filler';

/*
progressBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },


   progressBar: {
    position: 'relative',
    height: '15px',
    width: '85px',
    borderRadius: '20px',
    border: '1px solid #333',
  },
*/

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBarDiv = styled.div`
  position: relative;
  height: 15px;
  width: 85px;
  border-radius: 20px;
  border: 1px solid #333;
`;

export const ProgressBar = ({
  percentage,
  fillerExtraStyles,
  progressBarExtraStyles,
}) => {
  const opt = progressBarExtraStyles;
  return (
    <Container>
      <ProgressBarDiv
        style={{
          ...opt,
        }}
      >
        <Filler percentage={percentage} fillerExtraStyles={fillerExtraStyles} />
      </ProgressBarDiv>
    </Container>
  );
};
ProgressBar.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  fillerExtraStyles: PropTypes.object,
  progressBarExtraStyles: PropTypes.object,
};
