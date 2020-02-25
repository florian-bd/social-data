import React, {useContext} from 'react';
import {Card, Button} from 'antd';
import SelectUserContext from '../../context/SelectUserContext';

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
