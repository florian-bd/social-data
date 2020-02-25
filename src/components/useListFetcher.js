import React, {useEffect, useState} from 'react';

const useListFetcher = ({fetch, dependency}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    // React useEffect callback cannot be async so use inner function
    async function fetchList() {
      const list = await fetch();
      setList(list);
    }
    fetchList();
  }, [fetch, dependency]);

  return [list, setList];
};

export default useListFetcher;
