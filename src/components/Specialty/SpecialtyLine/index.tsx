import React from 'react';
import { ResourceList, TextStyle } from '@shopify/polaris';

import { useHistory } from 'react-router-dom';

import { Specialty } from '../../../generated/graphql';

const SpecialtyLine: React.FC<Specialty> = ({
  id, name,
}) => {
  const history = useHistory();

  return (
    <ResourceList.Item
      id={id}
      name={name || undefined}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => {
        history.push(`/specialty/${id}`);
      }}
    >
      <h3>
        <TextStyle variation="strong">{name}</TextStyle>
      </h3>
    </ResourceList.Item>
  );
};

export default SpecialtyLine;
