import React from 'react';
import { ResourceList, TextStyle } from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import { Procedure } from '../../../types/types.d';

const ProcedureLine: React.FC<Procedure> = ({
  id, name, code,
}) => {
  const history = useHistory();

  return (
    <ResourceList.Item
      id={id}
      name={name}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => {
        history.push(`/procedure/${id}`);
      }}
    >
      <TextStyle variation="strong">
        {code}
        {' - '}
        {name}
      </TextStyle>
    </ResourceList.Item>
  );
};

export default ProcedureLine;
