"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactJss = require("react-jss");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _withTooltip = _interopRequireDefault(require("HOCS/withTooltip"));

var _styles = _interopRequireDefault(require("./styles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useStyles = (0, _reactJss.createUseStyles)(_styles.default);
const TooltipedProgressBar = (0, _withTooltip.default)(_ProgressBar.default);

const usePrevious = value => {
  const ref = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    ref.current = value;
  });
  return ref.current;
};

const ProgressBarContainer = _ref => {
  let {
    percentage,
    fillerExtraStyles,
    progressBarExtraStyles,
    tooltip,
    onPercentageChange
  } = _ref;
  let ProgressBarToUse = _ProgressBar.default;
  const hasTooltip = tooltip && tooltip.length > 0;
  const [savedOnpercentage, setSaveOnPercentage] = (0, _react.useState)(false); // inspired source
  // https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect

  const previousValue = usePrevious({
    percentage
  });
  (0, _react.useEffect)(() => {
    const hasChanged = previousValue && previousValue.percentage !== percentage;
    const hasSetOnPercentageChange = onPercentageChange && typeof onPercentageChange === 'function';

    if (hasChanged && hasSetOnPercentageChange && !savedOnpercentage) {
      // process here
      onPercentageChange(percentage);
    } else if (hasChanged && hasSetOnPercentageChange && savedOnpercentage) {
      window.top.onPercentageChange(percentage);
    }
  }, [percentage, onPercentageChange, previousValue, savedOnpercentage]);

  if (window.top && window.top.Cypress && !savedOnpercentage) {
    console.log('loaded'); // keep reference for testing with cypresss

    window.top.onPercentageChange = onPercentageChange;
    setSaveOnPercentage(true);
  }

  const classes = useStyles();

  if (percentage === 100) {
    return null;
  }

  if (hasTooltip) {
    ProgressBarToUse = TooltipedProgressBar;
  }

  return /*#__PURE__*/_react.default.createElement(ProgressBarToUse, {
    percentage: percentage,
    fillerExtraStyles: fillerExtraStyles,
    progressBarExtraStyles: progressBarExtraStyles,
    tooltipContent: tooltip,
    classes: classes
  });
};

ProgressBarContainer.propTypes = {
  percentage: _propTypes.default.number,
  backgroundColor: _propTypes.default.string,
  classes: _propTypes.default.object,
  fillerExtraStyles: _propTypes.default.object,
  progressBarExtraStyles: _propTypes.default.object
};
var _default = ProgressBarContainer;
exports.default = _default;