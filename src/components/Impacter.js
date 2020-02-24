import React, {useContext} from 'react';
import SelectUserContext from '../context/SelectUserContext';
import {Card, Button} from 'antd';

const Impacter = ({impacter}) => {
  const selectUser = useContext(SelectUserContext);
  return (
    <Card
      title={impacter.name}
      extra={
        selectUser && (
          <Button type="primary" onClick={() => selectUser(impacter)}>
            Select
          </Button>
        )
      }>
      {impacter.bio}
    </Card>
  );
};

export default Impacter;
