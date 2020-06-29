import React from 'react';
import { ResourceList, TextStyle } from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import { Specialty } from '../../../types/types.d';

const SpecialtyLine: React.FC<Specialty> = ({
  id, name, procedures,
}) => {
  const history = useHistory();

  return (
    <ResourceList.Item
      id={id}
      name={name}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => {
        history.push(`/dashboard/specialty/${id}`);
      }}
    >
      <h3>
        <TextStyle variation="strong">{name}</TextStyle>
      </h3>
      <div>
        {procedures!.map((procedure) => `${procedure!.name}, `.toLocaleLowerCase())}
      </div>
    </ResourceList.Item>
  );
};

export default SpecialtyLine;
