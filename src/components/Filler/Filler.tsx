import styled from '@emotion/styled';

import { FillerProps, FillerContainerProps } from './types';

const FillerContainer = styled.div<FillerContainerProps>`
  background: black;
  height: 100%;
  border-radius: inherit;
  transition: width 0.2s ease-in;
  width: ${({ percentage }) => `${percentage}%`};
`;

export const Filler = ({ percentage, fillerExtraStyles }: FillerProps) => {
  if (fillerExtraStyles) {
    return (
      <FillerContainer
        data-testid="filler"
        style={{
          ...fillerExtraStyles,
        }}
        percentage={percentage}
      />
    );
  }

  return <FillerContainer data-testid="filler" percentage={percentage} />;
};
