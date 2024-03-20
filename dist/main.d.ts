import { JSX as JSX_2 } from 'react/jsx-runtime';

declare type PercentageProps = number;

export declare const ProgressBarContainer: ({ percentage, fillerExtraStyles, progressBarExtraStyles, tooltip, onPercentageChange, tooltipStyle, }: ProgressBarContainerProps) => JSX_2.Element;

declare type ProgressBarContainerProps = {
    percentage: PercentageProps;
    fillerExtraStyles?: Record<string, string>;
    progressBarExtraStyles?: Record<string, string>;
    tooltip?: string;
    onPercentageChange?: (percentage: PercentageProps) => void;
    tooltipStyle?: Record<string, string>;
};

export { }
