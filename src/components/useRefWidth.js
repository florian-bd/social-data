import React, {useCallback, useState} from 'react';

const useRefWidth = () => {
  const [width, setWidth] = useState();

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  return [width, measuredRef];
};

export default useRefWidth;
