import { jsx as _jsx } from "react/jsx-runtime";
import { ProgressBarContainer as ProgressBar } from '../components/ProgressBarContainer';
const ProgressBarStyles = () => {
    return (_jsx("div", { id: "container", children: _jsx(ProgressBar, { percentage: 50, fillerExtraStyles: {
                backgroundColor: 'blue',
            }, progressBarExtraStyles: {
                position: 'relative',
                height: '50px',
                width: '200px',
                borderRadius: '1px',
                border: '1px solid blue',
            } }) }));
};
export default ProgressBarStyles;
