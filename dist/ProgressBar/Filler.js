"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Filler = _ref => {
  let {
    percentage,
    fillerExtraStyles,
    classes
  } = _ref;
  const options = {
    className: classes.filler,
    style: {
      width: "".concat(percentage, "%")
    }
  };

  if (fillerExtraStyles) {
    options.style = _objectSpread(_objectSpread({}, options.style), fillerExtraStyles);
  }

  return /*#__PURE__*/_react.default.createElement("div", options);
};

Filler.propTypes = {
  percentage: _propTypes.default.number,
  backgroundColor: _propTypes.default.string,
  classes: _propTypes.default.object,
  fillerExtraStyles: _propTypes.default.object
};
var _default = Filler;
exports.default = _default;