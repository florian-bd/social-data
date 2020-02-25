import React from 'react';
import {action} from '@storybook/addon-actions';
import Impacter from './Impacter';
import SelectUserContext from '../../context/SelectUserContext';

export default {
  title: 'Impacter',
  component: Impacter,
};

const IMPACTER_DATA = {
  id: '822d919d-0076-4d7d-a7ca-c5404a025614',
  name: 'sit enim',
  bio:
    'Cillum deserunt proident pariatur esse sunt minim aliqua exercitation adipisicing ut quis exercitation commodo esse. Aliqua deserunt adipisicing duis id. Tempor dolore dolore nulla sint ea pariatur enim nostrud sint in incididunt. Ad velit velit ad amet minim sint. Aliquip velit anim officia cillum adipisicing ea. Consequat culpa anim irure anim cupidatat laboris officia cupidatat excepteur commodo nulla. Occaecat do esse sint eiusmod velit id consequat. Velit consequat non fugiat est Lorem eu aute irure. Irure do veniam proident aute proident eu id Lorem. Est consectetur dolor et et eiusmod.',
  profile_image: 'https://picsum.photos/id/0/5616/3744',
};

export const NormalImpacter = () => (
  <SelectUserContext.Provider value={action('select user')}>
    <Impacter impacter={IMPACTER_DATA} />
  </SelectUserContext.Provider>
);
