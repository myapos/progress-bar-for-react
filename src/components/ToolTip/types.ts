import { ReactNode } from 'react';

export type TooltipProps = {
  tooltipContent: string;
  children?: ReactNode;
  style: Record<string, string>;
};
