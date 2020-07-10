import React from 'react';
import { ResourceList, TextStyle } from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import { Procedure } from '../../../types/types.d';

const ProcedureLine: React.FC<Procedure> = ({
  id, name, code, procedureTable,
}) => {
  const history = useHistory();

  return (
    <ResourceList.Item
      id={id}
      name={name}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => {
        history.push(`${procedureTable?.id}/procedure/${id}`);
      }}
    >
      <TextStyle variation="strong">
        {code && (
          <>
            { code }
            {' - '}
          </>
        )}
        {name}
      </TextStyle>
    </ResourceList.Item>
  );
};

export default ProcedureLine;
