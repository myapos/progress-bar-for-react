import { MutableRefObject } from 'react';

export type UsePreviousProps = {
  percentage: number;
  ref: MutableRefObject<number | undefined>;
};

export interface WrappedComponentProps {
  tooltipContent: string;
  tooltipStyle?: Record<string, string>;
  percentage: number;
  fillerExtraStyles: Record<string, string>;
  progressBarExtraStyles: Record<string, string>;
}
