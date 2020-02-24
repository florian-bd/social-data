import React from 'react';
import apiClient from '../api/apiClient';
import Impacter from './Impacter';
import ListFetcher from './ListFetcher';
import styles from './Impacters.module.css';

const Impacters = () => {
  return (
    <ListFetcher fetch={apiClient.getImpacters}>
      {impacter => (
        <div className={styles.container}>
          <Impacter key={impacter.id} impacter={impacter} />
        </div>
      )}
    </ListFetcher>
  );
};

export default Impacters;
