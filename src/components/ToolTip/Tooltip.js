import React from 'react';
import { createUseStyles } from 'react-jss';

import { styles } from './styles';

const useStyles = createUseStyles({
  ...styles,
});

/**It will accept a tooltip content message.
 * Any children component that is passed will be tooltiped with the defined content.
 * Then the react component will be rendered and a tooltip will be
 * displayed on mouse hover */

export const Tooltip = ({ tooltipContent, children, style }) => {
  const classes = useStyles();

  let tooltipStyle = {};

  if (style) {
    tooltipStyle = { ...style };
  }
  return (
    <div className={classes.tooltip} style={tooltipStyle}>
      {children}
      <span className={classes.tooltiptext}>{tooltipContent}</span>
    </div>
  );
};
