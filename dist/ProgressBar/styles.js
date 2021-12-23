"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

// eslint-disable-next-line max-lines-per-function
const styles = theme => ({
  progressBarContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressBar: {
    position: 'relative',
    height: '15px',
    width: '85px',
    borderRadius: '20px',
    border: '1px solid #333'
  },
  filler: {
    background: 'black',
    // default background color
    height: '100%',
    borderRadius: 'inherit',
    transition: 'width .2s ease-in'
  }
});

var _default = styles;
exports.default = _default;