"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Filler = function Filler(_ref) {
  var percentage = _ref.percentage,
      fillerExtraStyles = _ref.fillerExtraStyles,
      classes = _ref.classes;

  var options = {
    className: classes.filler,
    style: {
      width: percentage + "%"
    }
  };

  if (fillerExtraStyles) {
    options.style = _extends({}, options.style, fillerExtraStyles);
  }

  return _react2.default.createElement("div", options);
};

Filler.propTypes = {
  percentage: _propTypes2.default.number,
  backgroundColor: _propTypes2.default.string,
  classes: _propTypes2.default.object,
  fillerExtraStyles: _propTypes2.default.object
};
exports.default = Filler;