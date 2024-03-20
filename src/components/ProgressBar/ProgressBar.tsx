import styled from '@emotion/styled';

import { ProgressBarProps } from './types';
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
}: ProgressBarProps) => {
  return (
    <Container data-testid="progress-bar">
      <ProgressBarChild
        data-testid="progress-bar-child"
        style={{
          ...progressBarExtraStyles,
        }}
      >
        <Filler percentage={percentage} fillerExtraStyles={fillerExtraStyles} />
      </ProgressBarChild>
    </Container>
  );
};
