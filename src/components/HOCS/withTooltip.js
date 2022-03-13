import React, { Fragment } from 'react';
// import ReactTooltip from 'react-tooltip';
import { Tooltip } from '../ToolTip';
import { getDisplayName } from '../utils/getDisplayName';

/* It provides a tooltip to the base component with same styling */

const withToolTip = (BaseComponent) => {
  const WrappedComponent = (props) => {
    const { tooltipContent, tooltipStyle, ...restProps } = props;

    // add tooltip if there is something to show
    if (tooltipContent && tooltipContent.length) {
      return (
        <Fragment>
          <Tooltip tooltipContent={tooltipContent} style={tooltipStyle}>
            <BaseComponent {...restProps} />
          </Tooltip>
        </Fragment>
      );
    }

    return <BaseComponent {...restProps} />;
  };

  WrappedComponent.displayName = getDisplayName(BaseComponent);

  return WrappedComponent;
};

export default withToolTip;
