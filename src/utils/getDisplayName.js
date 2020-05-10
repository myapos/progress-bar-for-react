const getDisplayName = (WrappedComponent) => {
  const nativeName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  return `withHOC-${nativeName}`;
};

export default getDisplayName;
