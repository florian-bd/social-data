import React from 'react';
import apiClient from '../api/apiClient';
import Impacter from './Impacter';
import ListFetcher from './ListFetcher';

const Impacters = () => {
  return (
    <ListFetcher fetch={apiClient.getImpacters}>
      {impacter => <Impacter key={impacter.id} impacter={impacter} />}
    </ListFetcher>
  );
};

export default Impacters;
