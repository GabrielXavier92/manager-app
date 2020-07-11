import React from 'react';
import { ResourceList, TextStyle } from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import { ProcedureTable } from '../../../generated/graphql';

const ProcedureTableLine: React.FC<ProcedureTable> = ({
  id, name,
}) => {
  const history = useHistory();

  return (
    <ResourceList.Item
      id={id}
      name={name || undefined}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => {
        history.push(`/procedureTable/${id}`);
      }}
    >
      <h3>
        <TextStyle variation="strong">{name}</TextStyle>
      </h3>
    </ResourceList.Item>
  );
};

export default ProcedureTableLine;
