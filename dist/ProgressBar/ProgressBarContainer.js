'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJss = require('react-jss');

var _ProgressBar = require('./ProgressBar');

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _withTooltip = require('HOCS/withTooltip');

var _withTooltip2 = _interopRequireDefault(_withTooltip);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_styles2.default);

var TooltipedProgressBar = (0, _withTooltip2.default)(_ProgressBar2.default);

var usePrevious = function usePrevious(value) {
  var ref = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    ref.current = value;
  });
  return ref.current;
};

var ProgressBarContainer = function ProgressBarContainer(_ref) {
  var percentage = _ref.percentage,
      fillerExtraStyles = _ref.fillerExtraStyles,
      progressBarExtraStyles = _ref.progressBarExtraStyles,
      tooltip = _ref.tooltip,
      onPercentageChange = _ref.onPercentageChange;

  var ProgressBarToUse = _ProgressBar2.default;
  var hasTooltip = tooltip && tooltip.length > 0;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      savedOnpercentage = _useState2[0],
      setSaveOnPercentage = _useState2[1];
  // inspired source
  // https://stackoverflow.com/questions/53446020/how-to-compare-oldvalues-and-newvalues-on-react-hooks-useeffect


  var previousValue = usePrevious({ percentage: percentage });

  (0, _react.useEffect)(function () {
    var hasChanged = previousValue && previousValue.percentage !== percentage;
    var hasSetOnPercentageChange = onPercentageChange && typeof onPercentageChange === 'function';

    if (hasChanged && hasSetOnPercentageChange && !savedOnpercentage) {
      // process here
      onPercentageChange(percentage);
    } else if (hasChanged && hasSetOnPercentageChange && savedOnpercentage) {
      window.top.onPercentageChange(percentage);
    }
  }, [percentage, onPercentageChange, previousValue, savedOnpercentage]);

  if (window.top && window.top.Cypress && !savedOnpercentage) {
    console.log('loaded');
    // keep reference for testing with cypresss
    window.top.onPercentageChange = onPercentageChange;
    setSaveOnPercentage(true);
  }

  var classes = useStyles();

  if (percentage === 100) {
    return null;
  }

  if (hasTooltip) {
    ProgressBarToUse = TooltipedProgressBar;
  }

  return _react2.default.createElement(ProgressBarToUse, {
    percentage: percentage,
    fillerExtraStyles: fillerExtraStyles,
    progressBarExtraStyles: progressBarExtraStyles,
    tooltipContent: tooltip,
    classes: classes
  });
};

ProgressBarContainer.propTypes = {
  percentage: _propTypes2.default.number,
  backgroundColor: _propTypes2.default.string,
  classes: _propTypes2.default.object,
  fillerExtraStyles: _propTypes2.default.object,
  progressBarExtraStyles: _propTypes2.default.object
};

exports.default = ProgressBarContainer;