import React, { Fragment } from "react";
import ReactTooltip from "react-tooltip";
import getDisplayName from "../utils/getDisplayName";

/* It provides a tooltip to the base component with same styling */

const withToolTip = (BaseComponent) => {
  const WrappedComponent = (props) => {
    const { tooltipContent, ...restProps } = props;
    // console.log('tooltipContent', tooltipContent);

    // add tooltip if there is something to show
    if (tooltipContent && tooltipContent.length) {
      return (
        <Fragment>
          <div data-tip={tooltipContent}>
            <BaseComponent {...restProps} />
          </div>
          <ReactTooltip />
        </Fragment>
      );
    }

    return <BaseComponent {...restProps} />;
  };

  WrappedComponent.displayName = getDisplayName(BaseComponent);

  return WrappedComponent;
};

export default withToolTip;
