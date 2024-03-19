import { ComponentType } from 'react';

export const getDisplayName = (WrappedComponent: ComponentType<any>) => {
  const nativeName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return `withHOC-${nativeName}`;
};
