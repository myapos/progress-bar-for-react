import { useEffect } from 'react';

import { UsePreviousProps } from './types';

const usePrevious = ({ percentage, ref }: UsePreviousProps) => {
  useEffect(() => {
    ref.current = percentage;
  });
  return ref.current;
};

export default usePrevious;
