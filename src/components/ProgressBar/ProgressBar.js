import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Filler } from '../Filler/Filler';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProgressBarChild = styled.div`
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
    <Container data-testid="progress-bar">
      <ProgressBarChild
        data-testid="progress-bar-child"
        style={{
          ...opt,
        }}
      >
        <Filler percentage={percentage} fillerExtraStyles={fillerExtraStyles} />
      </ProgressBarChild>
    </Container>
  );
};
ProgressBar.propTypes = {
  percentage: PropTypes.number,
  backgroundColor: PropTypes.string,
  fillerExtraStyles: PropTypes.object,
  progressBarExtraStyles: PropTypes.object,
};
