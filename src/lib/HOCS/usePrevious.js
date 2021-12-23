import { useEffect } from 'react';

const usePrevious = ({ percentage, ref }) => {
  useEffect(() => {
    ref.current = percentage;
  });
  return ref.current;
};

export default usePrevious;
