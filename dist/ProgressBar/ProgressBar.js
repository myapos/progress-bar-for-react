'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Filler = require('./Filler');

var _Filler2 = _interopRequireDefault(_Filler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(_ref) {
  var percentage = _ref.percentage,
      fillerExtraStyles = _ref.fillerExtraStyles,
      progressBarExtraStyles = _ref.progressBarExtraStyles,
      classes = _ref.classes;

  var opt = progressBarExtraStyles;
  return _react2.default.createElement(
    'div',
    { className: classes.progressBarContainer },
    _react2.default.createElement(
      'div',
      {
        className: classes.progressBar,
        style: _extends({}, opt)
      },
      _react2.default.createElement(_Filler2.default, {
        percentage: percentage,
        fillerExtraStyles: fillerExtraStyles,
        classes: classes
      })
    )
  );
};
ProgressBar.propTypes = {
  percentage: _propTypes2.default.number,
  backgroundColor: _propTypes2.default.string,
  classes: _propTypes2.default.object,
  fillerExtraStyles: _propTypes2.default.object,
  progressBarExtraStyles: _propTypes2.default.object
};
exports.default = ProgressBar;