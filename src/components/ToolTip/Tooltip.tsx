import styled from '@emotion/styled';

import { TooltipProps } from './types';

const StyledSpan = styled.span`
  color: #fff;
  width: auto;
  bottom: 150%;
  display: none;
  padding: 5px;
  z-index: 1;
  position: absolute;
  text-align: left;
  border-radius: 6px;
  background-color: #222;
  &:after {
    top: 100%;
    left: 50%;
    content: ' ';
    position: absolute;
    margin-left: -5px;
    border-color: black transparent transparent transparent;
    border-style: solid;
    border-width: 5px;
  }
`;

const TooltipContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 150px;
  align-items: center;
  justify-content: center;
  &:hover ${StyledSpan} {
    display: block;
  }
`;

/**It will accept a tooltip content message.
 * Any children component that is passed will be tooltiped with the defined content.
 * Then the react component will be rendered and a tooltip will be
 * displayed on mouse hover */

export const Tooltip = ({ tooltipContent, children, style }: TooltipProps) => {
  let tooltipStyle = {};

  if (style) {
    tooltipStyle = { ...style };
  }

  return (
    <TooltipContainer style={tooltipStyle} data-testid="tooltip">
      {children}
      <StyledSpan data-testid="tooltiptext">{tooltipContent}</StyledSpan>
    </TooltipContainer>
  );
};
