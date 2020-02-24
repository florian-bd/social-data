import React, {useEffect, useState} from 'react';
import useListFetcher from './useListFetcher';

const ListFetcher = ({fetch, children}) => {
  const [list] = useListFetcher({fetch});

  const hasError = !list || list.hasError;
  if (hasError) {
    return 'Sorry, something went wrong';
  }

  return list.map(item => children(item));
};

export default ListFetcher;
