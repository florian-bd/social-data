import React, {useEffect, useState, useContext} from 'react';
import SelectUserContext from '../context/SelectUserContext';

const Impacter = ({impacter}) => {
  const selectUser = useContext(SelectUserContext);
  return (
    <div onClick={selectUser && (() => selectUser(impacter))}>
      {impacter.id}
    </div>
  );
};

export default Impacter;
