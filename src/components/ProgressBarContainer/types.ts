export type PercentageProps = number;

export type ProgressBarContainerProps = {
  percentage: PercentageProps;
  fillerExtraStyles?: Record<string, string>;
  progressBarExtraStyles?: Record<string, string>;
  tooltip?: string;
  onPercentageChange?: (percentage: PercentageProps) => void;
  tooltipStyle?: Record<string, string>;
};
