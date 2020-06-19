import React from 'react';
import { Avatar, ResourceList, TextStyle } from '@shopify/polaris';

import { Doctor } from '../../../types/types';

const DoctorLine: React.FC<Doctor> = ({
  id, name, gender, register,
}) => {
  const media = <Avatar customer size="medium" name={name} />;

  return (
    <ResourceList.Item
      id={id}
      name={name}
      media={media}
      accessibilityLabel={`View details for ${name}`}
      onClick={() => { console.log('clicou'); }}
    >
      <h3>
        <TextStyle variation="strong">{name}</TextStyle>
      </h3>
      <div>
        {gender}
        -
        {register}
      </div>
    </ResourceList.Item>
  );
};

export default DoctorLine;
